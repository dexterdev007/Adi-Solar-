# Backend Setup and Deployment

This guide explains how to set up the database and integrations, test locally, and deploy to Render.

## Prerequisites

- PostgreSQL database (Supabase)
- Google Cloud Service Account with Google Sheets API access
- Python 3.9+

## 1. Supabase Setup

1. Create a project on [Supabase.com](https://supabase.com/).
2. Navigate to the SQL Editor and run the query in `supabase_schema.sql` to create the `leads` table.
3. Fetch your credentials:
   - **Project URL**: Found in Settings > API > Project URL.
   - **Project API Key**: Found in Settings > API > Project API keys (anon public).
4. Update `.env` with `SUPABASE_URL` and `SUPABASE_KEY`.

## 2. Google Sheets Setup

1. Create a new Google Sheet.
2. Note the **Spreadsheet ID** from the URL (e.g., `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit`).
3. Add the following columns to the first row (headers): `Date`, `Name`, `Phone`, `Email`, `Service`, `Message`, `Source`.
4. Go to the [Google Cloud Console](https://console.cloud.google.com/).
5. Create a new Project and enable the **Google Sheets API** and **Google Drive API**.
6. Navigate to APIs & Services > Credentials. Click "Create Credentials" -> "Service Account".
7. Once created, click on the Service Account -> "Keys" -> "Add Key" -> "Create new key" (JSON). Download the `.json` file.
8. **IMPORTANT:** Open your Google Sheet, click "Share", and invite the `client_email` from your JSON file as an "Editor".
9. Rename the downloaded JSON file to `credentials.json` and place it in the `backend/` directory.
10. Update `.env` with `GOOGLE_CREDENTIALS_JSON=credentials.json` and the `SPREADSHEET_ID`.

## 3. Local Development

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
3. Copy `.env.example` to `.env` and fill in the values:
   ```bash
   cp .env.example .env
   ```
4. Start the server:
   ```bash
   uvicorn main:app --reload
   ```
5. Test the API at `http://127.0.0.1:8000/docs`. By visiting the automatically generated Swagger UI.

## 4. Deployment on Render

1. Create a new "Web Service" on [Render.com](https://render.com/).
2. Select your GitHub repository.
3. Configure the service:
   - **Root Directory**: `backend`
   - **Environment**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add Environment Variables in Render:
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
   - `SPREADSHEET_ID`
   - `WORKSHEET_NAME` (Optional, defaults to Sheet1)
   - To handle Google Credentials on Render, you have two options:
     - **Option 1**: Create an environment variable `GOOGLE_CREDENTIALS_JSON` pointing to `/etc/secrets/credentials.json`, and upload the JSON file as a Secret File in Render under "Advanced" -> "Secret Files".
     - **Option 2**: Commit the `credentials.json` file (Not recommended for public repos unless strictly private).

The service will automatically build and deploy!

import os
import gspread
import requests
from google.oauth2.service_account import Credentials
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

SPREADSHEET_ID = os.getenv("SPREADSHEET_ID")
WORKSHEET_NAME = os.getenv("WORKSHEET_NAME", "Sheet1")
CREDENTIALS_FILE = os.getenv("GOOGLE_CREDENTIALS_JSON")
GOOGLE_WEBHOOK_URL = os.getenv("GOOGLE_WEBHOOK_URL")

def get_google_sheet():
    if not SPREADSHEET_ID or not CREDENTIALS_FILE:
        return None
        
    scopes = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive"
    ]
    
    try:
        credentials = Credentials.from_service_account_file(
            CREDENTIALS_FILE, scopes=scopes
        )
        gc = gspread.authorize(credentials)
        sheet = gc.open_by_key(SPREADSHEET_ID).worksheet(WORKSHEET_NAME)
        return sheet
    except Exception as e:
        print(f"Error authenticating to Google Sheets: {e}")
        return None

async def append_lead_to_sheet(lead_data: dict):
    """
    Format: Date | Name | Phone | Email | Service | Message | Source
    """
    # If a webhook URL is provided, use that instead of the service account
    if GOOGLE_WEBHOOK_URL:
        try:
            response = requests.post(GOOGLE_WEBHOOK_URL, json=lead_data)
            response.raise_for_status()
            return True
        except Exception as e:
            print(f"Error calling Google Webhook: {e}")
            return False

    # Fallback to service account method
    sheet = get_google_sheet()
    if not sheet:
        print("Google Sheets not configured. Skipping sheet insertion.")
        return False
        
    date_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    row = [
        date_str,
        lead_data.get("name", ""),
        lead_data.get("phone", ""),
        lead_data.get("email", ""),
        lead_data.get("service", ""),
        lead_data.get("message", ""),
        lead_data.get("source", "")
    ]
    
    try:
        # Append the row
        sheet.append_row(row)
        return True
    except Exception as e:
        print(f"Error appending row to Google Sheets: {e}")
        return False

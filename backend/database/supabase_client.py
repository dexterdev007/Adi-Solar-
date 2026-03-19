import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("WARNING: Supabase credentials not found. Database operations will fail if executed.")
    supabase = None
else:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

async def insert_lead(lead_data: dict):
    """
    Inserts a lead into the Supabase database.
    """
    if not supabase:
        print("Supabase not configured. Skipping database insertion.")
        return False
        
    try:
        response = supabase.table("leads").insert(lead_data).execute()
        return response.data
    except Exception as e:
        print(f"Error inserting into Supabase: {e}")
        return False

from fastapi import APIRouter, HTTPException
from models.lead import LeadCreate
from database.supabase_client import insert_lead
from services.google_sheets import append_lead_to_sheet

router = APIRouter()

async def process_submission(lead: LeadCreate, form_source: str = "generic"):
    # Convert lead payload to dict
    lead_data = lead.model_dump(exclude_unset=True)
    if not lead_data.get("source"):
        lead_data["source"] = form_source

    try:
        # Save to Supabase
        db_result = await insert_lead(lead_data)
        
        # Save to Google Sheets
        sheet_result = await append_lead_to_sheet(lead_data)
        
        return {
            "status": "success",
            "message": "Submission received successfully",
            "db_inserted": bool(db_result),
            "sheet_inserted": sheet_result
        }
        
    except Exception as e:
        print(f"Error processing submission: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/contact")
async def submit_contact(lead: LeadCreate):
    return await process_submission(lead, form_source="contact")

@router.post("/booking")
async def submit_booking(lead: LeadCreate):
    return await process_submission(lead, form_source="booking")

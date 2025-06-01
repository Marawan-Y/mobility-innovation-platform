# Mobility Innovation Platform – Backend

This is the Flask backend powering the Agentic Mobility Innovation Platform.

## Setup

1. Create and edit `.env` (see `.env.example`)
2. Install dependencies:
pip install -r requirements.txt

markdown
Copy code
3. Initialize MySQL database:
mysql -u <user> -p < backend/schema.sql

markdown
Copy code
4. Run the API server:
python app.py

markdown
Copy code

## API Endpoints

- `GET /api/trends` – List latest trends
- `POST /api/trends` – Submit new trend (JSON)
- `POST /api/feedback` – Add feedback (JSON)
- `POST /api/generate_trends` – (Placeholder) AI trend gen
- `POST /api/logs` – Log agentic actions

## LLM Integration

- Replace LLM/agent calls with your API key(s).
- All API placeholders are clearly marked.

## Environment Variables

Copy `.env.example` and set:

- `SECRET_KEY`
- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `OPENAI_API_KEY`

## Security

- Never commit your `.env` or actual secrets.
- See the code comments for more instructions.

---
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from db import get_connection

# ----------- LLM/AGENTIC API PLACEHOLDER -----------
# Add imports and config for your LLM or agentic services here

load_dotenv()

app = Flask(__name__)
CORS(app)

# ------------- Health Check -------------
@app.route('/api/health')
def health():
    return jsonify({"status": "ok"})

# ------------- Trends Endpoints -------------
@app.route('/api/trends', methods=['GET'])
def get_trends():
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute("SELECT * FROM trend_queries ORDER BY created_at DESC LIMIT 20")
        data = cur.fetchall()
    conn.close()
    return jsonify(data)

@app.route('/api/trends', methods=['POST'])
def create_trend():
    req = request.json
    keys = (
        "use_case", "sector", "demand", "selected_trend",
        "trend_solutions", "trend_assessment", "radar_positioning",
        "pestel_tag", "market_solution", "partners", "confidence_score"
    )
    values = tuple(req.get(k) for k in keys)
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute("""
            INSERT INTO trend_queries (
                use_case, sector, demand, selected_trend, trend_solutions, trend_assessment,
                radar_positioning, pestel_tag, market_solution, partners, confidence_score
            ) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """, values)
        conn.commit()
    conn.close()
    return jsonify({"status": "created"})

# ------------- Feedback Endpoints -------------
@app.route('/api/feedback', methods=['POST'])
def submit_feedback():
    req = request.json
    trend_id = req.get("trend_id")
    user_name = req.get("user_name", "")
    comment = req.get("comment", "")
    rating = req.get("rating", 5)
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute("""
            INSERT INTO user_feedback (trend_id, user_name, comment, rating)
            VALUES (%s, %s, %s, %s)
        """, (trend_id, user_name, comment, rating))
        conn.commit()
    conn.close()
    return jsonify({"status": "feedback_saved"})

# ------------- Logs for Agentic Actions -------------
@app.route('/api/logs', methods=['POST'])
def add_log():
    req = request.json
    action = req.get("action")
    detail = req.get("detail")
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute("""
            INSERT INTO agentic_logs (action, detail)
            VALUES (%s, %s)
        """, (action, detail))
        conn.commit()
    conn.close()
    return jsonify({"status": "log_saved"})

# ------------- (Other endpoints: logs, users, etc) -------------

# Placeholder for advanced trend generation using LLM/Agent API
@app.route('/api/generate_trends', methods=['POST'])
def generate_trends():
    # Extract use_case, sector, demand from req.json
    # TODO: Integrate with LLM/Agent API (placeholder here)
    return jsonify({
        "message": "LLM trend generation is a placeholder. Insert your LLM API here.",
        "trends": []
    })

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)

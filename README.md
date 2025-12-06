# ☁️ CloudSpend — Cloud Cost Optimizer (AWS/Azure + AI + RAG + Docker)

###  Cloud Cost Monitoring |  AI Recommendations |  Anomaly Detection |  RAG Assistant

CloudSpend is an AI-powered **FinOps + Cloud Cost Optimization Platform** that helps organizations track, analyze, and reduce expenses across **AWS/Azure cloud infrastructure**.

The system detects anomalies in billing, recommends cost savings (rightsizing, idle instance shutdowns), and responds to queries using an integrated **RAG-based assistant**.

---

🚀 Features
Feature	Description
📊 Cost Dashboard	Visualizes AWS/Azure spend history
🔥 AI Anomaly Detection	Detects unusual spikes in billing
💰 Smart Recommendations	Idle resource & rightsizing suggestions
🤖 RAG Chat Assistant	Ask queries like "Why did EC2 cost rise?"
🧠 ML Microservice	FastAPI-based inference & anomaly logic
🐳 Dockerized Deployment	Run everything using docker-compose up --build
🧩 Modular Backend	Node.js + Express micro-service architecture

## Project Architecture
CloudSpend/
│── backend/                     # Node.js + Express API Gateway
│   ├── src/
│   │   ├── routes/              # REST API endpoints
│   │   ├── controllers/         # Request handlers
│   │   ├── services/            # Cost + Anomaly + RAG logic
│   │   ├── models/              # MongoDB Schemas
│   │   ├── config/              # DB connections + cloud setup
│   │   └── server.js            # Core server entry
│   ├── package.json
│   ├── Dockerfile
│
│── frontend/                    # React-based cost dashboard UI
│   ├── src/
│   │   ├── components/          # Tables, Charts, Cards, UI blocks
│   │   ├── pages/               # Dashboard, Recommendations, RAG Chat
│   │   ├── services/            # Axios API clients
│   │   └── App.jsx              # UI entry
│   ├── vite.config.js
│   ├── package.json
│   ├── Dockerfile
│
│── ml-engine/                   # AI + ML Microservice
│   ├── api.py                   # FastAPI routes
│   ├── scripts/                 # anomaly + forecasting logic (future)
│   ├── requirements.txt
│   ├── Dockerfile
│
│── docker-compose.yml           # Run entire system → 1 command
│── README.md                    # Project documentation

## 🔄 Workflow

Frontend UI (React)
↓
Backend API (Node/Express)
↓
MongoDB (Cost + Logs + Recommendations)
↓
ML Engine (FastAPI - Anomaly + Forecasting)
↓
AI RAG Assistant (Embeddings + Docs)

✔ Frontend calls REST API  
✔ Backend returns cost anomalies & savings suggestions  
✔ ML engine generates cost anomalies  
✔ RAG answers cloud questions  

---

##  Deployment (One Command)

> Make sure Docker Desktop is running

```bash
docker-compose up --build
```

Service	URL
UI Dashboard	http://localhost:3000

Backend API	http://localhost:5000

ML Engine	http://localhost:8000

MongoDB	internal container

How to Run (Step-By-Step)
```bash
git clone https://github.com/<your-username>/CloudSpend.git
cd CloudSpend
```
Start Everything
 ```bash
docker-compose up --build
```
Open Browser
```bash
http://localhost:3000
```
API Endpoints
Endpoint	Description
GET /api/cost/summary	Get daily billing usage
GET /api/anomaly	Fetch anomaly logs
POST /api/anomaly/run	Trigger anomaly detection
GET /api/recommendations	Cost-saving recommendations
POST /api/rag/ask	Ask AI cost related query





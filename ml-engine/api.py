from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(title="Cloud Cost ML Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "ML Engine up"}


@app.get("/anomaly/sample")
def anomaly_sample():
    services = [
        ("aws", "EC2"),
        ("aws", "S3"),
        ("azure", "VM"),
        ("azure", "BlobStorage"),
    ]
    provider, service = random.choice(services)
    expected = round(random.uniform(5, 20), 2)
    observed = round(expected * random.uniform(1.2, 2.0), 2)
    severity = random.choice(["low", "medium", "high"])
    return {
        "provider": provider,
        "service": service,
        "expectedCost": expected,
        "observedCost": observed,
        "severity": severity,
    }

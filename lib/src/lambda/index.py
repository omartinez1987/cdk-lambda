
import json
import os
from datetime import datetime, timezone


def handler(event, context):

    # Read environment variable configured by CDK
    environment = os.environ.get("ENVIRONMENT", "dev")

    response = {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Hello from AWS Lambda!",
            "environment": environment,
            "function_name": context.function_name,
            "request_id": context.aws_request_id,
            "timestamp": datetime.now(timezone.utc).isoformat()
        })
    }

    return response

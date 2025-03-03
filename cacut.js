let body = $response.body;
let obj = JSON.parse(body);

obj.data = {
  "subscription": {
    "status": "active",
    "expire_date": "2099-12-31T23:59:59Z",
    "plan": "Pro",
    "features": [
      "no_watermark",
      "premium_assets",
      "advanced_editing"
    ]
  }
};

$done({ body: JSON.stringify(obj) });

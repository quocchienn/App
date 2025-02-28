var obj = JSON.parse($response.body);

obj.subscriber = {
  "entitlements": {
    "Gold": {
      "grace_period_expires_date": null,
      "purchase_date": "2024-09-12T01:04:17Z",
      "product_identifier": "com.locket02.premium.yearly",
      "expires_date": "2099-12-18T01:04:17Z"
    }
  },
  "subscriptions": {
    "com.locket02.premium.yearly": {
      "is_sandbox": false,
      "ownership_type": "PURCHASED",
      "billing_issues_detected_at": null,
      "period_type": "normal",
      "expires_date": "2099-12-18T01:04:17Z",
      "grace_period_expires_date": null,
      "unsubscribe_detected_at": null,
      "original_purchase_date": "2024-09-12T01:04:18Z",
      "purchase_date": "2024-09-12T01:04:17Z",
      "store": "app_store"
    }
  }
};

// Đảm bảo Gold không bị mất khi thoát app
obj.subscriber.entitlements["Gold"].expires_date = "2099-12-18T01:04:17Z";
obj.subscriber.subscriptions["com.locket02.premium.yearly"].expires_date = "2099-12-18T01:04:17Z";

$done({ body: JSON.stringify(obj) });

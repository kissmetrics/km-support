---
layout: post
title: Tracking Refunds
categories: how-tos
author: Eric Fung
summary: Track refunds as a separate event, with a negative Billing Amount property.
---
If you are tracking **Billed** or **Purchased** events, then tracking refunds is a simple addition. You can add the **Refunded** event, and pass in a negative **Billing Amount** property. This will help correctly calculate metrics like `Total Lifetime Value`. Make sure to use the same property name that is tracking your revenue information, If your property name is different from **Billing Amount**.

## Example

To demonstrate, below is an example table of values for a particular person `1234567`. Notice that all revenue information is passed under the same property, **Billing Amount**.

Identity     | Timestamp  | Event    | Prop:Billing Amount
------------ | ---------- | -------- | -------------------
1234567      | 1305072000 | Billed   | 90
1234567      | 1305080000 | Refunded | -90
1234567      | 1307600000 | Billed   | 50
1234567      | 1309900000 | Billed   | 45
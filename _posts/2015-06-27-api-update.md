---
layout: post
title: "API Update June 29, 2015 (in beta)"
tags: []
summary: Work with your Kissmetrics data via our core API.
---
* Table of Contents
{:toc}
* * *

## Generate an API token

In order to work with our API you need to generate a Personal Token from within your KISSmetrics administration interface. This can be viewed from within the Account settings menu option. You will see Manage API Tokens. From there you can Generate a new token and you are ready to get started.

### Request Requirements

#### Content Negotiation

We currently only support JSON (application/json) in our request lifecycle. You can specify this with an HTTP Header:

`Accept: application/json`

When we require a POST to an endpoint, such as our People Search execution, you must specify the Content-Type.

`Content-Type: application/json`

#### Authentication

We require authentication via the Authorization HTTP header. All requests must be made over HTTPS. Calls made over HTTP will result in a 301 Permanent Redirect. Authentication is required for all requests.

`Authorization: Bearer your-token-here`

## All Reports
The reports endpoint returns a list of reports you are authorized to access. This includes all Reports across all Products.

### Request

{% highlight bash %}
curl -i 'https://api.kissmetrics.com/core/reports'  \
  -H 'Authorization: Bearer YOUR-API-TOKEN'
{% endhighlight %}

### Response

{% highlight json %}
[
  {
    "links": [
      {
        "templated": false,
        "href": "https://api.kissmetrics.com/core/reports/64361c30-4a48-0131-0cbb-22000a9f1c0f",
        "rel": "self",
        "name": "Self"
      },
      {
        "templated": false,
        "href": "https://api.kissmetrics.com/query/reports/64361c30-4a48-0131-0cbb-22000a9f1c0f/run",
        "rel": "run",
        "name": "Run Report"
      },
      {
        "templated": false,
        "href": "https://api.kissmetrics.com/core/products/6c921840-0edf-0131-ead4-12313b0d181e",
        "rel": "product",
        "name": "Product"
      },
      {
        "templated": false,
        "href": "https://api.kissmetrics.com/core/accounts/51cc9c30-0edf-0131-ead3-12313b0d181e",
        "rel": "account",
        "name": "Account"
      }
    ],
    "created_at": "2013-12-18T19:27:43+00:00",
    "name": "My People Search",
    "report_type": "people_search_v2",
    "account_id": "51cc9c30-0edf-0131-ead3-12313b0d181e",
    "product_id": "6c921840-0edf-0131-ead4-12313b0d181e",
    "id": "64361c30-4a48-0131-0cbb-22000a9f1c0f"
  }
]
{% endhighlight %}

## Running a Report

The run endpoint starts a query for your report. You can retrieve this URI via several means:

* The links from within an All Reports list response.
* The links from within a Report Details list response.

### Options

The request body should contain a JSON string containing the report start date and end date as Unix timestamps in seconds.

### Request

{% highlight bash %}
curl -i 'https://query.kissmetrics.com/v2/products/65faf01a-ab13-1030-97f2-22000a91b1a1/reports/a05aaa60-dffd-0132-7bff-22000a9a8afc/run'  \
  -H 'Authorization: Bearer YOUR-API-TOKEN'  \
  -H 'Content-Type: application/json'  \
  -X POST  \
  -d '{"start_date": "2015-06-02T20:00:00-04:00", "end_date": "2015-06-09T19:59:59-04:00"}'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 202 Accepted
Cache-Control: no-cache
Content-Type: application/json; charset=utf-8
Location: https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/status
{% endhighlight %}


{% highlight json %}
{
  "meta": {
    "status":202
  },
  "data": {
    "message":"success"
  },
  "links":[{
    "name":"Status",
    "rel":"query-status",
    "href":"https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/status",
    "templated":false
  }]
}
{% endhighlight %}

## Querying Status of a Running Report

When initiating a report to run, the response headers will contain the location to obtain the status of the report job.

You should check the status of the query until it is completed. Once completed, you can retrieve results for the query.

### Request

{% highlight bash %}
curl -i 'https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/status'  \
  -H 'Authorization: Bearer YOUR-API-TOKEN'
{% endhighlight %}

### Query Not Completed Response

{% highlight http %}
HTTP/1.1 200 OK
Cache-Control: max-age=0, private, must-revalidate
Content-Type: application/json; charset=utf-8
{% endhighlight %}

{% highlight json %}
{
  "meta": {
    "status":200
  },
  "data":{
    "completed":false,
    "progress":0.5
  },
  "links":[{
    "name":"Self",
    "rel":"self",
    "href":"https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/status",
    "templated":false
  }]
}
{% endhighlight %}

### Query Completed Response

{% highlight http %}
HTTP/1.1 201 Created
Cache-Control: max-age=0, private, must-revalidate
Content-Type: application/json; charset=utf-8
Location: https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/results
{% endhighlight %}

{% highlight json %}
{
  "meta": {
    "status":201
  },
  "data":{
    "completed":true,
    "progress":1.0
  },
  "links":[{
    "name":"Self",
    "rel":"self",
    "href":"https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/status",
    "templated":false
  },
  {
    "name":"Results",
    "rel":"query-results",
    "href":"https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/results",
    "templated":false
  }]
}
{% endhighlight %}

## Listing Results of a Report

When the query for a running report has completed, the response headers will contain the location to obtain the results.

### Request

{% highlight bash %}
curl -i 'https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/results'  \
  -H 'Authorization: Bearer YOUR-API-TOKEN'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
Cache-Control: max-age=0, private, must-revalidate
Content-Type: application/json; charset=utf-8
{% endhighlight %}

{% highlight json %}
{
  "meta":{
    "status":200
  },
  "data":[[12345, "bob@kissmetrics.com"]],
  "pagination":{
    "limit":50,
    "offset":0,
    "total":1
  },
  "links":[
  {
    "name":"Self",
    "rel":"self",
    "href":"https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/results?limit=50&offset=0",
    "templated":false
  },
  {
    "name":"Export",
    "rel":"export",
    "href":"https://query.kissmetrics.com/v2/queries/9b85d22c-d5c0-477d-8396-0e6e3dbe81b3/export",
    "templated":false
  }
  ]
}
{% endhighlight %}

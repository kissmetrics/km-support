Summary: Accurately track the revenue you've earned from marketing campaigns.

# ROI of Campaigns Use Case

## How to Find the ROI of Your Marketing Campaigns

To accurately track the revenue you've earned from marketing campaigns, you'll need to set up two things:

### 1) Revenue data.

You'll need to be tracking your revenue. If you haven't set this up already, check out our [documentation on the Revenue Report][revenue-report].

### 2) Campaigns data.

There are several ways to track your marketing campaigns. The most popular method is to use UTM parameters. By adding some extra data to a link, we can track each person that goes through that link.

These work exactly like they do in Google Analytics. Use [Google's URL Builder][url-builder] to name your campaign. Then whenever someone clicks on your link, KISSmetrics will record an "Ad Campaign Hit" event and track your campaign info as properties.

In other words, you can keep tracking all your campaigns in the same way you've been tracking them for Google Analytics. This is the easiest way to get started.

But what if you want more control on how you tag your campaigns and events?

With KISSmetrics, you can also trigger any event you want just by modifying the URL.

For example, if you used this link:

	http://www.example.com/landing-page?kme=Followed+LP+Link&km_email+type=march2012

You'd record this info for everyone that clicks it:

	Event triggered: Followed LP Link
	Email type: march2012
	
Check out our [documentation on the URL API][url-api] for all the details on how this works.

### What about AdWords?

When auto-tagging links in AdWords, Google uses a special parameter called "gclid." This gets added to all your AdWords links automatically. When KISSmetrics sees it, we record an "Ad Campaign Hit" event but we can't see any other info about your campaign.

So if you're using the AdWords auto-tagging but want more info about your campaigns, you'll need to manually edit the links in your ads using one of the methods above. This won't interrupt the auto-tagging at all.

## Finding Your Revenue Data

Now that you're recording revenue data and have been tracking your campaigns, let's pull some data.

First, click on the Revenue tab at the top of your KISSmetrics account:

![KM-Revenue-Tab][ss1]

Right away, you get a nice breakdown for the total revenue that you're pulling in. 

![KM-Revenue-Report-With-Segment][ss2]

Aggregate revenue is great but the real value comes from knowing where that revenue is coming from. Towards the bottom of the report, you'll see a "By Segment" box. Build a segment for "Show First Ever" and select "Campaign name" as the property.

You'll see a table similar to this one:

![KM-Revenue-Report-Edited-for-Campaigns][ss3]

This is a list of every campaign (by name) that has contributed revenue to your business.

Remember, the standard UTM parameters include at least three items:

1. Campaign Source
2. Campaign Medium
3. Campaign Name

Campaign content and campaign terms are also used on occasion.

Google Analytics encourages you to use the source, medium, and name every time. While KISSmetrics will record whatever you have even if you only use one of them, using all three is a good habit to get into.

And when you segment your report, you can choose whichever campaign property that you want to look at. You can also segment your data with any other property that you've been tracking.

If you're using the KISSmetrics URL API to track your links and campaigns, select the property that you're actively using.


### "First Ever" vs "Last Ever"

Remember how we picked "First Ever"? That means the table is showing us the first touch point our campaigns. Since KISSmetrics is a customer analytics tool, we know where our customers originally came from to connect revenue back to those first touch points.

This will tell you which campaigns originally brought customers to you.

And "Last Ever" will give you the campaign that the customer has used most recently.

### Revenue Metrics

To help you find the best sources of growth for your business, we've included several metrics in this table:

* **Total Revenue**: By default, the table is sorted by total revenue so you can see which campaigns drive the majority of your revenue.
* **Average Revenue/Person**: This is the revenue you've earned on average from each person in that group.
* **Lifetime Value**: This is the revenue you can *expect* to receive in total from each of these customers. While average revenue per person shows you what you've already earned, lifetime value makes a prediction on what you'll earn in the future.
* **Paying Customers**: The total number of customers you've received from this traffic source.
* **Churn**: This is the percentage of people that leave. The report will give you daily, weekly, or monthly churn depending on the timeline that you select at the top of the report. Churn is described [in more detail here][churn].

## What to Look For
To determine whether or not you should keep investing in your campaigns, there's three things you want to look for.

### 1. Which campaigns are generating significant revenue?

Since the data is sorted by total revenue by default, the campaigns that move the most revenue will be right at the top. These are your heavy hitters. 

What if your campaign isn't on this list?

Then KISSmetrics hasn't recorded any revenue from that campaign.

### 2. Which campaigns have a relatively high lifetime value?

Total revenue doesn't tell us the whole story, we also need to take a look at the lifetime value of our campaigns. This tells us whether or not certain customers are valuable.

Keep an eye out for campaigns that have a high lifetime value and a low revenue. This means that the customers are valuable to your business, you just need more of them to make a real impact. These are your growth opportunities.

### 3. Does a campaign drive low-quality customers?

In some cases, you'll run a campaign that immediately boosts revenue. But a month later, the spike in sales has vanished. What happened?

Some campaigns do a great job at acquiring customers but have a downside. The customers aren't the best fit for your business. They try your product and never come back. Or they sign up and cancel within a few weeks.

Lifetime value will help you avoid the low-quality customers. Also check your churn rate (especially if you have a subscription business). High churn rates signal that there's a problem with the campaign.

## How to Calculate Your ROI
Now that you have the total amount of revenue from our campaigns, you can get a quick sense for how valuable your investments are.

Use this formula: `(Total Revenue from the Campaign - Cost of Campaign) / (Cost of the Campaign)`

This will give you a ratio for your ROI. To turn it into a percentage, multiply by 100. The higher the percentage the better you're doing. At 0%, you broke even and covered the cost of your marketing. You didn't lose money but you didn't earn anything either. With a 100% ROI, you doubled your money and a 200% ROI means you tripled it. If you end up with a negative number, you're losing money.

But how do we calculate the cost of our campaigns? Figure out how much time your team spends on the campaign and use their salaries as a rough estimate. Also include any other expenses like design work, ad spend, etc. It's pretty difficult to calculate your costs perfectly. Start with what you have and refine your calculations over time as your expense tracking becomes more precise. 


[revenue-report]: /tools/revenue-report
[url-builder]: http://support.google.com/analytics/bin/answer.py?hl=en&answer=1033867
[url-api]: /apis/url
[churn]: /tools/revenue-report#churn-what-about-customers-who-stop-paying-

[ss1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/roi-campaigns/01-KM-Revenue-Tab.png
[ss2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/roi-campaigns/02-KM-Revenue-Report-With-Segment.png
[ss3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/roi-campaigns/03-KM-Revenue-Report-Edited-for-Campaigns.png
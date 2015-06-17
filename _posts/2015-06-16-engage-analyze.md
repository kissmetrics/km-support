---
layout: post
title: How does Engage work with Analyze?
categories: engage
summary: You can find more details about how Engage and Analyze work together here.
---
* Table of Contents
{:toc}
* * *

# Events in Analyze

When you create a campaign in Engage you will pass events to Analyze. The events that are passed to Analyze follow the naming convention of “campaign name -” + the following, for example “Test Campaign - eligible”. 

- **eligible:** The number of people who fit the audience criteria.
 
- **viewed:** The number of people who are shown the Engagement.

- **closed:** The number of people who click to close an Engagement.

- **clicked:** The number of people who click on the Engagement through the Engagement or the button on the Engagement. 

- **completed goal:** The number of people who complete the conversion event or visit the conversion URL.

# Properties in Analyze

In addition to the events that are passed to Analyze, if you chose to A/B test your campaign you will also see the property “campaign name - group”. If the the visitor is shown an Engagement they will receive the value “variation”. If they are not shown an Engagement but match the audience, placement and frequency requirements they will receive the value “control”.
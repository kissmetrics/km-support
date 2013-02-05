---
layout: post
title: Relative To
categories: [tools, power-report]
author: Eric Fung
summary: The Power Report has a date calculation called "Relative to [segment]". Here's what it means.
---
As you use the Power Report, you may notice an option appear in the date picker for your report columns called "Relative To SEGMENT NAME". This differs from the usual calculations of "Global Date" or "Last Month" or "Last 30 days".

* **Global Date Range** (or any other range of days): we'll **find the people** that belong in the report first, **then** place them into segments.
* **Relative to Segment**: we'll first **assign people to segments**, then **keep the ones** that belong in the report.

## Example

Let's say you want a report on the number of people who "Performed Event Foo" on December 9, segmented by the Last "A/B Variation" set for each person.

Now imagine four different people:

    Person A
    Dec 9 @ 1:00 PM "Performed Event Foo"
    Dec 9 @ 2:00 PM "A/B Variation" set to "Variation A"
    Dec 9 @ 2:01 PM "Performed Event Foo"
    
    Person B
    Dec 9 @ 1:00 PM "Performed Event Foo"
    
    Person C
    Dec 9 @ 1:00 PM "Performed Event Foo"
    Dec 9 @ 2:00 PM "A/B Variation" set to "Variation A"

    Person D:
    Dec 9 @ 2:00 PM "Performed Event Foo"
    Dec 9 @ 2:00 PM "A/B Variation" set to "Variation A"
    
* **Global Date Range (December 9)**: we'll find the people that belong, and then figure out what segments they belong in. So, we report that *all 4 people* "Performed Event Foo", 3 of which (A, C, and D) were eventually assigned to the segment "Variation A", while 1 person (B) is assigned to the segment "None", representing they did not receive an "A/B Variation" property.

Segment | Number of People who "Performed Event Foo"
------- | --
Variation A | 3
None | 1


* **Relative to A/B Variation**: we start by assigning people to segments. Again, 3 people (A, C, and D) are assigned to the segment "Variation A", and person B is assigned to the "None" segment. Now we check for each person whether they "Performed Event Foo" *in the same second or after* getting the property. This excludes Person C from the report, because they never "Performed Event Foo" *after* receiving the "A/B Variation" property.


Segment | Number of People who "Performed Event Foo"
------- | --
Variation A | 2
None | 1
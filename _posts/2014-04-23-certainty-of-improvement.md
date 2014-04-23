---
layout: post
title: What is Certainty of Improvement?
categories: [tools, a-b-test-report]
summary: How does KISSmetrics know that the improvement we see in a variant is real and not just due to luck?
published: false
---
* Table of Contents
{:toc}
* * *

On the KISSmetrics A/B Test Report summary area and table area, you’ll see a percentage called the “Certainty of Improvement.” With every test there is a chance the better performing variant is actually the worse variant but just got lucky and looks like the better variant. The certainty of improvement is simply how sure we are that the improvement we see in a variant is real and not just due to luck. The A/B Test Report will determine a winner when "Certainty of Improvement" is greater than 95%.

![Certainty of Improvement Summary](http://kissmetrics-support-files.s3.amazonaws.com/assets/tools/a-b-test-report/certainty_summary.png)
![Certainty of Improvement Table](http://kissmetrics-support-files.s3.amazonaws.com/assets/tools/a-b-test-report/certainty_table.png)

* * *

## Here’s a simple way to think about Certainty of Improvement:

Your experiment has a baseline (usually an Original version) and other variations.
Your original and your variations each receive a sample size based on how you allocated traffic to them from your A/B testing platform (Optimizely, Visual Website Optimizer, etc.).
Based on the number of conversions and conversion rate, there is a range of improvement.
How confident is KISSmetrics in whether the improvement are not a statistical fluke or random chance?
“Certainty of Improvement” is the way we measure that level of confidence. It’s how sure we are that a certain variant is likely to be better to use for producing better results.

* * *

## How do we calculate Certainty of Improvement?

We calculate Certainty of Improvement using a normal approximation.

![Probably of improvement](http://kissmetrics-support-files.s3.amazonaws.com/assets/tools/a-b-test-report/test_calculation_1.png)
![Normal approximation](http://kissmetrics-support-files.s3.amazonaws.com/assets/tools/a-b-test-report/test_calculation_2.png)

Where N means the normal distribution.

* * *

## Why do we use a normal approximation?

- accurate approximation, especially as the number of samples increases
- quick to calculate
- provides stable results

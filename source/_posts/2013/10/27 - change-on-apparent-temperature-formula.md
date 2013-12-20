title: Change on Apparent Temperature Formula
date: 2013-10-27 21:17:11
share: true
categories: [news, engineering]
tags: []
---
We recently took notice that wearther was not proving the right clothing combinations when temperatures were greater than 27 °C / 80 °F. We quickly realized that it was due to the formula of one of the temperature indicators that we currently use - Apparent Temperature. Because of this, wearther was providing us with combinations that involved too many layers of clothing.

As of current, wearther makes use of the [Australian Apparent Temperature][AAT] which takes into account wind speed. This works great but we missed out on the fact that it was meant to be used during cooler and not warmer temperatures. As a result we improved on the Apparent Temperature formula to include the [Heat Index][HI] to represent warmer temperatures, while keeping the AAT for cooler temperatures.

As spring has arrived in the southern hemisphere, we believe that this change will make wearther more relevant to our friends in the northern and southern hemispheres.

[AAT]:http://www.bom.gov.au/info/thermal_stress/
[HI]:http://en.wikipedia.org/wiki/Heat_index#Formula

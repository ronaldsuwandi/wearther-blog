title: Why mobile web application sucks
date: 2014-03-04 11:01:12
author: Ronald Suwandi
share: true
categories: engineering
tags: []
---
Originally I started [wearther][wearther] as a mobile web application - *webapp* out of the curiousity of the web technology. I was just started learning JavaScript and was so inspired by [Forecast.io][forecast] (try visiting [Forecast.io][forecast] using an iPhone). To average users, they wouldn't even notice that [Forecast.io][forecast] is not a native app!

As soon as I started working on [wearther][wearther] mobile web application, I noticed some serious problems and limitations (note that problems 1-4 are iOS specific problems):

1. Bookmarklet freezes! This one is a huge issue for me, when opening bookmarklet on iOS, there are times where it just froze and simply won't respond to anything. Turning screen off doesn't work, the same goes with pressing home button (although Siri is still active) <sup><small>[\[1\]][1] [\[2\]][2] [\[3\]][3]</small></sup>. I started noticing this on iOS 6 and was hoping that this will be fixed on iOS 7. Unfortunately that's not the case. In fact, iOS 7 introduces severe bookmarklet problems <sup><small>[\[4\]][4] [\[5\]][5]</small></sup>!

2. No multitasking. This irks me and [Enrico][enrico] the most. Often when checking the weather we got distracted by new email or tweets, so we simply switch app. Upon switching back to [wearther][wearther], we have to start all over again from the beginning (obtaining location/temperature/combinations).

3. Updating the webapp is a pain. Sometimes you have to delete the old shortcut and re-add it again (if you made a significant change on the `<head>` tag)

4. Location permission expires. I haven't fully confirm this but after some time [wearther][wearther] will lose permission to use geolocation. The only solution was to recreate the bookmarklet. This is a big no-no.

5. Compatibility issues. It's getting better everyday but one big issue I faced was running [wearther][wearther] on Samsung Galaxy S3 was `border-radius` style was not respected. Best part is, it's Samsung Galaxy S3-specific bug.

I admit I was very slow to decide to move on to native iOS, but it's better late than never. Switching to native iOS opens up a huge possibilities for the upcoming features. I'm really excited and looking forward to it!

*- Ronald*

[wearther]:http://wearther.cc
[forecast]:http://forecast.io
[1]:https://groups.google.com/forum/#!topic/limejs/nPtMeHHRxuY
[2]:https://discussions.apple.com/thread/4675140
[3]:http://www.scirra.com/forum/web-app-causes-ipad-to-freeze_topic62338.html
[4]:http://www.mobilexweb.com/blog/safari-ios7-html5-problems-apis-review
[5]:http://www.imore.com/ios-7-safari-features-and-bugs-html5-developers-need-be-aware
[enrico]:http://esusatyo.net

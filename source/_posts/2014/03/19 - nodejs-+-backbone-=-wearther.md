title: Node.js + Backbone = wearther
date: 2014-03-19 08:25:15
author: Ronald Suwandi
share: true
categories: engineering
tags: []
---
I would like to share how wearther code is achitected. Hopefully this post will be useful for your own projects.

Wearther is built on top of [Backbone][backbone] for the front-end and [Node.js][node] as its backend. The backend stuff is pretty simple, just a small webserver that handles different routes, requests external API calls and the optimizer to calculate clothing combinations. I want to focus on the front-end side of things instead.

First off, I decided to separate each component to a separate module and store it in their own separate directories. So we left with the following directory structure:

    modules/
      |-combinations/
      | |-collections/
      | | |-combinations.js
      | |-models/
      | | |-combination.js
      | |-views/
      | | |-combination.js
      | | |-combinations.js
      | |-Combinations.js
      |-listings/
      | |-...
      | |-Listings.js
      |-location/
      | |-...
      | |-Location.js
      |-router/
      | |-Router.js
      |-settings/
      | |-Settings.js
      |-temperature/
      | |-...
      | |-Temperature.js
    Util.js
    WeartherApp.js

`WeartherApp.js` is the main file where it listens to events and deal with them accordingly. It's also the point of entry for the entire app.

Originally each module can communicate to each other directly but I soon realized that it's not going to be pretty once I start to add more modules in the future. Eventually it will be a very tightly coupled app. So I decided to look for alternative pattern and soon discovered Mediator[\[1\]][mediator1][\[2\]][mediator2] pattern.

A quick note: mediator pattern allows the app to be loosely coupled by not a letting modules to communicate to each other directly. This is achieved by passing the mediator object around. Something like this:

```
var mediator = {
  subscribe: function(channel, fn) {
    // store the function into the channel
  },
  publish: function(channel) {
    // notify the channel
  }
};

function Module1(mediator) {
  function doSomething() {
    // do stuff

    // let mediator knows we're finished
    mediator.publish('module1:done');
  }
}

function Module2(mediator) {
  mediator.subscribe('module1:done', function() {
    // module 1 is done, do something here
  });
}
```

I like mediator pattern approach but I'm still not entirely satisfied. I don't like the idea of passing the `mediator` object around (in this case `WeartherApp`) to each module. I don't like the extra parameter in my function constructors so I came up with mediator-like *convention*: a slightly modified [Event Aggregator][ea] pattern (note that I mentioned *convention*, because it is very easy to mess things up if I'm not following my own convention).

The idea is very simple. Each module can broadcast and listen to message, but they are not allowed to directly communicate with other module. Every communication is handled by the main object (`WeartherApp`). To achieve this, all modules inherited [Backbone.Event][bbevent] class so it can call `trigger` method.

`WeartherApp` then load all them odules an listens to the broadcast messages and react accordingly

```
*Location.js*
function getLocation() {
  // obtain location
  var location = readGeolocation();
  this.trigger('location:locationUpdated', location);
}

*Temperature.js*
function getTemperature(location) {
  // do ajax call to server
  var temp = $.ajax(...)
  this.trigger('temperature:temperature', temp);
}

*Combination.js*
function calculateCombinations(temp) {
  var combinations = $.ajax(...)
  this.trigger('combination:combination', combinations);
}

*WeartherApp.js*
locations.on('location:locationUpdated', function(newlocation) {
  temperature.getTemperature(newlocation);
});

temperature.on('temperature:temperature', function(newtemp) {
  combinations.calculateCombinations(newtemp);
});

// start the app
location.getLocation();
```

What I like about this convention is that I don't have to pass around the main object (mediator), instead each module simply broadcast its own message without any dependency to the main object. The obvious downside is that it is *possible* for each module to talk with each other. That's why by using the convention, the module *should not* listen to any message at all. It can only broadast and it's up to the main object to handle them.

Another reason why I like this is that the inner module implementation can be as convoluted as you wish without affecting other module. For example in `Combination` module, the implementation (models, collections, views) can interact with each other (model can notify collection and vice-versa) while the main module container is the one wrapping them all up and broadcast message to the main object whenever required.

I hope you find this post useful. Let me know what you think :)

*- Ronald*

[backbone]:http://backbonejs.org
[node]:http://nodejs.org
[ea]:http://addyosmani.github.io/backbone-fundamentals/#event-aggregator
[mediator1]:http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript
[mediator2]:http://addyosmani.com/largescalejavascript/#mediatorpattern
[bbevent]:http://backbonejs.org/#Events

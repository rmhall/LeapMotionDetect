LeapMotionDetect
================

A small (&lt;800 bytes) JavaScript helper library for working with [LeapMotion JS](https://developer.leapmotion.com/leapjs/) in situations where it may be more appropriate to first detect the capabilities of the browser and presence of a LeapMotion device with a lighter footprint prior to loading the full library.

Specifically this helper library first checks if the users browser is capable of native websocket communication and if so, checks for the presence of a LeapMotion device. If present, it will then load the minimized LeapJS library to allow for full interactive control and information of the [LeapMotion device](https://www.leapmotion.com/) in your application and return true in the callback function supplied. If not present (or websockets are unavailable), it will return false to the callback function supplied. 

Perfect for Advertisements and other lightweight apps, games, etc. that need to be mindful of resource usage, bandwidth, etc.

USAGE:

```javascript
function myApp(LeapPresent, args, version) {
	console.log("Leap is available: "+LeapPresent);
	console.log("Callback args: "+args);
}

LeapMotionDetect(myApp, "dummy", "0.6.0");
```


Above working example contained within index.html. The third optional argument recently added, "version", reflects the version number of the LeapJS library to load in case of a dependency on a specific version. 0.6.0 is the latest as of 05/16/2014 and supports the new beta skeletal model Leap recently introduced. Another minor change is that the http: has been dropped from the url so that the library will be loaded from http or https as dictated by the container page.

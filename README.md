LeapMotionDetect
================

A small (&lt;800 bytes) JavaScript helper library for working with [LeapMotion JS](https://developer.leapmotion.com/leapjs/) in situations where it may be more appropriate to first detect the capabilities of the browser and presence of a LeapMotion device with a lighter footprint prior to loading the full library.

Specifically this helper library first checks if the users browser is capable of native websocket communication and if so, checks for the presence of a LeapMotion device. If present, it will then load the minimized LeapJS library to allow for full interactive control and information of the LeapMotion device in your JavaScript based application and return true. If not present (or websockets are unavailable), it will return false. In both situations, it will also call the passed in callback function passing along supplied arguments. 

Perfect for Advertisements and other lightweight apps, games, etc. that need to be mindful of resource usage, bandwidth, etc.

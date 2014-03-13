LeapMotionDetect
================

Small &lt;1k JS helper library to detect LeapMotion device via websockets, and if present load the LeapJS library for full functionality.

This helper script checks to see if the current browser is capable of websocket communication, and if so, checks for the presence of a LeapMotion device.
If present, it will load the minimized LeapJS library to allow for full interactive control and information of the LeapMotion device in your JS app.

Perfect for Advertisements and other lightweight apps, games, etc. that need to be mindful of resource usage.

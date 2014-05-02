function LeapMotionDetect(callback, args) {
	var portComm = 0;
	var loop;

	function loadLeapLib() {
		loop = setInterval(checkLeapLib, 100);
		newScript = document.createElement('script');
		newScript.type = 'text/javascript';
		newScript.src = 'http://js.leapmotion.com/leap-0.5.0.min.js';
		document.getElementsByTagName('head')[0].appendChild(newScript);
	}

	function checkLeapLib() {
		if (typeof Leap == 'object') {
			//console.log("LeapJS Library Version " + Leap.version.full + " Loaded!");
			clearInterval(loop);
			callback(true, args);
		} else {
			//console.log("Waiting...");
		}
	}
	setTimeout(function () {
		if (portComm < 1) {
			//console.log("LEAP NOT DETECTED");
			ws.close();
			callback(false, args);
			ws.onmessage = function () {};
		}
	}, 2000);
	if ("WebSocket" in window) {
		//console.log("WebSocket is supported by your Browser!");
		// Let us open a web socket
		var ws = new WebSocket("ws://localhost:6437");
		ws.onopen = function () {
			// Web Socket is connected, send data using send()
			ws.send("");
			//console.log("Detecting LEAP PORT...");
		};
		ws.onmessage = function (evt) {
			var received_msg = evt.data;
			// console.log(evt);
			// console.log("Message is received..."+received_msg);

			obj = JSON.parse(received_msg);
			if (obj.version && portComm == 0) {
				portComm++;
				//console.log("LEAP PORT DETECTED");
			} else if (obj.currentFrameRate && portComm > 0) {
				portComm++;
				ws.close();
				//console.log("Load the full Leap Library!");
				ws.onmessage = function () {};
				loadLeapLib();

			} else {
				//console.log("LEAP NOT DETECTED");
				ws.close();
				callback(false, args);
				ws.onmessage = function () {};
			}
		};
		ws.onclose = function () {
			// websocket is closed.
			//console.log("Connection is closed...");
		};
	} else {
		// The browser doesn't support WebSocket
		//console.log("WebSocket NOT supported by your Browser!");
		callback(null, args);
	}

}

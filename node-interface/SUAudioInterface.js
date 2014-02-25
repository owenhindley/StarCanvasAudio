var osc = require("osc-min");
var dgram = require("dgram");

var udp = dgram.createSocket("udp4");

function SUAudioInterface() {
	
	this.broadcastPort = 8081;
	this.ip = "localhost";

}

var p = SUAudioInterface.prototype;

p._sendMessage = function(aAddress, aArgs) {

	try {

		console.log("SUAudioInterface :: Sending message on port " + this.broadcastPort + " to address : " + aAddress + " args: ", aArgs);

		var buf;
		buf = osc.toBuffer({
			address: aAddress,
			args: aArgs
		});

		return udp.send(buf, 0, buf.length, this.broadcastPort, this.ip);
	} catch(e){
		console.log("SUAudioInterface :: ERROR sending message : ", e);
	}
	
};

p.playConstellation = function(aNumberStars, aMaxDistance, aMinDistance, aAvgDistance) {

	this._sendMessage("/playConstellation", [aNumberStars, aMaxDistance, aMinDistance, aAvgDistance]);


};

p.playCustomConstellation = function(aNumberStars, aMaxDistance, aMinDistance, aAvgDistance) {

	this._sendMessage("/playCustomConstellation", [aNumberStars, aMaxDistance, aMinDistance, aAvgDistance]);


};

p.onGrab = function(aGrabSpeed, aGrabDirection) {

	this._sendMessage("/grab", [aGrabSpeed, aGrabDirection]);
};

p.onKey = function() {
	this._sendMessage("/keyboard", []);
};

p.onRollover = function(aIsCustom) {
	var customValue = aIsCustom ? 0 : 1;
	this._sendMessage("/rollover", [customValue]);
};

p.onSelect = function(aIsCustom) {
	var customValue = aIsCustom ? 0 : 1;
	this._sendMessage("/selectConstellation", [customValue]);
};

p.onClap = function() {
	
	this._sendMessage("/clap", []);
};

p.sendTestMessage = function() {
	this._sendMessage("/testMessage", []);
};

p.setup = function(aBroadcastPort, aIP) {
	this.broadcastPort = aBroadcastPort;
	this.ip = aIP;

	this._sendMessage("/startup", []);

};




module.exports = SUAudioInterface;
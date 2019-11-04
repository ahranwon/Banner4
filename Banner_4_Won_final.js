(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Banner_4_Won_final_atlas_", frames: [[418,182,416,188],[0,182,416,188],[1138,190,518,144],[1472,0,416,188],[324,372,322,89],[1658,190,322,89],[1548,336,408,180],[0,372,322,89],[1138,336,408,180],[0,0,1052,180],[1890,0,149,188],[1054,0,416,188],[836,190,300,250]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_29 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_31 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_33 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_34 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_35 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_36 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_37 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_38 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.printmaking = function() {
	this.initialize(ss["Banner_4_Won_final_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_simpleBryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_38();
	this.instance.parent = this;
	this.instance.setTransform(0,-8.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_simpleBryer, new cjs.Rectangle(0,-8.5,74.5,94), null);


(lib.mc_photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.printmaking();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_photo, new cjs.Rectangle(0,0,300,250), null);


(lib.mc_ink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_37();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_ink, new cjs.Rectangle(0,0,526,90), null);


(lib.buttonPressShore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_31();
	this.instance.parent = this;
	this.instance.setTransform(21,22.2,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21,22.2,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21,22.2,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,90);


// stage content:
(lib.Banner_4_Won_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.PressShore.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://en.wikipedia.org/wiki/Printmaking", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(145));

	// ClubText (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_136 = new cjs.Graphics().p("Ar/JEQgUAQAAAcQAAAUANAQQAMAQAaALIAjASQARAKAAAPQAAALgJAHQgKAHgPAAQgfAAgjgdIAAApQASALAPAFQAPAFAVAAQAhAAAUgSQAUgRAAgcQAAgWgMgPQgMgQgbgMQgfgPgFgDQgQgKAAgNQAAgKAJgGQAJgGAQAAQAaAAAiAUIAAglQgegQggAAQghAAgVAQgApdI3IAADaIAqAAIAAhcIBxAAIAABcIArAAIAAjaIgrAAIAABbIhxAAIAAhbIgqAAgAk2JCQgbAPgQAaQgPAbAAAeQAAAfAPAaQAQAZAcAPQAbAPAiAAQAjAAAbgPQAcgOAPgaQAQgbAAgeQAAgggQgaQgQgagbgOQgbgOgiAAQgkAAgbAOgAk7J9QAKgSARgJQASgKAWAAQAWAAASAKQASAJAKASQAJARAAAWQAAAhgVAVQgWAVghAAQgXAAgRgJQgSgKgKgRQgJgSAAgVQAAgWAJgRgAhYI3IAADaIArAAIAAhcIAPAAQAKAAAIAFQAIAFAHAMQAJAMASAjIANAXIAvAAQgKgPgUgoQgMgXgIgKQgIgJgLgGQATgIAKgOQAKgNAAgTQAAgbgUgRQgTgRgeAAIhPAAgAgtKUIAAg9IAaAAQARAAAJAHQAJAIAAAPQAAAOgJAIQgJAJgQAAIgbAAgAB2I3IAADaICPAAIAAghIhlAAIAAg+IBeAAIAAghIheAAIAAg6IBjAAIAAggIiNAAgAEsI3IAADaICUAAIAAghIhqAAIAAi5IgqAAgAHeI3IAADaIAqAAIAAjaIgqAAgAI5I3IAADaIAqAAIAAibICCCbIAkAAIAAjaIgpAAIAACYIiCiYIglAAgAM5I3IAADaICQAAIAAghIhlAAIAAg+IBeAAIAAghIheAAIAAg6IBiAAIAAggIiNAAgAsQQFIAKAAIAAhAIAaAAQAXAAALgKQAMgJAAgRQAAgRgMgKQgLgJgWAAIglAAIAACIgArrOFQAQAAAJAIQAIAHAAANQAAANgIAHQgJAIgRAAIgaAAIAAg4IAbAAgAqqQFIAKAAIAAhBIATAAQANAAAGAEQAHAFAMATIAXAlIANAAIgfgvQgLgSgHgDQAagJAAgYQAAgQgMgKQgLgJgWAAIgjAAIAACIgAqJOFQARAAAJAHQAJAHAAANQAAANgJAHQgJAHgRAAIgXAAIAAg2IAXAAgAo4N9IAACIIALAAIAAiIIgLAAgAmeN9IAAB3Ihnh3IgJAAIAACIIAKAAIAAh3IBoB3IAJAAIAAiIIgLAAgAmDN9IAAAIIAzAAIAACAIALAAIAAiAIAzAAIAAgIIhxAAgAj3N9IgLAAIAACIIALAAIAAh5IA0BAIA0hAIAAB5IALAAIAAiIIgLAAIg0A/Ig0g/gAg1N8Ig/CJIALAAIAWgvIBCAAIAVAvIALAAIg+iJIgGAAgAhPPNIAdhAIAdBAIg6AAgABrN9IhCBEIAAhEIgKAAIAACIIAKAAIAAhEIBIBEIANAAIhHhEIBBhEIgNAAgACJN9IAACIIALAAIAAiIIgLAAgAEjN9IAAB3Ihnh3IgJAAIAACIIAKAAIAAh3IBoB3IAJAAIAAiIIgLAAgAGRN7QggAAgVAUQgVAUAAAeQAAAeAWAUQAVAUAgAAQAYAAAYgMIAAg0IgnAAIAAAJIAcAAIAAAlQgQAIgVAAQgdAAgRgRQgRgRAAgaQAAgaARgRQARgRAaAAQAYAAAYANIAAgLQgZgMgVAAIAAAAgAJWN7QgdAAgVAUQgVAUAAAeQAAAeAUAUQAVAUAfAAQAYAAAZgNIAAgLQgbAOgWAAQgbAAgRgRQgRgRAAgaQAAgaARgRQARgRAaAAQAYAAAYANIAAgMQgZgLgXAAIAAAAgAKcN9IAACIIBOAAIAAgJIhDAAIAAh/IgLAAgANfPIQAAAZgNAOQgNAOgVAAQgVAAgMgOQgNgNAAgZIAAhMIgLAAIAABNQAAAcAQAQQAQARAZAAQAZAAAQgRQAQgQAAgfIAAhKIgKAAIAABLgAOGQFIAoAAQAVAAAMgKQANgKAAgQQAAgcgggHQAUgKAAgUQAAgRgMgJQgLgJgXAAIgcAAIAACIgAOfOFQAlAAAAAcQAAAbglAAIgPAAIAAg3IAPAAgAOoPFQAoAAAAAcQAAAMgJAIQgJAHgRAAIgdAAIAAg3IAYAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_graphics_136,x:98.7537,y:103.0832}).wait(83));

	// ink2
	this.instance = new lib.mc_ink();
	this.instance.parent = this;
	this.instance.setTransform(-266.05,194,1,1,0,0,0,263.1,45);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(136).to({_off:false},0).to({x:-47,y:195.95},44).wait(39));

	// Bryer2
	this.Bryer2 = new lib.mc_simpleBryer();
	this.Bryer2.name = "Bryer2";
	this.Bryer2.parent = this;
	this.Bryer2.setTransform(-39,197.95,1,1,0,0,0,37.1,38.5);
	this.Bryer2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Bryer2).wait(120).to({_off:false},0).to({x:251.05},60).wait(39));

	// BTNemphasizer
	this.instance_1 = new lib.CachedTexturedBitmap_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.65,38.3,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.65,38.3,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43.65,38.3,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(43.65,38.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},181).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_4}]},7).wait(12));

	// button
	this.PressShore = new lib.buttonPressShore();
	this.PressShore.name = "PressShore";
	this.PressShore.parent = this;
	this.PressShore.setTransform(147.65,85.3,1,1,0,0,0,102,45);
	this.PressShore._off = true;
	new cjs.ButtonHelper(this.PressShore, 0, 1, 2, false, new lib.buttonPressShore(), 3);

	this.timeline.addTween(cjs.Tween.get(this.PressShore).wait(74).to({_off:false},0).wait(145));

	// BryerPink
	this.bryerPink = new lib.mc_simpleBryer();
	this.bryerPink.name = "bryerPink";
	this.bryerPink.parent = this;
	this.bryerPink.setTransform(37.1,191,1,1,0,0,0,37.1,30.5);

	this.timeline.addTween(cjs.Tween.get(this.bryerPink).to({x:258.75},40).wait(55).to({x:-0.3,y:191.95},24).to({_off:true},1).wait(99));

	// maskingTape
	this.instance_5 = new lib.CachedTexturedBitmap_29();
	this.instance_5.parent = this;
	this.instance_5.setTransform(236.1,157,0.5,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).wait(1).to({x:225.85,y:156.95},0).wait(1).to({x:215.65,y:156.9},0).wait(1).to({x:205.4},0).wait(1).to({x:195.2,y:156.85},0).wait(1).to({x:184.95,y:156.8},0).wait(1).to({x:174.75,y:156.75},0).wait(1).to({x:164.5,y:156.7},0).wait(1).to({x:154.25,y:156.65},0).wait(1).to({x:144.05},0).wait(1).to({x:133.8,y:156.6},0).wait(1).to({x:123.6,y:156.55},0).wait(1).to({x:113.35,y:156.5},0).wait(1).to({x:103.1,y:156.45},0).wait(1).to({x:92.9,y:156.4},0).wait(1).to({x:82.65},0).wait(1).to({x:72.45,y:156.35},0).wait(1).to({x:62.2,y:156.3},0).wait(1).to({x:52,y:156.25},0).wait(1).to({x:41.75,y:156.2},0).wait(1).to({x:31.5,y:156.15},0).wait(1).to({x:21.3},0).wait(1).to({x:11.05,y:156.1},0).wait(1).to({x:0.85,y:156.05},0).wait(1).to({x:-9.4,y:156},0).to({_off:true},1).wait(99));

	// text (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AubMNIAQAAIAAhjIAoAAQAjAAASgPQASgPAAgaQAAgagSgPQgSgPghAAIg6AAIAADTgAtiJHQAZAAAOAMQANALAAAUQAAAUgNALQgOAMgbAAIgnAAIAAhWIApAAgAr9MNIAQAAIAAhlIAdAAQAUAAAKAHQAKAHATAdIAlA6IATAAIgwhJQgSgbgKgFQAogPAAglQAAgZgSgPQgSgOgiAAIg2AAIAADTgArKJHQAbAAAOALQAOALAAAUQAAATgOALQgOALgbAAIgjAAIAAhTIAjAAgApMI6IAADTIARAAIAAjTIgRAAgAldI6IAAC4Iigi4IgOAAIAADTIAQAAIAAi5IChC5IANAAIAAjTIgQAAgAkzI6IAAANIBPAAIAADGIARAAIAAjGIBPAAIAAgNIivAAgAhaI6IgRAAIAADTIARAAIAAi7IBQBiIBQhiIAAC7IAQAAIAAjTIgQAAIhQBiIhQhigADRI4IhhDVIARAAIAhhJIBnAAIAiBJIARAAIhijVIgJAAgACoK2IAuhjIAtBjIhbAAgAHLI6IhmBpIAAhpIgQAAIAADTIAQAAIAAhqIBvBqIAVAAIhvhqIBlhpIgUAAgAH6I6IAADTIAQAAIAAjTIgQAAgALpI6IAAC4Iihi4IgOAAIAADTIARAAIAAi5ICgC5IAOAAIAAjTIgQAAgAOSI3QgxAAggAfQggAfAAAuQAAAuAgAgQAhAfAyAAQAlAAAmgSIAAhRIg9AAIAAAOIAsAAIAAA5QgZANghAAQgtAAgagbQgbgaAAgpQAAgoAbgaQAbgbAoAAQAlAAAmAVIAAgSQgogSghAAIAAAAgAtrNiIgzAAIAACpIAzAAIAAipgAqJNiIgzAAIAABeIhXheIgtAAIAACpIAyAAIAAheIBYBeIAtAAIAAipgAmkPCQgHgJgMgIQgLgHgUgJQgLgFgEgEQgFgEAAgFQAAgFAFgEQAEgDAKAAQAOAAANAGQANAFAKAIIAAgoIgLgFQgIgEgMgCQgMgDgOAAQgUAAgNAGQgOAHgHALQgHALAAAOQAAAOAHAKQAHALAKAHQALAHAOAFQAMAFAHAFQAGAFAAAHQAAADgEAFQgDAEgNAAQgPAAgMgFQgMgFgNgIIAAApQANAGANADIAUAEIANABQATAAAPgHQAOgGAIgLQAIgMAAgQQAAgOgGgKgAjINiIgzAAIAAA+IhNAAIAAg+IgzAAIAACpIAzAAIAAhCIBNAAIAABCIAzAAIAAipgAAQOVQgGgPgLgMQgMgMgSgHQgSgHgYAAQgfAAgWAMQgWAMgKAUQgLAUAAAXQAAAWALAUQAKAUAWAMQAWANAfAAQAfAAAWgMQAUgMALgUQALgUAAgXQAAgSgGgQgAgiPNQgFAKgKAGQgKAFgOAAQgUAAgMgMQgMgMAAgTQAAgUAMgMQAMgMAUAAQALAAAIAEQAIADAGAGQAGAFACAIQADAIAAAKQAAAMgFAKgADJPnQgKgUgFgHQgFgGgIgFIAMgIQAGgEAEgJQAFgJAAgMQAAgLgGgNQgFgMgOgIQgNgJgVAAIhXAAIAACpIAzAAIAAhCIAGAAQAIAAAGACQAGADAFAHQAGAIAIAQIANAeIA3AAIgRgkgACOOnQgHAEgTAAIgLAAIAAgoIALAAQARAAAIAEQAHAFAAAMQAAALgGAEgAFxPpIhNAAIAAgkIBHAAIAAgiIhHAAIAAgfIBKAAIAAgiIh9AAIAACpICAAAIAAgigAITPjIhNAAIAAiBIgzAAIAACpICAAAIAAgogAJkNiIgzAAIAACpIAzAAIAAipgANHNiIgzAAIAABeIhYheIgtAAIAACpIAyAAIAAheIBYBeIAuAAIAAipgAPxPpIhNAAIAAgkIBHAAIAAgiIhHAAIAAgfIBLAAIAAgiIh+AAIAACpICAAAIAAgig");
	var mask_1_graphics_118 = new cjs.Graphics().p("AubMNIAQAAIAAhjIAoAAQAjAAASgPQASgPAAgaQAAgagSgPQgSgPghAAIg6AAIAADTgAtiJHQAZAAAOAMQANALAAAUQAAAUgNALQgOAMgbAAIgnAAIAAhWIApAAgAr9MNIAQAAIAAhlIAdAAQAUAAAKAHQAKAHATAdIAlA6IATAAIgwhJQgSgbgKgFQAogPAAglQAAgZgSgPQgSgOgiAAIg2AAIAADTgArKJHQAbAAAOALQAOALAAAUQAAATgOALQgOALgbAAIgjAAIAAhTIAjAAgApMI6IAADTIARAAIAAjTIgRAAgAldI6IAAC4Iigi4IgOAAIAADTIAQAAIAAi5IChC5IANAAIAAjTIgQAAgAkzI6IAAANIBPAAIAADGIARAAIAAjGIBPAAIAAgNIivAAgAhaI6IgRAAIAADTIARAAIAAi7IBQBiIBQhiIAAC7IAQAAIAAjTIgQAAIhQBiIhQhigADRI4IhhDVIARAAIAhhJIBnAAIAiBJIARAAIhijVIgJAAgACoK2IAuhjIAtBjIhbAAgAHLI6IhmBpIAAhpIgQAAIAADTIAQAAIAAhqIBvBqIAVAAIhvhqIBlhpIgUAAgAH6I6IAADTIAQAAIAAjTIgQAAgALpI6IAAC4Iihi4IgOAAIAADTIARAAIAAi5ICgC5IAOAAIAAjTIgQAAgAOSI3QgxAAggAfQggAfAAAuQAAAuAgAgQAhAfAyAAQAlAAAmgSIAAhRIg9AAIAAAOIAsAAIAAA5QgZANghAAQgtAAgagbQgbgaAAgpQAAgoAbgaQAbgbAoAAQAlAAAmAVIAAgSQgogSghAAIAAAAgAtrNiIgzAAIAACpIAzAAIAAipgAqJNiIgzAAIAABeIhXheIgtAAIAACpIAyAAIAAheIBYBeIAtAAIAAipgAmkPCQgHgJgMgIQgLgHgUgJQgLgFgEgEQgFgEAAgFQAAgFAFgEQAEgDAKAAQAOAAANAGQANAFAKAIIAAgoIgLgFQgIgEgMgCQgMgDgOAAQgUAAgNAGQgOAHgHALQgHALAAAOQAAAOAHAKQAHALAKAHQALAHAOAFQAMAFAHAFQAGAFAAAHQAAADgEAFQgDAEgNAAQgPAAgMgFQgMgFgNgIIAAApQANAGANADIAUAEIANABQATAAAPgHQAOgGAIgLQAIgMAAgQQAAgOgGgKgAjINiIgzAAIAAA+IhNAAIAAg+IgzAAIAACpIAzAAIAAhCIBNAAIAABCIAzAAIAAipgAAQOVQgGgPgLgMQgMgMgSgHQgSgHgYAAQgfAAgWAMQgWAMgKAUQgLAUAAAXQAAAWALAUQAKAUAWAMQAWANAfAAQAfAAAWgMQAUgMALgUQALgUAAgXQAAgSgGgQgAgiPNQgFAKgKAGQgKAFgOAAQgUAAgMgMQgMgMAAgTQAAgUAMgMQAMgMAUAAQALAAAIAEQAIADAGAGQAGAFACAIQADAIAAAKQAAAMgFAKgADJPnQgKgUgFgHQgFgGgIgFIAMgIQAGgEAEgJQAFgJAAgMQAAgLgGgNQgFgMgOgIQgNgJgVAAIhXAAIAACpIAzAAIAAhCIAGAAQAIAAAGACQAGADAFAHQAGAIAIAQIANAeIA3AAIgRgkgACOOnQgHAEgTAAIgLAAIAAgoIALAAQARAAAIAEQAHAFAAAMQAAALgGAEgAFxPpIhNAAIAAgkIBHAAIAAgiIhHAAIAAgfIBKAAIAAgiIh9AAIAACpICAAAIAAgigAITPjIhNAAIAAiBIgzAAIAACpICAAAIAAgogAJkNiIgzAAIAACpIAzAAIAAipgANHNiIgzAAIAABeIhYheIgtAAIAACpIAyAAIAAheIBYBeIAuAAIAAipgAPxPpIhNAAIAAgkIBHAAIAAgiIhHAAIAAgfIBLAAIAAgiIh+AAIAACpICAAAIAAgig");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:100.8638,y:103.7577}).wait(118).to({graphics:mask_1_graphics_118,x:100.8638,y:103.7577}).wait(101));

	// ink
	this.instance_6 = new lib.mc_ink();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-267.05,189,1,1,0,0,0,263.1,45);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-51.2,y:191},40).wait(78).to({_off:true},1).wait(100));

	// circleMask1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgjaAXBQurpiAAtfQAAteOrpiQOrpiUvAAQUwAAOqJiQOsJiAANeQAANfusJiQuqJi0wAAQ0vAAurpig");
	var mask_2_graphics_1 = new cjs.Graphics().p("Egi3AWnQucpXAAtQQAAtPOcpXQOdpYUaAAQUbAAOcJYQOdJXAANPQAANQudJXQucJY0bAAQ0aAAudpYg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EgiUAWNQuNpMAAtBQAAtAONpNQOOpMUGAAQUHAAONJMQOOJNAANAQAANBuOJMQuNJN0HAAQ0GAAuOpNg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EghxAVzQt/pBAAsyQAAsxN/pCQOApCTxAAQTyAAN/JCQOAJCAAMxQAAMyuAJBQt/JDzyAAQzxAAuApDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EghOAVaQtwo3AAsjQAAsiNwo3QNxo3TdAAQTeAANwI3QNxI3AAMiQAAMjtxI3QtwI3zeAAQzdAAtxo3g");
	var mask_2_graphics_5 = new cjs.Graphics().p("EggrAVAQtiotAAsTQAAsSNiotQNjotTIAAQTJAANiItQNjItAAMSQAAMTtjItQtiItzJAAQzIAAtjotg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EggIAUmQtToiAAsEQAAsDNTojQNUoiS0AAQS1AANTIiQNUIjAAMDQAAMEtUIiQtTIjy1AAQy0AAtUojg");
	var mask_2_graphics_7 = new cjs.Graphics().p("A/lUMQtFoXAAr1QAAr0NFoYQNGoXSfAAQSgAANFIXQNGIYAAL0QAAL1tGIXQtFIYygAAQyfAAtGoYg");
	var mask_2_graphics_8 = new cjs.Graphics().p("A/CTzQs2oNAArmQAArlM2oNQM3oNSLAAQSMAAM2INQM3INAALlQAALms3INQs2INyMAAQyLAAs3oNg");
	var mask_2_graphics_9 = new cjs.Graphics().p("A+fTZQsooCAArXQAArWMooCQMpoCR2AAQR3AAMoICQMpICAALWQAALXspICQsoICx3AAQx2AAspoCg");
	var mask_2_graphics_10 = new cjs.Graphics().p("A98S/QsZn3AArIQAArHMZn4QMan3RiAAQRjAAMZH3QMaH4AALHQAALIsaH3QsZH4xjAAQxiAAsan4g");
	var mask_2_graphics_11 = new cjs.Graphics().p("A9ZSlQsLnsAAq5QAAq4MLntQMMnsRNAAQROAAMLHsQMMHtAAK4QAAK5sMHsQsLHtxOAAQxNAAsMntg");
	var mask_2_graphics_12 = new cjs.Graphics().p("A82SMQr8niAAqqQAAqpL8niQL9niQ5AAQQ6AAL8HiQL9HiAAKpQAAKqr9HiQr8Hiw6AAQw5AAr9nig");
	var mask_2_graphics_13 = new cjs.Graphics().p("A8TRyQrunXAAqbQAAqaLunXQLvnXQkAAQQlAALuHXQLvHXAAKaQAAKbrvHXQruHYwlAAQwkAArvnYg");
	var mask_2_graphics_14 = new cjs.Graphics().p("A7wRYQrfnMAAqMQAAqLLfnMQLgnNQQAAQQRAALfHNQLgHMAAKLQAAKMrgHMQrfHNwRAAQwQAArgnNg");
	var mask_2_graphics_15 = new cjs.Graphics().p("A7NQ+QrRnBAAp9QAAp8LRnCQLSnCP7AAQP8AALRHCQLSHCAAJ8QAAJ9rSHBQrRHDv8AAQv7AArSnDg");
	var mask_2_graphics_16 = new cjs.Graphics().p("A6qQlQrCm4AAptQAApsLCm4QLDm3PnAAQPoAALCG3QLDG4AAJsQAAJtrDG4QrCG3voAAQvnAArDm3g");
	var mask_2_graphics_17 = new cjs.Graphics().p("A6HQLQq0mtAApeQAApdK0mtQK1mtPSAAQPTAAK0GtQK1GtAAJdQAAJeq1GtQq0GtvTAAQvSAAq1mtg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A5kPxQqlmiAApPQAApOKlmiQKmmiO+AAQO/AAKlGiQKmGiAAJOQAAJPqmGiQqlGiu/AAQu+AAqmmig");
	var mask_2_graphics_19 = new cjs.Graphics().p("A5BPXQqXmXAApAQAAo/KXmYQKYmXOpAAQOqAAKXGXQKYGYAAI/QAAJAqYGXQqXGYuqAAQupAAqYmYg");
	var mask_2_graphics_20 = new cjs.Graphics().p("A4eO+QqImNAAoxQAAowKImNQKJmMOVAAQOWAAKIGMQKJGNAAIwQAAIxqJGNQqIGMuWAAQuVAAqJmMg");
	var mask_2_graphics_21 = new cjs.Graphics().p("A37OkQp6mCAAoiQAAohJ6mCQJ7mCOAAAQOBAAJ6GCQJ7GCAAIhQAAIip7GCQp6GCuBAAQuAAAp7mCg");
	var mask_2_graphics_22 = new cjs.Graphics().p("A3YOKQprl3AAoTQAAoSJrl3QJsl4NsAAQNtAAJrF4QJsF3AAISQAAITpsF3QprF4ttAAQtsAApsl4g");
	var mask_2_graphics_23 = new cjs.Graphics().p("A21NwQpdlsAAoEQAAoDJdltQJelsNXAAQNYAAJdFsQJeFtAAIDQAAIEpeFsQpdFttYAAQtXAApeltg");
	var mask_2_graphics_24 = new cjs.Graphics().p("A2RNXQpPliAAn1QAAn0JPliQJOliNDAAQNEAAJOFiQJPFiAAH0QAAH1pPFiQpOFitEAAQtDAApOlig");
	var mask_2_graphics_25 = new cjs.Graphics().p("A1uM9QpBlXAAnmQAAnlJBlXQJAlXMuAAQMvAAJAFXQJBFXAAHlQAAHmpBFXQpAFXsvAAQsuAApAlXg");
	var mask_2_graphics_26 = new cjs.Graphics().p("A1LMjQoylNAAnWQAAnVIylNQIxlNMaAAQMbAAIxFNQIyFNAAHVQAAHWoyFNQoxFNsbAAQsaAAoxlNg");
	var mask_2_graphics_27 = new cjs.Graphics().p("A0oMJQojlCAAnHQAAnGIjlCQIjlCMFAAQMGAAIjFCQIjFCAAHGQAAHHojFCQojFCsGAAQsFAAojlCg");
	var mask_2_graphics_28 = new cjs.Graphics().p("A0FLvQoVk3AAm4QAAm3IVk4QIVk3LwAAQLxAAIVE3QIVE4AAG3QAAG4oVE3QoVE4rxAAQrwAAoVk4g");
	var mask_2_graphics_29 = new cjs.Graphics().p("AziLWQoHktAAmpQAAmoIHktQIGksLcAAQLdAAIGEsQIGEtAAGoQAAGpoGEtQoGEsrdAAQrcAAoGksg");
	var mask_2_graphics_30 = new cjs.Graphics().p("Ay/K8Qn4kiAAmaQAAmZH4kiQH4kiLHAAQLIAAH4EiQH4EiAAGZQAAGan4EiQn4EirIAAQrHAAn4kig");
	var mask_2_graphics_31 = new cjs.Graphics().p("AycKiQnpkXAAmLQAAmKHpkXQHpkYKzAAQK0AAHpEYQHpEXAAGKQAAGLnpEXQnpEYq0AAQqzAAnpkYg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Ax5KIQnbkMAAl8QAAl7HbkNQHbkMKeAAQKfAAHbEMQHbENAAF7QAAF8nbEMQnbENqfAAQqeAAnbkNg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AxWJvQnMkCAAltQAAlsHMkCQHMkCKKAAQKLAAHMECQHMECAAFsQAAFtnMECQnMECqLAAQqKAAnMkCg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AwzJZQm+j3AAldQAAldG+j4QG+j3J1AAQJ2AAG+D3QG+D4AAFdQAAFdm+D3Qm+D4p2AAQp1AAm+j4g");
	var mask_2_graphics_35 = new cjs.Graphics().p("Av6JNQmvjsAAlPQAAlNGvjtQGvjtJhAAQJiAAGvDtQGvDtAAFNQAAFPmvDsQmvDtpiAAQphAAmvjtg");
	var mask_2_graphics_36 = new cjs.Graphics().p("Au/JCQmgjiAAlAQAAk+GgjiQGhjiJNAAQJNAAGhDiQGhDiAAE+QAAFAmhDiQmhDipNAAQpNAAmhjig");
	var mask_2_graphics_37 = new cjs.Graphics().p("AuDI2QmSjXAAkwQAAkwGSjXQGTjXI3AAQI5AAGSDXQGTDXAAEwQAAEwmTDXQmSDYo5AAQo3AAmTjYg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AtHIrQmEjNAAkhQAAkhGEjMQGEjNIjAAQIlAAGDDNQGEDMAAEhQAAEhmEDNQmDDMolAAQojAAmEjMg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AsLIfQl1jCAAkSQAAkSF1jCQF1jBIPAAQIQAAF1DBQF1DCAAESQAAESl1DCQl1DCoQAAQoPAAl1jCg");
	var mask_2_graphics_40 = new cjs.Graphics().p("ArQITQlmi3AAkDQAAkCFmi4QFni3H7AAQH7AAFnC3QFnC4AAECQAAEDlnC3QlnC3n7AAQn7AAlni3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:151.5506,y:113.6694}).wait(1).to({graphics:mask_2_graphics_1,x:151.5856,y:112.8723}).wait(1).to({graphics:mask_2_graphics_2,x:151.5846,y:112.0753}).wait(1).to({graphics:mask_2_graphics_3,x:151.5371,y:111.2318}).wait(1).to({graphics:mask_2_graphics_4,x:151.5326,y:110.3918}).wait(1).to({graphics:mask_2_graphics_5,x:151.5816,y:109.5482}).wait(1).to({graphics:mask_2_graphics_6,x:151.5805,y:108.7047}).wait(1).to({graphics:mask_2_graphics_7,x:151.576,y:107.8577}).wait(1).to({graphics:mask_2_graphics_8,x:151.5785,y:107.0141}).wait(1).to({graphics:mask_2_graphics_9,x:151.5275,y:106.2241}).wait(1).to({graphics:mask_2_graphics_10,x:151.573,y:105.4306}).wait(1).to({graphics:mask_2_graphics_11,x:151.622,y:104.5835}).wait(1).to({graphics:mask_2_graphics_12,x:151.6209,y:103.69}).wait(1).to({graphics:mask_2_graphics_13,x:151.6234,y:102.9}).wait(1).to({graphics:mask_2_graphics_14,x:151.6689,y:102.0529}).wait(1).to({graphics:mask_2_graphics_15,x:151.6179,y:101.2129}).wait(1).to({graphics:mask_2_graphics_16,x:151.6169,y:100.3659}).wait(1).to({graphics:mask_2_graphics_17,x:151.6124,y:99.5224}).wait(1).to({graphics:mask_2_graphics_18,x:151.6148,y:98.6823}).wait(1).to({graphics:mask_2_graphics_19,x:151.6638,y:97.9353}).wait(1).to({graphics:mask_2_graphics_20,x:151.6593,y:97.0418}).wait(1).to({graphics:mask_2_graphics_21,x:151.6083,y:96.1982}).wait(1).to({graphics:mask_2_graphics_22,x:151.6107,y:95.4047}).wait(1).to({graphics:mask_2_graphics_23,x:151.6097,y:94.5646}).wait(1).to({graphics:mask_2_graphics_24,x:151.6552,y:93.6641}).wait(1).to({graphics:mask_2_graphics_25,x:151.6542,y:92.8741}).wait(1).to({graphics:mask_2_graphics_26,x:151.6067,y:92.0341}).wait(1).to({graphics:mask_2_graphics_27,x:151.5987,y:91.137}).wait(1).to({graphics:mask_2_graphics_28,x:151.6011,y:90.3935}).wait(1).to({graphics:mask_2_graphics_29,x:151.6501,y:89.5465}).wait(1).to({graphics:mask_2_graphics_30,x:151.6491,y:88.7564}).wait(1).to({graphics:mask_2_graphics_31,x:151.6946,y:87.8629}).wait(1).to({graphics:mask_2_graphics_32,x:151.6471,y:87.0194}).wait(1).to({graphics:mask_2_graphics_33,x:151.646,y:86.2224}).wait(1).to({graphics:mask_2_graphics_34,x:151.6915,y:84.8823}).wait(1).to({graphics:mask_2_graphics_35,x:149.4405,y:82.6138}).wait(1).to({graphics:mask_2_graphics_36,x:146.968,y:80.3952}).wait(1).to({graphics:mask_2_graphics_37,x:144.4885,y:78.1767}).wait(1).to({graphics:mask_2_graphics_38,x:142.0125,y:75.9332}).wait(1).to({graphics:mask_2_graphics_39,x:139.5364,y:73.6897}).wait(1).to({graphics:mask_2_graphics_40,x:137.0674,y:71.4496}).wait(179));

	// workshop
	this.instance_7 = new lib.mc_photo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.1,126.05,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65).to({alpha:0},8).to({_off:true},1).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.9,126.1,421.20000000000005,125);
// library properties:
lib.properties = {
	id: '913E89145D2B40C99768C821033B8054',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Banner_4_Won_final_atlas_.png?1572897054555", id:"Banner_4_Won_final_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['913E89145D2B40C99768C821033B8054'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
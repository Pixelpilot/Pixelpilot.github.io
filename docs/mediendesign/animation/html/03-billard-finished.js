(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"03_billard_finished_atlas_1", frames: [[0,0,700,490]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["03_billard_finished_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Weisse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Kugel
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACehFQAOAgAAAlQAABHgyAzQgzAyhHAAQhGAAgzgyQgygzAAhHQAAhGAygzQAzgyBGAAQAkAAAfANQAeAMAZAZQAXAYANAcg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah5B5QgygyAAhHQAAhGAygzQAzgyBGAAQAkAAAfANQAdAMAZAZQAYAYANAdQAOAfAAAlQAABHgzAyQgyAzhHAAQhGAAgzgzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Schatten
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("Ah9AoQg0gQAAgYQAAgXA0gQQA0gRBJAAQBKAAA0ARQA0AQAAAXQAAAYg0AQQg0ARhKAAQhJAAg0gRg");
	this.shape_2.setTransform(-0.6,17.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Weisse, new cjs.Rectangle(-18.4,-18.2,36.599999999999994,41.3), null);


(lib.TapeteBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,0,0.9143,0.8347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TapeteBackground, new cjs.Rectangle(0,0,640,409), null);


(lib.Shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("Ah9AoQg0gQAAgYQAAgWA0gSQA0gQBJAAQBJAAA0AQQA1ASAAAWQAAAYg1AQQg0ARhJAAQhJAAg0gRg");
	this.shape.setTransform(17.8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shadow, new cjs.Rectangle(0,0,35.6,11.4), null);


(lib.Schwarze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAlQgFgCgEgGQgKgMAFgNQgKADgIgJQgEgFgBgGQgCgGADgFQACgGAFgDQAFgEAEgBQAEgBAEABQAEABAEADQACABADAEQAEAFABAEQABAFgCAFIAIAAIAIAEIAHAGQAEAFACAGQABAGgCAHQgCAGgGAFQgGAEgGABIgCAAQgFAAgGgDgAAAACQgDADABAFQAAAFADAFIAGAGIAHACQADgBADgCQACgCABgCIABgHIgFgHIgGgGIgGgBQgEAAgDACgAgUgZQgEADABAEQAAAEADAFQADAEAEABQAFABADgDIACgDIABgDIAAgFQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgEgGIgGAAIgFABg");
	this.shape.setTransform(10.9127,-10.0214);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ACehFQAOAgAAAlQAABHgyAzQgzAyhHAAQhGAAgzgyQgygzAAhHQAAhGAygzQAzgyBGAAQAkAAAfANQAeAMAZAZQAXAYANAcg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBAQgZgLgQgbQgPgaADgbQADgaAUgMIAGgDQAeANAYAZQAYAXANAcIgBAEQgDAbgUALQgKAGgLAAQgLAAgLgFg");
	this.shape_2.setTransform(9.7257,-9.0061);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ah5B5QgygyAAhHQAAhGAygzQAzgyBGAAQAkAAAfANIgHADQgUAMgDAaQgDAcAPAaQAQAbAZALQAZAKATgLQAVgMADgbIAAgDQAOAfAAAlQAABHgzAyQgyAzhHAAQhGAAgzgzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Schwarze, new cjs.Rectangle(-18.2,-18.2,36.4,36.4), null);


(lib.Licht = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Agzi4IAAgnIAAgqIAAhOQAwgiA4AiIAAA1IAAAqIAABAIAAABQgIgDgIgCIgCgBQgGgBgGgBQgEgBgEAAQgdgCglALgAA1i4QAKAEAKAEIFeH4QmwBBmchBIFdn4QALgFAKgD");
	this.shape.setTransform(161.2,36.0625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,102,0.298)","rgba(255,255,204,0)"],[0,1],0,-122.5,0,122.6).s().p("A5iOMISm/AQGcBBGwhBITTfAQtQCpswAAQsyAAsTipg");
	this.shape_1.setTransform(163.5,176.564);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],-2.2,19.2,0,-2.2,19.2,85.4).s().p("AmlD1IFen4QAKgFAKgDIAAABQAlgLAcACIAJABIALACIADAAQAIACAIAEIAAgBIAUAIIFeH4QjZAgjSAAQjTAAjOggg");
	this.shape_2.setTransform(161.2,44.4471);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAkBTIgCAAIgLgCIgJgBQgdgCglALIAAgBIAAgoIBpgZIAABBIAAABQgJgEgIgCgAg0hGQAwgjA5AjIAAA1IhpAYg");
	this.shape_3.setTransform(161.25,8.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0gHIBpgZIAAAoIhpAZg");
	this.shape_4.setTransform(161.25,10.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Licht, new cjs.Rectangle(0,-1,327,285.2), null);


(lib.Koe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Anfg7IYYAaIB8ACIAlAAQAQAigQAkIgiAAIh8ACI4aAWAnfg7QAAARgBATQgBAsADAqIruAKQgphBAqhQg");
	this.shape.setTransform(124.9499,7.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#795C13").s().p("AlqhIILrANIgBAkQgCArADArIrsAJQgqhBArhPg");
	this.shape_1.setTransform(38.4999,7.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B1871C").s().p("AsNgYIABgkIYXAaIADAdQACAWgCAXI4aAVQgCgqABgrg");
	this.shape_2.setTransform(155.0982,7.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8gHIgDgdIB8ABQAFAjgDAkIh7ABQACgWgCgWg");
	this.shape_3.setTransform(239.3917,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVgjIAjABQAQAigQAjIghABQADgkgFgjg");
	this.shape_4.setTransform(247.675,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Koe, new cjs.Rectangle(-1,-1,251.9,16.5), null);


(lib.Hintergrund = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Licht
	this.instance = new lib.Licht();
	this.instance.setTransform(466.1,174.45,1,1,0,0,0,163.5,127.4);

	this.instance_1 = new lib.Licht();
	this.instance_1.setTransform(321.55,174.45,1,1,0,0,0,163.5,127.4);

	this.instance_2 = new lib.Licht();
	this.instance_2.setTransform(177.05,174.45,1,1,0,0,0,163.5,127.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Stange
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AT2DQIFUAAQAjAygjAoMgyUAAAQgigoAigyIEsAAIHXn5AT2DQIlAn5A0eDQMAoUAAA");
	this.shape.setTransform(319.1,29.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("A5KAtQghgoAhgxIEsAAMAoUAAAIFUAAQAiAxgiAog");
	this.shape_1.setTransform(319.1,55.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Tisch
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006800").s().p("ApGO5IAAm2IAxhXIK8y8IgGA5IrlaPIgBABgAF3u4IDQAgIjLCkg");
	this.shape_2.setTransform(58.4,374.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AYpBGIAOimIAAggIH3AAIAAAgIAPCmQiIBMiFAAQiFAAiChMgA/LBgIAAAAIAGg5IhthbQgOgNAGgTQAHgXAfgQQBVgqDGAlIAEAAIAFDDIAAABQgFAfhbAGIgqABQgzAAgegKg");
	this.shape_3.setTransform(274.11,292.3781);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("Egx/gABIJJogMBa2AACIAAAxI4dAAIn3AAMgg9AAAIgoAAIzHAAIgFAAQjFglhVAqQgfAQgHAXQgGATAOANIhSB5IliIVIjOE2g");
	this.shape_4.setTransform(320.025,328.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008A00").s().p("ASEAQIAAgfIYcAAIAAAfgA2xAQIgnAAIv3AAIjQgfITHAAIAnAAMAg+AAAIAAAfg");
	this.shape_5.setTransform(367.975,281.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007800").s().p("Egx/AEjIDOk1IFioWIBSh5IBtBcIq9S8IgyBXgAZjrNIYdAAIAACmI4OAAIAAABgARdonMg0YgABIAAgBIDLikIP3AAIAoAAMAg9AAAIgOCng");
	this.shape_6.setTransform(320.025,354.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("Egx/AONIAAgGIABAAIAChnILm6PIAAAAQAqAOBRgFQBbgGAFgfMA0YAABIABAAQEECZEQiZIAAAAIYOAAIAAcXg");
	this.shape_7.setTransform(320,390);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Tapete
	this.instance_3 = new lib.TapeteBackground();
	this.instance_3.setTransform(320,175,1,0.8557,0,0,0,320,204.5);
	this.instance_3.alpha = 0.5703;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Hintergrund
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Egx/Ae2MAAAg9rMBj/AAAMAAAA9rg");
	this.shape_8.setTransform(320,197.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hintergrund, new cjs.Rectangle(0,-1,640,481.9), null);


// stage content:
(lib._03billardfinished = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Koe
	this.instance = new lib.Koe();
	this.instance.setTransform(47.5,250.35,1,1,-74.9998,0,0,28.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.3,scaleX:0.9999,scaleY:0.9999,rotation:-33.9733,x:58.1,y:293.2},14,cjs.Ease.get(-1)).to({regY:7.2,scaleX:1,scaleY:1,rotation:9.9834,y:269.2},15,cjs.Ease.get(1)).wait(6).to({rotation:9.9834},0).to({regY:7.3,x:15.7,y:261.5},16,cjs.Ease.get(-1)).to({regY:7.2,x:-26.9,y:253.6},13,cjs.Ease.get(1)).to({regY:7.3,scaleX:0.9999,scaleY:0.9999,rotation:7.0096,x:84.2,y:277.85},7,cjs.Ease.get(-1)).to({regY:7.4,rotation:-5.9913,x:131.85,y:288.15},5,cjs.Ease.get(1)).wait(17).to({rotation:-40.4958,x:89.7,y:279.4},12,cjs.Ease.get(-1)).to({regY:7.2,scaleX:1,scaleY:1,rotation:-74.9998,x:47.5,y:250.35},19,cjs.Ease.get(1)).wait(70));

	// Weisse
	this.instance_1 = new lib.Weisse();
	this.instance_1.setTransform(323.4,309.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({x:440.95},4).wait(1).to({regX:-0.3,regY:2.7,x:440.65,y:311.9},0).wait(2).to({regX:0,regY:0,x:440.95,y:309.2},0).wait(1).to({regX:-0.3,regY:2.7,x:440.65,y:311.9},0).wait(2).to({regX:0,regY:0,x:440.95,y:309.2},0).wait(1).to({regX:-0.3,regY:2.7,x:440.3,y:311.9},0).wait(1).to({x:439.8},0).wait(1).to({x:439},0).wait(1).to({x:438},0).wait(1).to({x:436.8},0).wait(1).to({x:435.35},0).wait(1).to({x:433.65},0).wait(1).to({x:431.75},0).wait(1).to({x:429.6},0).wait(1).to({x:427.25},0).wait(1).to({x:424.65},0).wait(1).to({x:421.8},0).wait(1).to({x:418.75},0).wait(1).to({x:415.45},0).wait(1).to({x:411.95},0).wait(1).to({x:408.2},0).wait(1).to({x:404.25},0).wait(1).to({regX:0,regY:0,x:400.35,y:309.2},0).wait(1).to({regX:-0.3,regY:2.7,x:395.6,y:311.9},0).wait(1).to({x:390.95},0).wait(1).to({x:386.05},0).wait(1).to({x:380.9},0).wait(1).to({x:375.55},0).wait(1).to({x:370},0).wait(1).to({x:364.15},0).wait(1).to({regX:0,regY:0,x:358.45,y:309.2},0).to({x:323.4},30,cjs.Ease.get(1)).wait(57));

	// Scharze
	this.instance_2 = new lib.Schwarze();
	this.instance_2.setTransform(494.7,328.1,1,1,0,0,0,18.7,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({regX:0,regY:0,x:476,y:309.2},0).to({x:796},4).wait(20).to({x:658},0).to({rotation:-720,x:476},38,cjs.Ease.get(1)).wait(57));

	// Schwarze_Schatten
	this.instance_3 = new lib.Shadow();
	this.instance_3.setTransform(476.6,326.45,1,1,0,0,0,17.8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({x:796.05,y:328.1},4).wait(20).to({x:658.6},0).to({x:476.6,y:326.45},38,cjs.Ease.get(1)).wait(57));

	// Hintergrund
	this.instance_4 = new lib.Hintergrund();
	this.instance_4.setTransform(320,239.6,1,1,0,0,0,320,240.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(263.5,238.7,550.4,241.40000000000003);
// library properties:
lib.properties = {
	id: '88EA3A5D3536466181D36A780D0323D0',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/03_billard_finished_atlas_1.png?1675768523892", id:"03_billard_finished_atlas_1"}
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
an.compositions['88EA3A5D3536466181D36A780D0323D0'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"03_billard_finished_800x480_atlas_1", frames: [[0,0,1024,1024]]}
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



(lib.wallpaper = function() {
	this.initialize(ss["03_billard_finished_800x480_atlas_1"]);
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
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah5B6QgygzAAhHQAAhGAygzQAzgyBGAAQAkAAAfANQAdAMAaAZQAXAYANAdQAOAfAAAlQAABHgyAzQgzAyhHAAQhGAAgzgyg");

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
	this.instance = new lib.wallpaper();
	this.instance.setTransform(1024,512,0.25,0.25,180);

	this.instance_1 = new lib.wallpaper();
	this.instance_1.setTransform(512,512,0.25,0.25,0,180,0);

	this.instance_2 = new lib.wallpaper();
	this.instance_2.setTransform(512,512,0.25,0.25,180);

	this.instance_3 = new lib.wallpaper();
	this.instance_3.setTransform(0,512,0.25,0.25,0,180,0);

	this.instance_4 = new lib.wallpaper();
	this.instance_4.setTransform(1024,0,0.25,0.25,0,0,180);

	this.instance_5 = new lib.wallpaper();
	this.instance_5.setTransform(512,0,0.25,0.25);

	this.instance_6 = new lib.wallpaper();
	this.instance_6.setTransform(512,0,0.25,0.25,0,0,180);

	this.instance_7 = new lib.wallpaper();
	this.instance_7.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TapeteBackground, new cjs.Rectangle(0,0,1024,512), null);


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
	this.shape_3.graphics.f("#333333").s().p("Ah5B6QgygzAAhHQAAhGAygzQAzgyBGAAQAkAAAfANIgHADQgUAMgDAaQgDAcAQAaQAPAbAZALQAZAKATgLQAVgMADgbIAAgDQAOAfAAAlQAABHgyAzQgzAyhHAAQhGAAgzgyg");

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
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8gHIgDgdIB8ACQAFAigDAkIh7ABQACgWgCgWg");
	this.shape_3.setTransform(239.3917,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVgiIAjAAQAQAigQAjIghABQADgkgFgig");
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

	// Tisch
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006800").s().p("ArYSlIAAoiIA+hsINr3qIgIBIMgOfAgvIAAABgAHWykIEEAoIj/DNg");
	this.shape.setTransform(73,447.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AezBXIASjPIAAgoIJ1AAIAAAoIASDPQiqBfimAAQimAAijhfgEgm+AB4IAHhIIiIhxQgRgQAHgYQAJgcAngUQBqg1D3AuIAGAAIAGD0IAAABQgGAmhyAIQgdACgZAAQg/AAglgNg");
	this.shape_1.setTransform(342.6375,344.8384);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("Eg+fgACILbqmMBxkAACIAAA+I+kAAIp1AAMgpNAAAIgxAAI35AAIgGAAQj3gvhqA1QgnAUgJAcQgHAYARAQIhmCXIm6KZIkCGDg");
	this.shape_2.setTransform(400.025,390.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008A00").s().p("AWkAUIAAgnIekAAIAAAngA8dAUIgyAAIz0AAIkEgnIX4AAIAyAAMApNAAAIAAAng");
	this.shape_3.setTransform(459.975,330.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007800").s().p("Eg+fAFrIECmCIG6qaIBmiXICIByItrXqIg/BsgAf8t/IekAAIAADPI+RAAIgBABgAV0qwMhBegABIAAgBID+jNIT1AAIAxAAMApNAAAIgSDQg");
	this.shape_4.setTransform(400.025,422.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("Eg+fARtIAAgGIABAAIACiBMAOgggvQA1ARBlgGQBygIAGgmMBBeAABIABABQFFC+FUi+IABgBIeRAAMAAAAjYg");
	this.shape_5.setTransform(400,466.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Tapete
	this.instance = new lib.TapeteBackground();
	this.instance.setTransform(512,256,1,1,0,0,0,512,256);
	this.instance.alpha = 0.2383;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Hintergrund
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Eg+fAmfMAAAhM9MB8/AAAMAAABM9g");
	this.shape_6.setTransform(400,246.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hintergrund, new cjs.Rectangle(0,0,1024,580), null);


// stage content:
(lib._03billardfinished800x480 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(732.55,245.75,1.25,1.2478,0,0,0,163.5,127.5);

	this.instance_1 = new lib.Licht();
	this.instance_1.setTransform(551.9,245.75,1.25,1.2478,0,0,0,163.5,127.5);

	this.instance_2 = new lib.Licht();
	this.instance_2.setTransform(371.25,245.75,1.25,1.2478,0,0,0,163.5,127.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(213));

	// Stange
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AY0HaIGpAAQAqA+gqAyMg+5AAAQgrgyArg+IF3AAMAyZAAAIACwjA5lHaIgLwZ");
	this.shape.setTransform(548.85,43.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("A/cA4QgqgyAqg9IF3AAMAyZAAAIGpAAQAqA9gqAyg");
	this.shape_1.setTransform(548.85,96.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(213));

	// Koe
	this.instance_3 = new lib.Koe();
	this.instance_3.setTransform(77.5,330.35,1,1,-74.9998,0,0,28.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:7.3,scaleX:0.9999,scaleY:0.9999,rotation:-33.9733,x:88.1,y:373.2},14,cjs.Ease.get(-1)).to({regY:7.2,scaleX:1,scaleY:1,rotation:9.9834,y:349.2},15,cjs.Ease.get(1)).wait(6).to({rotation:9.9834},0).to({regY:7.3,x:45.7,y:341.5},16,cjs.Ease.get(-1)).to({regY:7.2,x:3.1,y:333.6},13,cjs.Ease.get(1)).to({regY:7.3,scaleX:0.9999,scaleY:0.9999,rotation:7.0096,x:114.2,y:357.85},7,cjs.Ease.get(-1)).to({regY:7.4,rotation:-5.9913,x:161.85,y:368.15},6,cjs.Ease.get(1)).wait(19).to({rotation:-40.4958,x:119.7,y:359.4},12,cjs.Ease.get(-1)).to({regY:7.2,scaleX:1,scaleY:1,rotation:-74.9998,x:77.5,y:330.35},35,cjs.Ease.get(1)).wait(70));

	// Weisse
	this.instance_4 = new lib.Weisse();
	this.instance_4.setTransform(353.4,389.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({x:470.95},4).wait(1).to({regX:-0.3,regY:2.7,x:470.65,y:391.9},0).wait(3).to({regX:0,regY:0,x:470.95,y:389.2},0).wait(1).to({regX:-0.3,regY:2.7,x:470.65,y:391.9},0).wait(4).to({regX:0,regY:0,x:470.95,y:389.2},0).wait(1).to({regX:-0.3,regY:2.7,x:470.3,y:391.9},0).wait(1).to({x:469.8},0).wait(1).to({x:469},0).wait(1).to({x:468},0).wait(1).to({x:466.8},0).wait(1).to({x:465.35},0).wait(1).to({x:463.65},0).wait(1).to({x:461.75},0).wait(1).to({x:459.6},0).wait(1).to({x:457.25},0).wait(1).to({x:454.65},0).wait(1).to({x:451.8},0).wait(1).to({x:448.75},0).wait(1).to({x:445.45},0).wait(1).to({x:441.95},0).wait(1).to({x:438.2},0).wait(1).to({x:434.25},0).wait(1).to({regX:0,regY:0,x:430.35,y:389.2},0).wait(1).to({regX:-0.3,regY:2.7,x:425.6,y:391.9},0).wait(1).to({x:420.95},0).wait(1).to({x:416.05},0).wait(1).to({x:410.9},0).wait(1).to({x:405.55},0).wait(1).to({x:400},0).wait(1).to({x:394.15},0).wait(1).to({regX:0,regY:0,x:388.45,y:389.2},0).to({x:353.4},46,cjs.Ease.get(1)).wait(57));

	// Scharze
	this.instance_5 = new lib.Schwarze();
	this.instance_5.setTransform(524.7,408.1,1,1,0,0,0,18.7,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({regX:0,regY:0,x:506,y:389.2},0).to({rotation:549.4525,x:825.95,y:389.15},7).wait(14).to({rotation:720,x:826,y:389.2},0).wait(6).to({x:828},0).to({rotation:0,x:506},54,cjs.Ease.get(1)).wait(57));

	// Schwarze_Schatten
	this.instance_6 = new lib.Shadow();
	this.instance_6.setTransform(506.6,406.45,1,1,0,0,0,17.8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({x:826.05,y:408.1},7).wait(20).to({x:828.6},0).to({x:506.6,y:406.45},54,cjs.Ease.get(1)).wait(57));

	// Hintergrund
	this.instance_7 = new lib.Hintergrund();
	this.instance_7.setTransform(320,239.6,1,1,0,0,0,320,240.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(213));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(373.5,224.1,650.5,355.1);
// library properties:
lib.properties = {
	id: '88EA3A5D3536466181D36A780D0323D0',
	width: 800,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/03_billard_finished_800x480_atlas_1.png?1708935670355", id:"03_billard_finished_800x480_atlas_1"}
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
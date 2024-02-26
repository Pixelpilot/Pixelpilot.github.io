(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.SonnenKoerper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Koerper
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkOHPQAKhnilgmQAah/h2g7QA1hihChuQBeg3gaiPQCwgWgjiHQB/AZA7hzQBrAoBlg1QBRBgB1gcQAdCACAANQgGB8BgA+QglBvAyBhQhRBYANBuQh1AfgWB8Qh8gWhAByQhmhihqBvQhIhVh+ARg");
	this.shape.setTransform(53.125,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SonnenKoerper, new cjs.Rectangle(0,-53.1,106.3,106.2), null);


(lib.SonnenFace = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AhsFQQhAgPgugqQgrgngOg1QgtiqAeiQQArjWDQgDQA7gBBTBEQBSBEA4BgQA/BqgBBaQAABrhXA9QiEBeh4AAQglAAgjgJg");
	this.shape.setTransform(30.2911,0.0289);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SonnenFace, new cjs.Rectangle(0,-34.4,60.6,68.9), null);


(lib.SonnenAugen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaAgQgHgEgEgHQgEgHABgIQABgHAGgGQAGgGAIgBQAIgBAHADQAHAEAEAHQADAGgBAIQgBAJgGAFQgFAFgIACIgFAAQgFAAgFgCgAgnAPQgKgBgFgHQgHgHABgJQAAgIAFgGQAFgGAHgDQAIgCAJADQAJAEAEAIQAEAIgDAKQgCAIgIAFQgFADgHAAIgFAAg");
	this.shape.setTransform(17.0707,1.3454);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyBjQglgLgRggQgSATgaAIQgbAHgZgHQgZgHgTgUQgTgUgFgaQgFgZAKgaQAKgaAVgQQAVgQAbgCQAcgDAXAMQAYALAOAYIABACIAHgHQAQgOAUgGQAUgGAWADQAVAEASAMQAUANALAXQALAWgBAXQgBAYgOAWQgNAVgVAMQgWAMgXAAQgOAAgNgEgAAigBQgIABgHAFQgGAGgBAIQAAAIADAHQAEAIAHADQAHAEAIgCQAIgBAGgGQAFgFABgIQACgIgEgHQgDgHgHgEQgGgCgGAAIgDAAgAgrgSQgHACgFAGQgEAHgBAHQAAAIAGAJQAGAHAKABQAJABAIgFQAHgFADgJQACgJgEgHQgDgIgJgEQgGgCgFAAIgHABg");
	this.shape_1.setTransform(17.0458,-0.0207);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B26B00").s().p("AimAMIgCgCIAAAAIAAgBIAAgBQgBgNARgCIAbgCQA7gEA7AAICIABIALABQAQAAAMAJIABACIAAAAIAAAAQgBAPgRgEIgUgEIgEAAIiGAAIgHAAQgngCgnADIgYACIgvAEQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_2.setTransform(17.1753,0.0972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE8500").s().p("AArBhQgigNgOgcIgsAaQgoANgmgYQgggVgIgoIAAABIABACQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAIAvgFIAYgCQAngCAnABIAHAAICGAAIAEABIATAEQARAEACgPQACAbgOAaQgUAkgtAMIgHAAIgLABQgQAAgQgGgAioAGQgEgWAIgXQAIgUAOgPQAPgQATgGQAngNAmASQAPAHAJALIAMASQAPgQAWgJQAagJAZAFQAtAKAVAmQAJASACASIgCgCQgLgJgQAAIgMAAIiIgBQg7gBg7AEIgbADQgQACAAANIAAgDg");
	this.shape_3.setTransform(17.104,0.0311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},14).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},15).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_1},{t:this.shape}]},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.3,34.2,20.6);


(lib.MondKoerper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E68A").s().p("AjUE2Qgsg4Aig/QAgg8BCgCQBwAPgEBuQgBA3gwAcQgiATgeAAQguAAglgugACqhjQhMh6B1hXQAcgWAhAAQCJAAAqB5QAKAegJAfQgcBbhkAXQgVAEgSAAQhIAAgrhFgAm4hEQgagfARgkQASgkAngCQA8AHACA6QACAlghARQgSAKgPAAQgZAAgVgYgAjviuQg0hMA/hFQAhgkAuAAQB7AUgLB3QgGA7g3AYQgcAMgZAAQg0AAgkg1g");
	this.shape.setTransform(48.5646,6.1343);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AABINQjagCiaiaQiZiZAAjYQAAjZCZiaQCaiZDZAAQDYAACZCZQCaCaACDaQADDciaCZQiXCXjXAAIgHAAgAkGDeQgiA/AsA4QA9BNBWgyQAwgcACg3QAEhuhxgPQhCACggA8gACrkVQh1BXBMB6QA3BWBjgVQBkgXAchbQAKgfgLgeQgqh5iJAAQggAAgdAWgAnohoQgRAkAaAfQAhAmAtgYQAhgRgBglQgDg6g7gHQgoACgRAkgAkLkgQhABFA1BMQA1BOBYglQA3gYAFg7QALh3h7gUQguAAggAkg");
	this.shape_1.setTransform(52.5271,3.0269);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MondKoerper, new cjs.Rectangle(0,-49.5,105.1,105.1), null);


(lib.MondAugen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7C777").s().p("ACJAxQgNgCgNgFQgjgPghgSQgFgDgCgFQgGgbAdgGQAuAPAsATQAYALgKAXQgGAOgOAAIgGgBgAiXAUQgVgMAKgVQAHgNAOgDQAvgMAwgGQAQgCAOAAQAcAGgHAbQgCAMgLADQgRADgSABIgaACQgkAEghAMIgFABQgEAAgEgCg");
	this.shape.setTransform(18.2145,-8.8201);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(55));

	// Ebene_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaAgQgHgEgEgHQgEgHABgIQABgHAGgGQAGgGAIgBQAIgBAHADQAHAEAEAHQADAGgBAIQgBAJgGAFQgFAFgIACIgFAAQgFAAgFgCgAgnAPQgKgBgFgHQgHgHABgJQAAgIAFgGQAFgGAHgDQAIgCAJADQAJAEAEAIQAEAIgDAKQgCAIgIAFQgFADgHAAIgFAAg");
	this.shape_1.setTransform(17.0707,1.3454);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyBjQglgLgRggQgSATgaAIQgbAHgZgHQgZgHgTgUQgTgUgFgaQgFgZAKgaQAKgaAVgQQAVgQAbgCQAcgDAXAMQAYALAOAYIABACIAHgHQAQgOAUgGQAUgGAWADQAVAEASAMQAUANALAXQALAWgBAXQgBAYgOAWQgNAVgVAMQgWAMgXAAQgOAAgNgEgAAigBQgIABgHAFQgGAGgBAIQAAAIADAHQAEAIAHADQAHAEAIgCQAIgBAGgGQAFgFABgIQACgIgEgHQgDgHgHgEQgGgCgGAAIgDAAgAgrgSQgHACgFAGQgEAHgBAHQAAAIAGAJQAGAHAKABQAJABAIgFQAHgFADgJQACgJgEgHQgDgIgJgEQgGgCgFAAIgHABg");
	this.shape_2.setTransform(17.0458,-0.0207);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AimAMIgCgCIAAAAIAAgBIAAgBQgBgNARgCIAbgCQA7gEA7AAICIABIALABQAQAAAMAJIABACIAAAAIAAAAQgBAPgRgEIgUgEIgEAAIiGAAIgHAAQgngCgnADIgYACIgvAEQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(17.1753,0.0972);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C7C777").s().p("AArBhQgigNgOgcIgsAaQgoANgmgYQgggVgIgoIAAABIABACQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAIAvgFIAYgCQAngCAnABIAHAAICGAAIAEABIATAEQARAEACgPQACAbgOAaQgUAkgtAMIgHAAIgLABQgQAAgQgGgAioAGQgEgWAIgXQAIgUAOgPQAPgQATgGQAngNAmASQAPAHAJALIAMASQAPgQAWgJQAagJAZAFQAtAKAVAmQAJASACASIgCgCQgLgJgQAAIgMAAIiIgBQg7gBg7AEIgbADQgQACAAANIAAgDg");
	this.shape_4.setTransform(17.104,0.0311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},14).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},15).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_2},{t:this.shape_1}]},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.8,34.8,24.1);


(lib.Himmel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BCF2FF","#00CCFF"],[0,1],-40.5,-288.5,40.5,155.9).s().p("Eg+fAlgMAAAhK/MB8/AAAMAAABK/g");
	this.shape.setTransform(400,240.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Himmel, new cjs.Rectangle(0,0,800,480.1), null);


(lib.Boden = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("Eg+fAKZIAA0xMB8/AAAIAAUxg");
	this.shape.setTransform(400,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Boden, new cjs.Rectangle(0,-66.5,800,133), null);


(lib.Sonnengesicht = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Augen
	this.instance = new lib.SonnenAugen();
	this.instance.setTransform(17.1,-13.4,1,1,0,0,0,17.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mund
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPB4QgXgDgVgIQgHgDgDgGIgBgCIAAgCIAAgCIgBgCIAAgCIAAgCIAAgBIAAgCIABgCIABgCIAAgCIABgCQAVgUAeALIAGABQA6AJAzgZQAEgEAFgCQAIgDAHgEIAFgGIAEgEIAHgFIAEgIIADgDIgBgCIgBgCIgBgCIAAgBIgBgCIAAgCIAAgCIgBgBIABgCIAAgCIAAgCIABgBIADgGIAFgGQAEgEAGgBIAFAAIAAAAQALAAAJAIQAHAHAEAJIABADIAFAIIAIAKQAEAFACAFIABAEIAAACIAAABIAAACIAAAEIgBAEIgBACIgBACIgBABIgBACQgIAJgLAAQgKAAgIgFQhDA/haAAQgQAAgRgCgAhRhGQgIgDgFgJQgFgIACgJQADgNANgFQAMgEALAHQAHAGACAJQACAJgEAIQgEAIgJADQgFACgEAAIgIgBgAiIhJQgJgDgEgIQgFgIACgJQAEgNAMgFQAMgFALAIQAHAFACAKQACAJgEAIQgEAIgJADQgFACgEAAIgIgCg");
	this.shape.setTransform(26.0692,11.426);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Gesicht
	this.instance_1 = new lib.SonnenFace();
	this.instance_1.setTransform(20.4,0.85,1,1,0,0,0,30.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sonnengesicht, new cjs.Rectangle(-9.9,-33.6,60.6,69), null);


(lib.Sonne = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Gesicht
	this.instance = new lib.Sonnengesicht();
	this.instance.setTransform(54.5,-2.45,1,1,0,0,0,20.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Koerper
	this.instance_1 = new lib.SonnenKoerper();
	this.instance_1.setTransform(51.1,0,1,1,0,0,0,51.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-55.7,111.39999999999999,111.4);


(lib.Mond = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#747446").s().p("ABHAtQgJgBgsgPQgVgHgmALQggAJgIgLQgOgQAJgNQAIgNAbAEQASADAcgWQAagVATAEQAcAHANAWQAJAOAAATQABAagTAAIgBAAg");
	this.shape.setTransform(61.7513,20.5365);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Augen
	this.instance = new lib.MondAugen();
	this.instance.setTransform(51.75,-15.75,1,1,0,0,0,17.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7C777").s().p("AgDAbQgMACgLgEQgKgCgEgJQgDgLABgJQACgbAegCQAoAAALAiQAFAOgJALQgKAMgLAAQgJAAgKgJg");
	this.shape_1.setTransform(47.575,2.1099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	// MondKoerper
	this.instance_1 = new lib.MondKoerper();
	this.instance_1.setTransform(53.1,0.5,1,1,0,0,0,53.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mond, new cjs.Rectangle(0,-49,105.1,105.1), null);


// stage content:
(lib._02sunmoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Boden
	this.instance = new lib.Boden();
	this.instance.setTransform(319.95,413.5,1,1,0,0,0,319.9,0);
	var instanceFilter_1 = new cjs.ColorFilter(0.48,0.48,0.48,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-68,804,137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(3).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 31).wait(59).to(new cjs.ColorFilter(0.48,0.48,0.48,1,0,0,0,0), 19).wait(72));

	// Mondanimation
	this.instance_1 = new lib.Mond();
	this.instance_1.setTransform(84,412,1,1,0,0,0,53.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({regX:52.5,regY:3.5,x:94.45,y:400.85},0).wait(1).to({x:105.5,y:386.55},0).wait(1).to({x:116.4,y:372.6},0).wait(1).to({x:127.25,y:358.95},0).wait(1).to({x:137.95,y:345.65},0).wait(1).to({x:148.65,y:332.65},0).wait(1).to({x:159.2,y:320},0).wait(1).to({x:169.65,y:307.65},0).wait(1).to({x:180.05,y:295.65},0).wait(1).to({x:190.35,y:283.95},0).wait(1).to({x:200.55,y:272.6},0).wait(1).to({x:210.7,y:261.55},0).wait(1).to({x:220.7,y:250.85},0).wait(1).to({x:230.65,y:240.45},0).wait(1).to({x:240.5,y:230.4},0).wait(1).to({x:250.3,y:220.65},0).wait(1).to({x:259.95,y:211.25},0).wait(1).to({x:269.55,y:202.15},0).wait(1).to({x:279.05,y:193.4},0).wait(1).to({x:288.45,y:184.95},0).wait(1).to({x:297.8,y:176.85},0).wait(1).to({x:307,y:169.05},0).wait(1).to({x:316.15,y:161.6},0).wait(1).to({x:325.2,y:154.45},0).wait(1).to({x:334.2,y:147.65},0).wait(1).to({x:343.1,y:141.15},0).wait(1).to({x:351.85,y:135},0).wait(1).to({x:360.6,y:129.15},0).wait(1).to({x:369.2,y:123.65},0).wait(1).to({x:377.7,y:118.45},0).wait(1).to({x:386.15,y:113.6},0).wait(1).to({x:394.5,y:109.05},0).wait(1).to({x:402.8,y:104.85},0).wait(1).to({x:410.95,y:100.95},0).wait(1).to({x:419.05,y:97.4},0).wait(1).to({x:427.05,y:94.15},0).wait(1).to({x:434.95,y:91.25},0).wait(1).to({x:442.8,y:88.65},0).wait(1).to({x:450.5,y:86.35},0).wait(1).to({x:458.15,y:84.4},0).wait(1).to({x:465.7,y:82.8},0).wait(1).to({x:473.2,y:81.5},0).wait(1).to({x:480.55,y:80.55},0).wait(1).to({x:487.85,y:79.9},0).wait(1).to({x:495.05,y:79.55},0).wait(1).to({x:502.2},0).wait(1).to({x:509.2,y:79.9},0).wait(1).to({x:516.15,y:80.55},0).wait(1).to({x:523,y:81.5},0).wait(1).to({x:529.8,y:82.8},0).wait(1).to({x:536.45,y:84.4},0).wait(1).to({x:543.05,y:86.35},0).wait(1).to({x:549.55,y:88.65},0).wait(1).to({x:556,y:91.2},0).wait(1).to({x:562.3,y:94.15},0).wait(1).to({x:568.55,y:97.4},0).wait(1).to({x:574.7,y:100.95},0).wait(1).to({x:580.75,y:104.85},0).wait(1).to({x:586.75,y:109.05},0).wait(1).to({x:592.6,y:113.6},0).wait(1).to({x:598.4,y:118.45},0).wait(1).to({x:604.15,y:123.65},0).wait(1).to({x:609.75,y:129.15},0).wait(1).to({x:615.3,y:135},0).wait(1).to({x:620.75,y:141.15},0).wait(1).to({x:626.1,y:147.65},0).wait(1).to({x:631.35,y:154.45},0).wait(1).to({x:636.55,y:161.6},0).wait(1).to({x:641.65,y:169.05},0).wait(1).to({x:646.65,y:176.85},0).wait(1).to({x:651.6,y:184.95},0).wait(1).to({x:656.4,y:193.4},0).wait(1).to({x:661.15,y:202.15},0).wait(1).to({x:665.8,y:211.25},0).wait(1).to({x:670.4,y:220.65},0).wait(1).to({x:674.85,y:230.4},0).wait(1).to({x:679.25,y:240.45},0).wait(1).to({x:683.55,y:250.85},0).wait(1).to({x:687.8,y:261.55},0).wait(1).to({x:691.9,y:272.6},0).wait(1).to({x:695.95,y:283.95},0).wait(1).to({x:699.9,y:295.65},0).wait(1).to({x:703.75,y:307.65},0).wait(1).to({x:707.55,y:320},0).wait(1).to({x:711.25,y:332.65},0).wait(1).to({x:714.85,y:345.65},0).wait(1).to({x:718.35,y:358.95},0).wait(1).to({x:721.8,y:372.6},0).wait(1).to({x:725.1,y:386.55},0).wait(1).to({x:728.35,y:400.85},0).wait(1).to({x:731.55,y:415.5},0).wait(1));

	// Sonnenanimation
	this.instance_2 = new lib.Sonne();
	this.instance_2.setTransform(53.1,426.9,1,1,0,0,0,53.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:62.5,y:414.85},0).wait(1).to({x:71.9,y:403.05},0).wait(1).to({x:81.25,y:391.45},0).wait(1).to({x:90.5,y:380.05},0).wait(1).to({x:99.7,y:368.9},0).wait(1).to({x:108.85,y:357.95},0).wait(1).to({x:117.95,y:347.25},0).wait(1).to({x:127,y:336.75},0).wait(1).to({x:135.95,y:326.45},0).wait(1).to({x:144.9,y:316.4},0).wait(1).to({x:153.75,y:306.55},0).wait(1).to({x:162.55,y:296.9},0).wait(1).to({x:171.3,y:287.45},0).wait(1).to({x:179.95,y:278.25},0).wait(1).to({x:188.6,y:269.3},0).wait(1).to({x:197.15,y:260.5},0).wait(1).to({x:205.65,y:251.95},0).wait(1).to({x:214.1,y:243.65},0).wait(1).to({x:222.5,y:235.5},0).wait(1).to({x:230.8,y:227.6},0).wait(1).to({x:239.1,y:219.9},0).wait(1).to({x:247.3,y:212.45},0).wait(1).to({x:255.45,y:205.2},0).wait(1).to({x:263.55,y:198.15},0).wait(1).to({x:271.6,y:191.35},0).wait(1).to({x:279.55,y:184.75},0).wait(1).to({x:287.45,y:178.35},0).wait(1).to({x:295.35,y:172.2},0).wait(1).to({x:303.15,y:166.25},0).wait(1).to({x:310.85,y:160.5},0).wait(1).to({x:318.55,y:155},0).wait(1).to({x:326.2,y:149.7},0).wait(1).to({x:333.75,y:144.6},0).wait(1).to({x:341.25,y:139.75},0).wait(1).to({x:348.7,y:135.1},0).wait(1).to({x:356.1,y:130.65},0).wait(1).to({x:363.4,y:126.45},0).wait(1).to({x:370.7,y:122.45},0).wait(1).to({x:377.9,y:118.65},0).wait(1).to({x:385.05,y:115.1},0).wait(1).to({x:392.15,y:111.7},0).wait(1).to({x:399.2,y:108.6},0).wait(1).to({x:406.15,y:105.65},0).wait(1).to({x:413.1,y:102.95},0).wait(1).to({x:419.95,y:100.5},0).wait(1).to({x:426.75,y:98.2},0).wait(1).to({x:433.5,y:96.15},0).wait(1).to({x:440.2,y:94.3},0).wait(1).to({x:446.85,y:92.7},0).wait(1).to({x:453.4,y:91.3},0).wait(1).to({x:459.9,y:90.1},0).wait(1).to({x:466.35,y:89.1},0).wait(1).to({x:472.75,y:88.35},0).wait(1).to({x:479.1,y:87.8},0).wait(1).to({x:485.4,y:87.5},0).wait(1).to({x:491.6,y:87.4},0).wait(1).to({x:497.75,y:87.5},0).wait(1).to({x:503.85,y:87.8},0).wait(1).to({x:509.9,y:88.35},0).wait(1).to({x:515.9,y:89.1},0).wait(1).to({x:521.8,y:90.1},0).wait(1).to({x:527.7,y:91.3},0).wait(1).to({x:533.5,y:92.7},0).wait(1).to({x:539.25,y:94.3},0).wait(1).to({x:544.95,y:96.15},0).wait(1).to({x:550.6,y:98.2},0).wait(1).to({x:556.15,y:100.45},0).wait(1).to({x:561.7,y:102.95},0).wait(1).to({x:567.15,y:105.65},0).wait(1).to({x:572.55,y:108.6},0).wait(1).to({x:577.9,y:111.7},0).wait(1).to({x:583.2,y:115.05},0).wait(1).to({x:588.4,y:118.65},0).wait(1).to({x:593.6,y:122.45},0).wait(1).to({x:598.7,y:126.45},0).wait(1).to({x:603.75,y:130.65},0).wait(1).to({x:608.75,y:135.1},0).wait(1).to({x:613.7,y:139.75},0).wait(1).to({x:618.55,y:144.6},0).wait(1).to({x:623.4,y:149.7},0).wait(1).to({x:628.15,y:155},0).wait(1).to({x:632.85,y:160.5},0).wait(1).to({x:637.5,y:166.25},0).wait(1).to({x:642.05,y:172.2},0).wait(1).to({x:646.6,y:178.35},0).wait(1).to({x:651.05,y:184.75},0).wait(1).to({x:655.5,y:191.35},0).wait(1).to({x:659.85,y:198.15},0).wait(1).to({x:664.15,y:205.2},0).wait(1).to({x:668.35,y:212.45},0).wait(1).to({x:672.55,y:219.9},0).wait(1).to({x:676.65,y:227.6},0).wait(1).to({x:680.75,y:235.5},0).wait(1).to({x:684.75,y:243.6},0).wait(1).to({x:688.7,y:251.95},0).wait(1).to({x:692.55,y:260.5},0).wait(1).to({x:696.4,y:269.25},0).wait(1).to({x:700.15,y:278.25},0).wait(1).to({x:703.9,y:287.45},0).wait(1).to({x:707.55,y:296.9},0).wait(1).to({x:711.15,y:306.5},0).wait(1).to({x:714.65,y:316.35},0).wait(1).to({x:718.15,y:326.45},0).wait(1).to({x:721.55,y:336.75},0).wait(1).to({x:724.95,y:347.25},0).wait(1).to({x:728.25,y:357.95},0).wait(1).to({x:731.45,y:368.9},0).wait(1).to({x:734.65,y:380.05},0).wait(1).to({x:737.8,y:391.45},0).wait(1).to({x:740.85,y:403.05},0).wait(1).to({x:743.85,y:414.85},0).wait(1).to({x:746.85,y:426.9},0).to({_off:true},1).wait(71));

	// Himmel
	this.instance_3 = new lib.Himmel();
	this.instance_3.setTransform(320,0,1,1,0,0,0,320,0);
	var instance_3Filter_2 = new cjs.ColorFilter(0.48,0.48,0.48,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-2,-2,804,484);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(184));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(3).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 31).wait(59).to(new cjs.ColorFilter(0.48,0.48,0.48,1,0,0,0,0), 19).wait(72));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:4, endFrame:34, x:-2, y:-68, w:804, h:137});
	this.filterCacheList.push({instance: this.instance, startFrame:93, endFrame:93, x:-2, y:-68, w:804, h:137});
	this.filterCacheList.push({instance: this.instance, startFrame:94, endFrame:112, x:-2, y:-68, w:804, h:137});
	this.filterCacheList.push({instance: this.instance_3, startFrame:4, endFrame:34, x:-2, y:-2, w:804, h:484});
	this.filterCacheList.push({instance: this.instance_3, startFrame:93, endFrame:93, x:-2, y:-2, w:804, h:484});
	this.filterCacheList.push({instance: this.instance_3, startFrame:94, endFrame:112, x:-2, y:-2, w:804, h:484});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,240,400.1,240.10000000000002);
// library properties:
lib.properties = {
	id: '9D63C63E80EB4AD2BF6F1A692BB2956C',
	width: 800,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['9D63C63E80EB4AD2BF6F1A692BB2956C'] = {
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
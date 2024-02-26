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


(lib.mcShadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AjvA4QhkgXAAghQAAggBkgWQBkgXCLgBQCNABBjAXQBjAWAAAgQAAAhhjAXQhjAXiNgBQiLABhkgXg");
	this.shape.setTransform(33.95,7.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcShadow, new cjs.Rectangle(0,0,67.9,15.7), null);


(lib.mcHat = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("ABkhjIAADHIjHAAIAAjHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhjBkIAAjHIDHAAIAADHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcHat, new cjs.Rectangle(-11,-11,22,22), null);


(lib.mcBallOrange = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(19.4,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Ball
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");
	this.shape_1.setTransform(29.9,29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");
	this.shape_2.setTransform(29.9,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcBallOrange, new cjs.Rectangle(-1,-1,61.8,61.8), null);


(lib.mcBall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(19.4,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Ball
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003366").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");
	this.shape_1.setTransform(29.9,29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");
	this.shape_2.setTransform(29.9,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcBall, new cjs.Rectangle(-1,-1,61.8,61.8), null);


// stage content:
(lib._01jumpingballs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Ausholen:9,Unten:33,Oben:51,Ende:116};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ball
	this.instance = new lib.mcBallOrange();
	this.instance.setTransform(220.05,140.05,1,1,0,0,0,29.9,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:375.05},20,cjs.Ease.get(-1)).to({y:140.05},20,cjs.Ease.get(1)).to({y:375.05},19,cjs.Ease.get(-1)).to({y:140.05},20,cjs.Ease.get(1)).to({y:375.05},19,cjs.Ease.get(-1)).to({y:140.05},20,cjs.Ease.get(1)).wait(1));

	// Schatten
	this.instance_1 = new lib.mcShadow();
	this.instance_1.setTransform(237.85,379.4,0.6171,0.7452,0,0,0,34,7.9);
	this.instance_1.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:218.8,y:404.65,alpha:1},20,cjs.Ease.get(-1)).to({scaleX:0.6171,scaleY:0.7452,x:237.85,y:379.4,alpha:0.1016},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:218.8,y:404.65,alpha:1},19,cjs.Ease.get(-1)).to({scaleX:0.6171,scaleY:0.7452,x:237.85,y:379.4,alpha:0.1016},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:218.8,y:404.65,alpha:1},19,cjs.Ease.get(-1)).to({scaleX:0.6171,scaleY:0.7452,x:237.85,y:379.4,alpha:0.1016},20,cjs.Ease.get(1)).wait(1));

	// Hut
	this.instance_2 = new lib.mcHat();
	this.instance_2.setTransform(572.2,328.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:308.35},11,cjs.Ease.get(1)).to({y:362.35},15,cjs.Ease.get(-1)).to({y:342.35},4,cjs.Ease.get(1)).to({y:369.35},3,cjs.Ease.get(-1)).wait(1).to({y:270.15},0).wait(1).to({rotation:3.9502,y:250.3287},0).wait(1).to({rotation:7.8507,y:230.757},0).wait(1).to({rotation:11.668,y:211.6025},0).wait(1).to({rotation:15.3651,y:193.0512},0).wait(1).to({rotation:18.9036,y:175.2959},0).wait(1).to({rotation:22.2466,y:158.5214},0).wait(1).to({rotation:25.3623,y:142.8876},0).wait(1).to({rotation:28.2266,y:128.5153},0).wait(1).to({rotation:30.8248,y:115.4779},0).wait(1).to({rotation:33.1523,y:103.7992},0).wait(1).to({rotation:35.213,y:93.4591},0).wait(1).to({rotation:37.0178,y:84.403},0).wait(1).to({rotation:38.5824,y:76.5523},0).wait(1).to({rotation:39.9251,y:69.8149},0).wait(1).to({rotation:41.0653,y:64.0933},0).wait(1).to({rotation:42.0225,y:59.2904},0).wait(1).to({rotation:42.815,y:55.3137},0).wait(1).to({rotation:43.46,y:52.0772},0).wait(1).to({rotation:43.9731,y:49.5027},0).wait(1).to({rotation:44.3683,y:47.5198},0).wait(1).to({rotation:44.6581,y:46.0656},0).wait(1).to({rotation:44.8536,y:45.0844},0).wait(1).to({rotation:44.9647,y:44.527},0).wait(1).to({rotation:45,y:44.35},0).wait(1).to({rotation:45.0534,y:44.6869},0).wait(1).to({rotation:45.218,y:45.7261},0).wait(1).to({rotation:45.5015,y:47.5148},0).wait(1).to({rotation:45.9123,y:50.1073},0).wait(1).to({rotation:46.4604,y:53.5665},0).wait(1).to({rotation:47.1575,y:57.9662},0).wait(1).to({rotation:48.0176,y:63.3945},0).wait(1).to({rotation:49.0575,y:69.9573},0).wait(1).to({rotation:50.2979,y:77.7857},0).wait(1).to({rotation:51.7649,y:87.0443},0).wait(1).to({rotation:53.4924,y:97.9467},0).wait(1).to({rotation:55.5258,y:110.7793},0).wait(1).to({rotation:57.9288,y:125.9451},0).wait(1).to({rotation:60.7971,y:144.0471},0).wait(1).to({rotation:64.2873,y:166.0746},0).wait(1).to({rotation:68.6971,y:193.9048},0).wait(1).to({rotation:74.7716,y:232.2421},0).wait(1).to({rotation:90,y:328.35},0).to({rotation:135,y:292.35},5,cjs.Ease.get(1)).to({rotation:180,y:328.35},4,cjs.Ease.get(-1)).to({y:316.35},3,cjs.Ease.get(1)).to({y:328.35},2,cjs.Ease.get(-1)).wait(29));

	// Ball
	this.instance_3 = new lib.mcBall();
	this.instance_3.setTransform(572.1,399.25,1,1,0,0,0,29.9,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.6991,scaleY:1.2011},9,cjs.Ease.get(1)).to({scaleX:1.2731,scaleY:0.7867,x:572.25,y:399.3},10,cjs.Ease.get(-1)).to({regX:30.1,regY:59.9,scaleX:1.9046,scaleY:0.2975,x:572.55},14,cjs.Ease.get(1)).to({regY:59.8,scaleX:0.7181,scaleY:1.4054,x:572.4,y:368.75},1,cjs.Ease.get(1)).to({regX:29.9,regY:59.9,scaleX:1,scaleY:1,x:572.35,y:171.35},20,cjs.Ease.get(1)).to({regX:30,regY:59.8,scaleX:0.6352,scaleY:1.5837,x:572.55,y:395.5},14,cjs.Ease.get(-1)).to({regX:30.1,scaleX:1.9046,scaleY:0.331,y:399.3},2).to({regX:29.9,scaleX:0.6991,scaleY:1.2011,x:572.1,y:399.25},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(36));

	// Schatten
	this.instance_4 = new lib.mcShadow();
	this.instance_4.setTransform(571.8,400.15,1,1,0,0,0,34,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.7496},9,cjs.Ease.get(1)).to({scaleX:1.2312},10,cjs.Ease.get(-1)).to({scaleX:1.797,x:571.85},14,cjs.Ease.get(0.98)).wait(1).to({scaleX:0.7626,x:571.8},0).wait(1).to({regY:7.8,scaleX:0.745,x:572.75,y:398.1,alpha:0.9124},0).wait(1).to({scaleX:0.7282,x:573.65,y:396.25,alpha:0.8293},0).wait(1).to({scaleX:0.7124,x:574.5,y:394.5,alpha:0.7507},0).wait(1).to({scaleX:0.6975,x:575.35,y:392.85,alpha:0.6766},0).wait(1).to({scaleX:0.6834,x:576.15,y:391.3,alpha:0.6069},0).wait(1).to({scaleX:0.6703,x:576.85,y:389.85,alpha:0.5418},0).wait(1).to({scaleX:0.6581,x:577.5,y:388.5,alpha:0.4812},0).wait(1).to({scaleX:0.6468,x:578.15,y:387.25,alpha:0.425},0).wait(1).to({scaleX:0.6364,x:578.75,y:386.1,alpha:0.3733},0).wait(1).to({scaleX:0.6269,x:579.25,y:385.05,alpha:0.3262},0).wait(1).to({scaleX:0.6183,x:579.7,y:384.1,alpha:0.2835},0).wait(1).to({scaleX:0.6106,x:580.15,y:383.25,alpha:0.2453},0).wait(1).to({scaleX:0.6038,x:580.55,y:382.5,alpha:0.2116},0).wait(1).to({scaleX:0.5979,x:580.85,y:381.85,alpha:0.1824},0).wait(1).to({scaleX:0.5929,x:581.1,y:381.3,alpha:0.1577},0).wait(1).to({scaleX:0.5889,x:581.35,y:380.85,alpha:0.1375},0).wait(1).to({scaleX:0.5857,x:581.5,y:380.5,alpha:0.1218},0).wait(1).to({scaleX:0.5834,x:581.65,y:380.25,alpha:0.1105},0).wait(1).to({scaleX:0.5821,x:581.75,y:380.1,alpha:0.1038},0).wait(1).to({regY:7.9,scaleX:0.5816,x:581.8,y:380.15,alpha:0.1016},0).to({regX:33.9,scaleX:0.8387,x:571.75,y:400.15,alpha:1},14,cjs.Ease.get(-1)).wait(2).to({regX:34,scaleX:1.797,x:571.85},0).to({scaleX:0.6272,x:571.8},8).to({scaleX:1},5).wait(36));

	// Hintergrund
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("Eg+fAKkIAAz2IbxACIBRAWMAuzAAAQAQgEEIgFIEFgEIBCgJIGSgCQBhgMETgQQEwgUDYgWISigCIArgJIAQAAIAAVHg");
	this.shape.setTransform(400,412.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(119));

	// Himmel
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#3399FF","#000000"],[0,0.988,1],-0.1,223.7,-0.1,-223.8).s().p("Eg+fAfCMAAAg+DMB8/AAAMAAAA+Dg");
	this.shape_1.setTransform(400,198.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(119));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,240,400,240);
// library properties:
lib.properties = {
	id: 'E7285B349AF04B25949F37A294B8562D',
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
an.compositions['E7285B349AF04B25949F37A294B8562D'] = {
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
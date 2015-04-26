Ti.UI.setBackgroundColor("#fff");
var galleria = require("gallery");

var mainActivity = Ti.UI.createWindow({
	backgroundColor: "528bb2",
	hasChild : true
});

var mainActivityView = Ti.UI.createView({
	backgrounfColor: "e6e6e6",
	top: 20,
	width: "80%",
	height: "15%"
});


var mainActivityLabel = Ti.UI.createLabel({
	text: "Main Menu"
});

var galleryButton = Ti.UI.createView({
	backgroundColor: "47e3da",
	top: mainActivityView.top + 100,
	width: "60%",
	height: 40,
	hasChild: true,

});
 
var galleryText = Ti.UI.createLabel({
	text: "Gallery",
	textColor: "000"

});
 
 var mainGallery = function(){

 	 console.log("here!");
  	
 	 var GalleryWindow = Ti.UI.createWindow({
	 backgroundcolor: "727272",
	 width: deviceWth,
	
	
	 });
	 var GalleryView = Ti.UI.createScrollView({
	 width: "100%",
	 height: "100%",
	 backgroundColor: "b9cb42",
	 layout: "horizontal",
	 top:20,
	 contentWidth: "100",
	 showVerticalScrollIndicator: true
 		
	 });
	 
	 for (var i=0; i<itemCount; i++){
	var viewer = Ti.UI.createView({
		backgroundColor: "fff",
		top: margin,
		left: margin,
		width: itemsize,
		height: itemsize,
//		name: i,
	});
	var text = Ti.UI.createLabel({
		text: i+1,
		color: "000",
	});
	viewer.add(text);
	GalleryView.add(viewer);
}
	 
	 GalleryWindow.add(GalleryView);
	 GalleryView.addEventListener("click", function(listen) {
//	   console.log(listen.source.name);
	 });
     GalleryWindow.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
 };

//ships.addEventListener("click", function(event){
//	console.log(event.source.title);
//});


// var apploader = require("app");
var deviceWth = Ti.Platform.displayCaps.platformWith;
var deviceHgt = Ti.Platform.displayCaps.platformHeight;
var itemCount = 30;
var itemRow = 4;
var margin = 10;
var canvasWth = (10);
var itemsize = "65";







galleryButton.add(galleryText);
galleryButton.addEventListener("click", mainGallery);
mainActivity.add(galleryButton);
mainActivityView.add(mainActivityLabel);
mainActivity.add(mainActivityView);
mainActivity.open();

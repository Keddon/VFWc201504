/**
 * @author Keddon Campbell
 */


var extraWindow = Ti.UI.createWindow({
	backgroundColor: "fff",
	title: "Story Generator"
});


var extraView = Ti.UI.createView({
	backgroundColor: "fff",
	width: "100%",
	height: "100%",
	top: 0,
	borderRadius: 10
});

var extraViewnoun = Ti.UI.createView({
	backgroundColor: "aefff1",
	width: "80%",
	height: "8%",
	top: 60,
	borderRadius: 10
});
var extraViewverb = Ti.UI.createView({
	backgroundColor: "aefff1",
	width: "80%",
	height: "8%",
	top: 90,
	borderRadius: 10
});
var extraViewplace = Ti.UI.createView({
	backgroundColor: "aefff1",
	width: "80%",
	height: "8%",
	top: 120,
	borderRadius: 10
});


var theNoun = Ti.UI.createTextField({
	top: 0
});

var theVerb = Ti.UI.createTextField({
	top: 0
	
});

var thePlace = Ti.UI.createTextField({
	top: 0
});



var nounlabel = Ti.UI.createLabel({
	text: "please type a noun",
});


var verblabel = Ti.UI.createLabel({
	text: "please type a verb",
});


var placelabel = Ti.UI.createLabel({
	text: "please type a place",
});

var resultLabel = Ti.UI.createLabel({
	text: "generate!",
	color: "fff"
});
var resultButton = Ti.UI.createView({
	height: "8%",
	width: "40%",
	bottom: 5,
	backgroundColor: "000",
	borderRadius: 15
});

var noune = theNoun.value;
var verbe = theVerb.value;
var placeu = thePlace.value;

var theResult = Ti.UI.createLabel({
	text: noune +" laught to see such fun as the fish "+ verbe +" all night with the shark all night around the "+ placeu,
});

		function MakeExtra(){	
					
					resultButton.add(resultLabel);	
					extraViewplace.add(thePlace,placelabel);
			        extraViewverb.add(theVerb,verblabel);		
					extraViewnoun.add(theNoun,nounlabel);
					extraView.add(extraViewnoun,resultButton,extraViewverb,extraViewplace);
					extraWindow.add(extraView);
					navWin.openWindow(extraWindow);
					};

	function generate(){
		var gen =Ti.UI.createWindow({
			backgroundColor: "fff",
		});
		var genview = Ti.UI.createView({
			width: "100%",
			top: 10,
			height: "80%"
		});
		var genlabel = Ti.UI.createLabel({
			text: theResult.text
		});
		
		 noune = theNoun.value;
		 verbe = theVerb.value;
 		placeu = thePlace.value;
		genview.add(genlabel);
		gen.add(genview);
		navWin.openWindow(gen);
	};

extrasButton.addEventListener("click", MakeExtra);
resultButton.addEventListener("click", generate);

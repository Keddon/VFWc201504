Ti.UI.setBackgroundColor("#fff");

var fruits = [{title:"Apples", infoAbout: "test teste tassstrruuuuuu"},{title:"Bananas"},{title:"Plums"},{title:"Grapes"},{title:"Oranges"}];
var veggie = [{title:"Carrots"},{title:"Broccoli"},{title:"Cabbage"},{title:"Turnip"},{title:"Onion"},];

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#bdd684"
});

var mainView = Ti.UI.createView({
	backgroundColor: "#dbffe4",
	borderRadius: 2,
	borderWidth: 1,
	borderColor: "#fff",
	width: "100%",
	height: 60,
	top: 0
});
var fruitfooter = Ti.UI.createView({
	backgroundColor: "#dbffe4",
	width: "100%",
	height: 20,
});

var veggiefooter = Ti.UI.createView({
	backgroundColor: "#dbffe4",
	width:"100%",
	height: 20,
});

var fruitfooterText = Ti.UI.createLabel({
	text: "great for the road",
	color: "3d398a",
	font:{fontSize:12,fontWeight:"bold"}
});

var veggiefooterText = Ti.UI.createLabel({
	text: "great for cooking",
	color: "3d398a",
	font:{fontSize:12,fontWeight:"bold"}
});

veggiefooter.add(veggiefooterText);
fruitfooter.add(fruitfooterText);


var mainViewLabel = Ti.UI.createLabel({
	text: "Fruit-pedia",
	color: "#000",
	font: (fontSize = 24, fontFamily = "trebuchetMS", fontWeight = "bold"),
	top : 40
});

var Foods = Ti.UI.createTableView({
//	data: fruits,
	top: mainView.top + mainView.height,
	borderColor: "fffcca",
	style : Ti.UI.iPhone.TableViewStyle.GROUPED
});

var fruitSection = Ti.UI.createTableViewSection  ({
	headerTitle: "Delicious Fruits",
	//footerTitle: "great for the road"
	footerView: fruitfooter
});

var veggieSection = Ti.UI.createTableViewSection ({
	headerTitle: "Healthy Veggies",
	//footerTitle: "great for coocking"
	footerView: veggiefooter
});

var info = function(){
	
	var infoWindow = Ti.UI.createWindow({
		backgroundColor: "216c3e"
	});
	
		var infoViewLabel = Ti.UI.createLabel({
		text: this.title,
		color: "8e17ea",
		font: (fontSize = 34, fontFamily = "trebuchetMS", fontWeight = "bold"),
		top : 20
	});
		var infoAboutLabel = Ti.UI.createLabel({
		text: this.about,
		color: "394f4e",
		font: (fontSize = 44, fontFamily = "trebuchetMS"),
		top : 50
	});
		var infoView = Ti.UI.createView({
		backgroundColor: "#dbffe4",
		borderColor: "#fff",
		width: "100%",
		height: 40,
		top: 0
	});
		var infoAboutView = Ti.UI.createView({
		backgroundColor: "#dbffe4",
		borderColor: "1fdfd4",
		width: "100%",
		height: "60%",

	});
	
	var exitButton = Ti.UI.createLabel({
		text: "Exit",
		backgroundColor: "d2bd5d",
		color: "5d6ed2",
		height: 35,
		font: (fontSize = 24, fontFamily = "trebuchetMS", fontWeight = "bold"),
		width: "40%",
		bottom: 0,
		textAlign: "center"
		
	});
	
	var closeInfo = function(){
		infoWindow.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
	};
	
	exitButton.addEventListener("click", closeInfo);
	
	infoAboutView.add(infoAboutLabel);
	infoView.add(infoViewLabel);
	infoWindow.add(infoView,exitButton,infoAboutView);
	infoWindow.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

for (var a=0, b=fruits.length ; a<b ; a++){
	var fruitName = Ti.UI.createTableViewRow({
		title: fruits[a].title,
		about: fruits[a].infoAbout,
		hasChild: true
	});
	fruitSection.add(fruitName);
	fruitName.addEventListener("click", info);
}

for(var a=0, b=veggie.length ;a<b ; a++){
	var veggieName = Ti.UI.createTableViewRow({
		title: veggie[a].title,
		about: veggie[a].infoAbout,
		hasChild: true
	});
	veggieSection.add(veggieName);
	veggieName.addEventListener("chick", info);
}

var FoodSection = [fruitSection, veggieSection];

Foods.setData(FoodSection);

//var LoadFoods = require("Functions");

mainView.add(mainViewLabel);
mainWindow.add(mainView,Foods);
mainWindow.open();
Ti.UI.setBackgroundColor("#fff");

var fruits = [{title:"Apples"},{title:"Bananas"},{title:"Plums"},{title:"Grapes"},{title:"Oranges"}];
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
	headerTitle: "Dilicious Fruits",
	footerTitle: "great for the road"
});

var veggieSection = Ti.UI.createTableViewSection ({
	headerTitle: "Healthy Veggies",
	footerTitle: "great for coocking"
});

for (var i=0, j=fruits.length ; i<j ; i++){
	var fruitName = Ti.UI.createTableViewRow({
		title: fruits[i].title
	});
	fruitSection.add(fruitName);
}

for(var a=0, b=veggie.length ;a<b ; a++){
	var veggieName = Ti.UI.createTableViewRow({
		title: veggie[a].title
	});
	veggieSection.add(veggieName);
}

var FoodSection = [fruitSection, veggieSection];

Foods.setData(FoodSection);


mainView.add(mainViewLabel);
mainWindow.add(mainView,Foods);
mainWindow.open();
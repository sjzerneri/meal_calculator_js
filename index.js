function start() {
    console.log('starting meal calculator');
};

start();

//set up all diners
function Diner(name, meal) {
    this.name = name;
    this.meal = meal;
}

var dinerArray = [];

//set up the diners manually
dinerArray.push(new Diner("Steve", ['steak', 'potatoes', 'soda']));
dinerArray.push(new Diner("Grady", ['steak', 'potatoes', 'soda']));
dinerArray.push(new Diner("Jane", ['steak', 'potatoes']));

//establish costs of the food items
var steak = 50;
var potatoes = 10;
var soda = 5;

//establish tax
taxRate = .05;

//establish tip
tip = .1;

//add a dish to a diners meal
Diner.prototype.addDish = function(dish) {
    this.meal.push(dish);
};


//calculate meal prices tip and tax
Diner.prototype.dinerCost = function(dinerArray) {
    var mealSub = 0;
    var mealTip = 0;
    var mealTax = 0;
    var mealTotal = 0;

    console.log(dinerArray[j].meal.length);

    console.log("Calculating Cost Of Items...");

    for (i = 0; i < dinerArray[j].meal.length; i++) {

        console.log("Calculating " + dinerArray[j].meal[i]);

        if (dinerArray[j].meal[i] === 'steak') {
            mealSub += 50;
        } else if (dinerArray[j].meal[i] === 'potatoes') {
            mealSub += 10;
        } else if (dinerArray[j].meal[i] === 'soda') {
            mealSub += 5;
        } else {
            mealSub += 0;
        }
    }
    console.log("The Cost For " + dinerArray[j].name + " is " + mealSub);

    mealTax = taxRate * mealSub;
    mealTip = (mealSub + mealTax) * taxRate;
    mealTotal = mealSub + mealTax + mealTip;

    console.log("The Tax For " + dinerArray[j].name + " is " + mealTax);
    console.log("The Tip For " + dinerArray[j].name + " is " + mealTip);

    console.log("The Total For " + dinerArray[j].name + " is " + mealTotal);
};

//iterate over each diner

for (j=0; j < dinerArray.length; j++) {
	dinerArray[j].dinerCost(dinerArray);
};

//dine together and split the bill




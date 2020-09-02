"use strict";


function Vehicles(totalUnits, repairsUnits, operatedUnits) {
	this.totalUnits = totalUnits;
	this.repairsUnits = repairsUnits;
	this.operatedUnits = operatedUnits;
	this.getNotUsesUnits = function () {
		return (this.totalUnits - this.repairsUnits - this.operatedUnits);
	}
}


function Aircraft(totalUnits, repairsUnits, operatedUnits, parachute) {
	Vehicles.call(this, totalUnits, repairsUnits, operatedUnits);

	this.parachute = parachute;
	alert(parachute + ' Парашютов на складе');

	this.typeVehicl = 'Самолеты';

	this.changTotalUnits = function (total) {
		this.totalUnits = total;
	}
	this.changRepairsUnits = function (repairs) {
		this.repairsUnits = repairs;
	}
	this.changOperatedUnits = function (operated) {
		this.operatedUnits = operated;
	}
}

function Car(totalUnits, repairsUnits, operatedUnits, wheels) {
	Vehicles.call(this, totalUnits, repairsUnits, operatedUnits);

	this.wheels = wheels;
	alert(wheels + ' Колес на складе');
	this.typeVehicl = 'Авто';

	this.changTotalUnits = function (total) {
		this.totalUnits = total;
	}
	this.changRepairsUnits = function (repairs) {
		this.repairsUnits = repairs;
	}
	this.changOperatedUnits = function (operated) {
		this.operatedUnits = operated;
	}
}

function Ships(totalUnits, repairsUnits, operatedUnits, boats) {
	Vehicles.apply(this, arguments);

	this.boats = boats;
	alert(boats + ' Лодок на складе');

	this.typeVehicl = 'Корабли';


	this.changTotalUnits = function (total) {
		this.totalUnits = total;
	}
	this.changRepairsUnits = function (repairs) {
		this.repairsUnits = repairs;
	}
	this.changOperatedUnits = function (operated) {
		this.operatedUnits = operated;
	}
}

var vehicles = new Vehicles(13, 3, 9);
console.log(vehicles);
console.log(vehicles.getNotUsesUnits() + ' Простой техники');

var aircraftUnits = new Aircraft(3, 1, 2, 30);
console.log(aircraftUnits);
console.log(aircraftUnits.getNotUsesUnits() + ' Простой техники');
if (prompt('ОК - изменить параметры') === '') {
	aircraftUnits.changTotalUnits(prompt('Общее колличетво поменять самолеты'));
	aircraftUnits.changRepairsUnits(prompt('Ремонтный цех поменять самолеты'));
	aircraftUnits.changOperatedUnits(prompt('В эксплуатации поменять самолеты'));
}
var carUnits = new Car(7, 2, 4, 20);
console.log(carUnits);
console.log(carUnits.getNotUsesUnits() + ' Простой техники');
if (prompt('ОК - изменить параметры') === '') {
	carUnits.changTotalUnits(prompt('Общее колличетво поменять машины'));
	carUnits.changRepairsUnits(prompt('Ремонтный цех поменять машины'));
	carUnits.changOperatedUnits(prompt('В эксплуатации поменять машины'));
}
var shipUnits = new Ships(2, 0, 2, 10);
console.log(shipUnits);
console.log(shipUnits.getNotUsesUnits() + ' Простой техники');
if (prompt('ОК - изменить параметры') === '') {
	shipUnits.changTotalUnits(prompt('Общее колличетво поменять коробли'));
	shipUnits.changRepairsUnits(prompt('Ремонтный цех поменять коробли'));
	shipUnits.changOperatedUnits(prompt('В эксплуатации поменять коробли'));
}
// Часть 1

// Массив имён с разным регистром и пустыми значениями
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// Новый массив 
var employersNames = [];

// Цикл перебора
for (var i = 0; i < employers.length; i++) {
// Если количество больше нуля и значение не равен пустоте, пушим в employersNames эти значения массива
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}

// Цикл перебора массива и преведение значений массива к нижнему регистру + обрезка (trim)
for (var i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
}
// Вывод в консоль массива после фильтра
console.log(employersNames);


// Тоже самое но в новом формате

// Массив имён с разным регистром и пустыми значениями
let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// Массив с методом map, где переменная значений name применяет к себе методы trim и toLowerCase
employers = employers.map((name) => name.trim().toLowerCase());

// Новый массив с применением фильра, где переменная значений name возвращает все значения кроме пустых
let employersNames = employers.filter((name) => {
    return name.length > 0;
});

// Вывод в консоль массива после фильтра
console.log(employersNames);


// Часть 2

var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own) {
    own = own || 0;
    // Т.к. ниже будет передано два аргумента, то первый массив будет 0 и ещё будет внутрений массив из sponsors.cash
    var everyCash = Array.prototype.slice.call(arguments);
    var total = own;
    for (var i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}
// Два аргумента передаются в функцию calcCash
var money = calcCash(null, sponsors.cash);

console.log(money);
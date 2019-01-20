// Объект 'спонсоры', с массивами
let sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

// Функция подсчёта денег
function calcCash (own, numbers) {
    // Проверка на число, пустое значения или null. Проверка не пройдена = 0.
	if (isNaN(own) || own == '' || own === null) {
		own = 0;
	}
    // В переменную 'total' попадает суммированный массив с помощью функции reduce, где own изначальная сумма
    let total = numbers.reduce((a, b) => a + b, own);   
	return total;
}

let money = calcCash(null, sponsors.cash);

export {sponsors, money};
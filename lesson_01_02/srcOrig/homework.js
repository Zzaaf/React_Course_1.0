// Массив имён разных регистров и пустых значений
let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// Модификация массива с помощью метода 'map', убераем лишние пробелы, приводим всё к нижнему регистру
employers = employers.map((name) => name.trim().toLowerCase());

// Создание нового массива и перенос туда отфильтрованных значений (убрали пустые значения)
let employersNames = employers.filter((name) => {
    return name.length > 0;
});

console.log(employersNames);

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

console.log(money);

function makeBusiness ({
    // Обозначение значений аргументов по умолчанию если их нет
    owner = 'Sam',
    director = 'Виктор',
    employersNames = 'Юрий'}) {
    // В переменную 'sumSponsors' заносим массивы из объекта sponsors + неожиданный спонсор
    let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`Наш бизнес. Владелец: ${owner}, директор: ${director}. Наш бюджет: ${money}. И наши работники: ${employersNames}`);
    console.log(`Наши спонсоры: `);
    console.log(...sumSponsors);
    console.log(`Замечание. Будьте осторожны с ${sponsors.eu[0]}. Есть большой риск.`);
};

makeBusiness();


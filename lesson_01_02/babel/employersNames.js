// Массив имён разных регистров и пустых значений
let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']; // Модификация массива с помощью метода 'map', убераем лишние пробелы, приводим всё к нижнему регистру

employers = employers.map(name => name.trim().toLowerCase()); // Создание нового массива и перенос туда отфильтрованных значений (убрали пустые значения)

let employersNames = employers.filter(name => {
  return name.length > 0;
});
export { employersNames };
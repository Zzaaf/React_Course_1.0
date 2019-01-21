import { sponsors } from './calcCash';

class MakeBusiness {
  constructor({
    owner = 'Сэм',
    director = 'Виктор',
    money = 0,
    employersNames = employersNames
  }) {
    this.owner = owner;
    this.director = director;
    this.money = money;
    this.employersNames = employersNames;
  } // Метод


  info() {
    let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`Наш бизнес. Владелец: ${this.owner}, директор: ${this.director}. Наш бюджет: ${this.money}. И наши работники: ${this.employersNames}`);
    console.log(`Наши спонсоры: `);
    console.log(...sumSponsors);
    console.log(`Замечание. Будьте осторожны с ${sponsors.eu[0]}. Есть большой риск.`);
  }

}

export { MakeBusiness };
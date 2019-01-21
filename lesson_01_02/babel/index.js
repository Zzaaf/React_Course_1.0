import { employersNames } from './employersNames';
import { money } from './calcCash';
import { MakeBusiness } from './makeBusiness'; // Экземпляр 

const business = new MakeBusiness({
  owner: 'Сэм',
  money: 0,
  employersNames: employersNames
});
business.info();
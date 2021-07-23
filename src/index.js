import './sass/main.scss';

// импорт массива блюд
import dishes from './menu.json';
// все карточки
import allCards from './templates/all_cards.hbs';



const dishesList = document.querySelector('.js-menu');
// console.log(dishesList);


const cardDish = allCards(dishes);
// console.log(cardDish);
dishesList.insertAdjacentHTML('beforeend', cardDish);
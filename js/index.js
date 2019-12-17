import Api from './api.js';
import CardList from './cardlist.js';
import UserInfo from './userinfo.js';
import Validation from './validation.js/index.js.js';
import AddCardPopup from './popup/addcardpopup.js';
import ProfilePopup from './popup/profilepopup.js';
import AvatarPopup from './popup/avatarpopup.js';
import ImgPopup from './popup/imgpopup.js';

const cardContainer = document.querySelector('.places-list');
const popup = document.querySelector('.popup');
const addCardButton = document.querySelector('.user-info__button');
const profileButton = document.querySelector('.user-info__edit');
const avatarButton = document.querySelector('.user-info__photo');

export const api = new Api({
  baseUrl: 'http://95.216.175.5/cohort5',
  headers: {
    authorization: '7c52e275-a3fe-469a-b1d5-5405c9a5e586',
    'Content-Type': 'application/json',
  },
});

export const cardList = new CardList(cardContainer);
export const userInfo = new UserInfo();
export const addCardPopup = new AddCardPopup(popup);
export const profilePopup = new ProfilePopup(popup);
export const avatarPopup = new AvatarPopup(popup);
export const imgPopup = new ImgPopup(popup);
export const validate = new Validation();

addCardButton.addEventListener('click', addCardPopup.open);
profileButton.addEventListener('click', profilePopup.open);
avatarButton.addEventListener('click', avatarPopup.open);
cardContainer.addEventListener('click', imgPopup.open);

cardList.render();
userInfo.getUserInfo();

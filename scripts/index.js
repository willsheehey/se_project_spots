const initialCards = [

  {
  name: "Val Thorens",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
    },
  {
  name: "Restaurant terrace",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },
 {
  name: "An outdoor cafe",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
 {
  name: "A very long bridge, over the forest and through the trees",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
{
  name: "Tunnel with morning light",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  },

 {
  name: "Mountain house",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
  },

  ];

const editProfileButton = document.querySelector(".profile__button");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseButton = editProfileModal.querySelector(".modal__close-btn");

const newPostButton = document.querySelector(".profile__add-btn");

const newPostModal = document.querySelector("#new-post-modal");

const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

const profileNameInput = editProfileModal.querySelector("#profile-name-input");

const profileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const profileName = document.querySelector(".profile__name");

const profileDescription = document.querySelector(".profile__description");

const editProfileForm = editProfileModal.querySelector(".modal__form");

const postImageInput = newPostModal.querySelector("#profile-image-input");

const postCaptionInput = newPostModal.querySelector("#profile-caption-input");

const newPostFrom = newPostModal.querySelector(".modal__form");

const cardTemplate = document.querySelector("#card-template").content
.querySelector(".card");

const cardsList = document.querySelector(".cards__list");


function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

const cardLikeBtn = cardElement.querySelector(".card__like-button")

cardLikeBtn.addEventListener('click',function()
{cardLikeBtn.classList.toggle("card__like-button_active") })

const cardDeleteBtn = cardElement.querySelector(".card__delete-button")

cardDeleteBtn.addEventListener('click',function()
{cardElement.remove(); })


   return cardElement;
 };



function openModal(modal){
  modal.classList.add("modal_is-opened");
}
// open modal function

function closeModal(modal){
  modal.classList.remove("modal_is-opened");
}
//close modal function

editProfileButton.addEventListener('click', function() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});


editProfileCloseButton.addEventListener('click', function() {
  closeModal(editProfileModal);
});


newPostButton.addEventListener('click', function() {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener('click', function() {
  closeModal(newPostModal);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);

}

editProfileForm.addEventListener('submit', handleFormSubmit);

function handlePostFormSubmit(evt) {
  evt.preventDefault();

  const inputValues =
  {name: postCaptionInput.value,
    link: postImageInput.value,}

  const createCard = getCardElement(inputValues
  );

  cardsList.prepend(createCard);
  closeModal(newPostModal);
}


newPostFrom.addEventListener('submit', handlePostFormSubmit);

initialCards.forEach(function(item)
{
  const createCard = getCardElement(item);
  cardsList.append(createCard);
});




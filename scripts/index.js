const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const submitButton = document.querySelector(".modal__submit-btn");

const editProfileButton = document.querySelector(".profile__button");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseButton =
  editProfileModal.querySelector(".modal__close-btn");

const newPostButton = document.querySelector(".profile__add-btn");

const newPostModal = document.querySelector("#new-post-modal");

const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

const profileNameInput = editProfileModal.querySelector("#profile-name-input");

const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const profileName = document.querySelector(".profile__name");

const profileDescription = document.querySelector(".profile__description");

const editProfileForm = editProfileModal.querySelector(".modal__form");

const postImageInput = newPostModal.querySelector("#profile-image-input");

const postCaptionInput = newPostModal.querySelector("#profile-caption-input");

const newPostForm = newPostModal.querySelector(".modal__form");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsList = document.querySelector(".cards__list");

const previewModal = document.querySelector("#preview-post-modal");

const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");

const previewModalImage = previewModal.querySelector(".modal__image");

const previewModalCaption = previewModal.querySelector(".modal__caption");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");

  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardDeleteBtn.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", function () {
    previewModalImage.src = data.link;
    previewModalImage.alt = data.name;
    previewModalCaption.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

previewModalCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

function openModal(modal) {
  modal.classList.add("modal_is-opened");

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      closeModal(modal);
    }
  };

  modal._handleEscape = handleEscape;

  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");

  if (modal._handleEscape) {
    document.removeEventListener("keydown", modal._handleEscape);
    delete modal._handleEscape;
  }
}

editProfileButton.addEventListener("click", function () {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  resetValidation (editProfileForm, [profileNameInput,profileDescriptionInput], settings);
  openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
};

editProfileForm.addEventListener("submit", handleFormSubmit);

function handlePostFormSubmit(evt) {
  evt.preventDefault();

  if (!newPostForm.checkValidity()) {
    return;
  };

  const inputValues = {
    name: postCaptionInput.value,
    link: postImageInput.value,
  };

  const createCard = getCardElement(inputValues);

  cardsList.prepend(createCard);
  newPostForm.reset();
  disableButton(submitButton, settings);
  closeModal(newPostModal);
};

newPostForm.addEventListener("submit", handlePostFormSubmit);

initialCards.forEach(function (item) {
  const createCard = getCardElement(item);
  cardsList.append(createCard);
});

const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal(modal);
    }
  });
});

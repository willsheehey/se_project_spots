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

const editProfileButton = document.querySelector(".profile__button")

const editProfileModal = document.querySelector("#edit-profile-modal")

const editProfileCloseButton = editProfileModal.querySelector(".modal__close-btn")

const newPostButton = document.querySelector(".profile__add-btn")

const newPostModal = document.querySelector("#new-post-modal")

const newPostCloseButton = newPostModal.querySelector(".modal__close-btn")

const profileNameInput = editProfileModal.querySelector("#profile-name-input")

const profileDescriptionInput = editProfileModal.querySelector("#profile-description-input")

const profileName = document.querySelector(".profile__name")

const profileDescription = document.querySelector(".profile__description")

const editProfileForm = editProfileModal.querySelector(".modal__form")

const postImageInput = newPostModal.querySelector("#profile-image-input")

const postCaptionInput = newPostModal.querySelector("#profile-caption-input")

const newPostFrom = newPostModal.querySelector(".modal__form")

editProfileButton.addEventListener('click', function() {
  editProfileModal.classList.add('modal_is-opened');
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

editProfileCloseButton.addEventListener('click', function() {
  editProfileModal.classList.remove('modal_is-opened');
});

newPostButton.addEventListener('click', function() {
  newPostModal.classList.add('modal_is-opened');
});

newPostCloseButton.addEventListener('click', function() {
  newPostModal.classList.remove('modal_is-opened');
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  editProfileModal.classList.remove('modal_is-opened');

}

editProfileForm.addEventListener('submit', handleFormSubmit);

function handlePostFormSubmit(evt) {
  evt.preventDefault();
  postImageInput.textContent = postImageInput.value;
  postCaptionInput.textContent = postCaptionInput.value;
  newPostModal.classList.remove('modal_is-opened')
  console.log(postCaptionInput.value)
  console.log(postImageInput.value)
}


newPostFrom.addEventListener('submit', handlePostFormSubmit);

initialCards.forEach(function(item)
{
  console.log(item.name)
  console.log(item.link)
}
);
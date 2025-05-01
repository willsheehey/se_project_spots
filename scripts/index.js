const EditProfileButton = document.querySelector(".profile__button")

const EditProfileModal = document.querySelector("#edit-profile-modal")

const EditProfileCloseButton = EditProfileModal.querySelector(".modal__close-btn")

const NewPostButton = document.querySelector(".profile__add-btn")

const NewPostModal = document.querySelector("#new-post-modal")

const NewPostCloseButton = NewPostModal.querySelector(".modal__close-btn")

EditProfileButton.addEventListener('click', function() {
  EditProfileModal.classList.add('modal_is-opened');
});

EditProfileCloseButton.addEventListener('click', function() {
  EditProfileModal.classList.remove('modal_is-opened');
});

NewPostButton.addEventListener('click', function() {
  NewPostModal.classList.add('modal_is-opened');
});

NewPostCloseButton.addEventListener('click', function() {
  NewPostModal.classList.remove('modal_is-opened');
});




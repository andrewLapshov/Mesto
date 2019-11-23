class ProfilePopup extends Popup {
  constructor(container) {
    super(container);

    this.usernameInput = null;
    this.jobInput = null;

    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
  }

  open() {
    this.render('.popup-template_profile');
    this.addListeners();

    this.usernameInput = document.forms.edit.elements.username;
    this.jobInput = document.forms.edit.elements.job;

    this.usernameInput.value = userInfo.infoName.textContent;
    this.jobInput.value = userInfo.infoJob.textContent;
  }

  submit(e) {
    e.preventDefault();
    window.userInfo.editUserInfo(
      this.usernameInput.value,
      this.jobInput.value,
      e,
    );
  }
}
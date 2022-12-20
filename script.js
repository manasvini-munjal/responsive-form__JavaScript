/* Form Submit Handler */

class Contact {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.onSubmit = this.onSubmit.bind(this);
    this.initialize = this.initialize.bind(this);
  }  

  initialize() {
    this.onSubmit();
  }

  onSubmit() {
    let self = this;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const input = document.querySelector(`#name`).value;
      alert(`Thanks for getting in touch ${input}! We'll be in contact soon!`);
     });
  }
}

const form = document.querySelector('.form--contact');
const name = document.querySelector('#name');
const fields = ["name", "email", "subject", "message", "consent"];

const validator = new Contact(form, fields);
validator.initialize();

/* Toolbar Button Click Handler */

class Toolbar {
  constructor(buttons) {
    this.buttons = buttons;
    this.onToolbarClick = this.onToolbarClick.bind(this);
    this.initialize = this.initialize.bind(this);
  }  

  initialize() {
    this.onToolbarClick();
  }

  onToolbarClick() {

    let self = this;
    this.buttons.forEach(button => {
      button.addEventListener('click', e => {
        alert(`You click on ${e.target.innerText}`);
      })
    });
  }
}

const buttons = document.querySelectorAll('.c-footer__item a');
const toolbar = new Toolbar(buttons);
toolbar.initialize();







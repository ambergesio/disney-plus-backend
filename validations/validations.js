const firstNameRE = /^[a-zA-ZÁÉÍÓÚáéíóú\s]{2,}$/; //eslint-disable-line
const lastNameRE = /^[a-zA-ZÁÉÍÓÚáéíóú\s]{2,}$/; //eslint-disable-line
const emailRE = /^([a-zA-Z\d_\-\.]{2,})@([a-z\d-]+)\.([a-z]{2,})(\.[a-z]{2,8})?$/; //eslint-disable-line
const phoneRE = /^\d{10}$/; //eslint-disable-line
const dniRE = /^\d{7,8}$/; //eslint-disable-line
const ageRE = /^[0-9]{2}$/; //eslint-disable-line
const passwordRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#]{8,20}$/; //eslint-disable-line

const characterNameRE = /^[0-9a-zA-ZÁÉÍÓÚáéíóú\s]{2,}$/; //eslint-disable-line
const characterAgeRE = /^[0-9]{1,3}$/; //eslint-disable-line
const characterWeightRE = /^[0-9]{1,3}$/; //eslint-disable-line
const characterImageRE = /^[0-9a-zA-Z-_.:\/]{2,}$/; //eslint-disable-line
const characterHistRE = /^[0-9a-zA-Z-_,'ÁÉÍÓÚáéíóú\.\s]{2,}$/; //eslint-disable-line

module.exports = {
    firstNameRE,
    lastNameRE,
    emailRE,
    phoneRE,
    dniRE,
    ageRE,
    passwordRE,
    characterNameRE,
    characterAgeRE,
    characterWeightRE,
    characterImageRE,
    characterHistRE
};

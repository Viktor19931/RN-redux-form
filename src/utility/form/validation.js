const emailPattert = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;

export const minLength = min => value =>
    value && value.length < min ? `Must be at least ${min} characters` : undefined;

export const required = value => value ? undefined : 'Required';

export const minLength6 = minLength(6)

export const minLength4 = minLength(4)

export const isValidEmail = value =>
    value && !emailPattert.test(value) ? 'Invalid email address' : undefined;

export const isYahooMail = value =>
    value && /.+@yahoo\.com/.test(value) ?'Really? You still use yahoo mail ?' : undefined;

const validate = values => {
    const errors = {}

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Minimum length 6 characters'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!isEmail(values.email)) {
        errors.email = 'Invalid email address'
    }

    // if (!values.age) {
    //     errors.age = 'Required'
    // } else if (isNaN(Number(values.age))) {
    //     errors.age = 'Must be a number'
    // } else if (Number(values.age) < 18) {
    //     errors.age = 'Sorry, you must be at least 18 years old'
    // }
    return errors
}

export default validate

import { SubmissionError } from 'redux-form'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submit = (values, navigateToHome) => {
    return sleep(1000).then(() => {
        // simulate server latency
        if (['john@email.com', 'test@email.com'].includes(values.email)) {
            throw new SubmissionError({
                email: 'Wrong email !',
                _error: 'Login failed!'
            })
        }
        // else if (values.password.length > 12) {
        //     throw new SubmissionError({
        //         password: 'Wrong password',
        //         _error: 'Login failed!'
        //     })
        // }
        else {
            navigateToHome()
        }
    })
}


export default submit

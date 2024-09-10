import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_12k5eko', 'contact_form', form.current, '7LNldnHOcUq6P-z3l7W07')
            .then((result) => {
                console.log(result.text)
                alert('Your email was sent!')
            }, (error) => {
                console.log(error.text)
                alert('Failed to send email. Please try again.')
            })

        e.target.reset()
    }

    return (
        <div className='contact-form-wrapper'>
            <h1>Let's Connect!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required />

                <label>Email</label>
                <input type="email" name="user_email" required />

                <label>Message</label>
                <textarea name="message" required />

                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact
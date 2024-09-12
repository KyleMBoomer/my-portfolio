import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_4tzijdf', 'contact_form', form.current, 'aw_prqJ1KalF1-n97')
            .then((result) => {
                alert('Your email was sent!')
            }, (error) => {
                console.log(error.text)
                alert('Failed to send email. Please try again.')
            })

        e.target.reset()
    }

    return (
        <div className="contact-wrapper">
            <div className="contact-form-wrapper">
                <div className="ripple"></div>
                <h1>Let's Connect!</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user-name">Name</label>
                    <input type="text" id="user-name" name="user_name" required />
                    <label htmlFor="user-email">Email</label>
                    <input type="email" id="user-email" name="user_email" required />
                    <label htmlFor="user-message">Message</label>
                    <textarea id="user-message"className="message-input" name="message" required />
                    <input className="button" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact
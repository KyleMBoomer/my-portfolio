import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import github from '../public/github-icon.png'
import linkedin from '../public/linkedin-icon.png'
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
            <div className="info-section">
                <div className="person">
                    <img src={github} className="github" alt="Github Logo" />
                    <a href='https://www.github.com/kylemboomer' className="github-link">@Github</a>
                    <img src={linkedin} className="linkedin" alt="LinkedIn Logo" /> 
                    <a href='https://www.linkedin.com/in/kylemboomer' className='linkedin-link'>@LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
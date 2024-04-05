import React from 'react'

const Contact = () => {
    return (
        <section className="contact">
            <header>
                <h2 className="h2 carticle-title">Contact</h2>
            </header>
            <section className='mapbox'>
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482634.93197875493!2d72.55149932588844!3d19.081957692152727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712301726526!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form action="#" className="form">
                    <div className="input-wrapper">
                        <input type="text" name="" id="fullname" placeholder='Full Name' className='form-input'/>
                        <input type="email" name="" id="email" placeholder='Email Address' className='form-input'/>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" className="form-input"></textarea>
                    <button className="form-btn" type='submit'>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </section>
    )
}

export default Contact
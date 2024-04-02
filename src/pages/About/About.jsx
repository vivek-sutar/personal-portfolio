import React, { useEffect, useState } from 'react'
import ServicesData from '../../../public/services.json'
import TestimonialsData from '../../../public/testimonials.json'
import Service from './Service'
import Testimonial from './Testimonial'

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      setTestimonials(data)
    })
  }, [])

  return (
    <div className='about active'>
      <header>
        <h2 className="h2 article-active">About Me</h2>
      </header>
      <section className="about-text">
        <p>I'm not just a Laravel full-stack developer, I'm a mean one! Watch out bugs, I'm coming for you with clean code and killer efficiency.
          My Laravel skills are so sharp, they're practically dangerous. You wouldn't want to mess with a mean Laravel full-stack developer like me." (use this in a casual setting)</p>
      </section>

      {/* section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className='service-list'>
          {
            ServicesData.map((service, key) => (
              <Service key={key} title={service.title} description={service.description} icon={service.icon} />
            ))
          }
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className='testimonials-list has-scrollbar'>
          {
            testimonials.map((testimonial, key) => (
              <Testimonial key={key} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial} />
            ))
          }
        </ul>
      </section>

      <section className='clients'>
        <h3 className='h3 clients-title'>Clients</h3>
        <ul className='clients-list has-scrollbar'>
          <li className='clients-item'>
            <a href="#">
              <img src="../../public/images/logo-1-color.png" alt="" />
            </a>
          </li>
          <li className='clients-item'>
            <a href="#">
              <img src="../../public/images/logo-2-color.png" alt="" />
            </a>
          </li>
          <li className='clients-item'>
            <a href="#">
              <img src="../../public/images/logo-3-color.png" alt="" />
            </a>
          </li>
          <li className='clients-item'>
            <a href="#">
              <img src="../../public/images/logo-4-color.png" alt="" />
            </a>
          </li>
          <li className='clients-item'>
            <a href="#">
              <img src="../../public/images/logo-5-color.png" alt="" />
            </a>
          </li>
          <li className='clients-item'>
            <a href="#">
              <img src="../../public/images/logo-6-color.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default About
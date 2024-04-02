import React from 'react'
import { GiClawSlashes, GiMailbox } from 'react-icons/gi'
import MyAvatarPng from '../../public/images/avatar-4.png'
const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className='sidebar-info'>
                <figure className='avatar-box'>
                    <img src={MyAvatarPng} alt="" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name">Vivek Sutar</h1>
                    <p className="title">Fullstack Developer</p>
                </div>
                <button className='info_more-btn'>
                    <span>Show Cntacts</span>
                    <GiClawSlashes />
                </button>
            </div>
            <div className="sidebar-info_more">
                <hr className='separator2' />
                <ul className="contact-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiMailbox />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">EMAIL</p>
                            <a href="mailto:viveksutar003@gmail.com" className='contact-link'>viveksutar003@gmail.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiMailbox />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">PHONE</p>
                            <a href="tel:+917709184142" className='contact-link'>+91 7709184142</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiMailbox />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">BIRTHDAY</p>
                            <time dateTime='1998-06-30' href="#" className='contact-link'>30 June, 1998</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiMailbox />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">LOCATION</p>
                            <a href="#" className='contact-link'>Mumbai</a>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
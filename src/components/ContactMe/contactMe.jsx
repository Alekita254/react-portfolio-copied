import React, { Component } from 'react';
import classes from './ContactMe.module.css'; // Assuming you'll create a new CSS module for this
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; // Icons for contact details

class ContactMe extends Component {
    render() {
        return (
            <div className={classes.contactBox} id='contact'>
                <span className={classes.head}>GET IN TOUCH</span>
                <section className={classes.contactContainer}>
                    <div className={classes.contactDetails}>
                        {/* Email */}
                        <div className={classes.contactItem}>
                            <div className={classes.contactIcon}>
                                <MdEmail />
                            </div>
                            <div className={classes.contactInfo}>
                                <h2>Email</h2>
                                <p>hello@charanstarion.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className={classes.contactItem}>
                            <div className={classes.contactIcon}>
                                <MdPhone />
                            </div>
                            <div className={classes.contactInfo}>
                                <h2>Phone</h2>
                                <p>+254725214756</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className={classes.contactItem}>
                            <div className={classes.contactIcon}>
                                <MdLocationOn />
                            </div>
                            <div className={classes.contactInfo}>
                                <h2>Location</h2>
                                <p>Nairobi, Ke,Kenya</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className={classes.contactForm}>
                        <div className={classes.formGroup}>
                            <input type='text' placeholder='Your Name' required />
                        </div>
                        <div className={classes.formGroup}>
                            <input type='email' placeholder='Your Email' required />
                        </div>
                        <div className={classes.formGroup}>
                            <textarea placeholder='Your Message' rows='5' required></textarea>
                        </div>
                        <button type='submit' className={classes.submitButton}>
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
        );
    }
}

export default ContactMe;
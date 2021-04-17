import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5">
            <div className="container">
                <div className="row">
                    <div className="section-header text-center mb-5">
                        <h3 className="text-green">Contact</h3>
                        <h1>Leave Your Query to Us</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-form-right-area">
                            <h5>GET A QUOTE</h5>
                            <h2>Request a <br />
                            free Quote<br />
                            Today
                        </h2>
                        </div>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="contact-from-area">
                            <form action="" className="">
                                <div className="contact-form">
                                    <input type="text" className="form-control" placeholder="Name *" />

                                    <input type="text" className="form-control" placeholder="Phone *" />

                                    <input type="text" className="form-control" placeholder="Email Address *" />

                                    <input type="text" className="form-control" placeholder="Subject *" />

                                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                                </div>
                                <div className="form-group text-center contact-form">
                                    <button type="button" className="btn text-white btn-brand"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
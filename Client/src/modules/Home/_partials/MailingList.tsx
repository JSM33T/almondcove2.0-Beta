import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function MailingList() {


    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5190/api/mail/add', { 
            "origin": "react test",
            "email": email 
        })
            .then(response => {
                toast.dark("success yay");
                console.log(response);

            })
            .catch(error => {
                console.error('There was an error!', error);
                toast.dark("nah something wrong bro");
            });
    };

    return (
        <>
            <section className="container mb-2 pt-5 mb-md-3 mb-xl-4 pb-2" data-bs-theme="dark">
                <div className="position-relative bg-dark rounded-5 overflow-hidden p-md-5 p-4">
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}></div>
                    <div className="position-relative p-xl-5 p-md-4 py-4 px-sm-3">
                        <h2 className="h1 pb-md-4 pb-3 text-center mt-n2">Join our Newsletter!</h2>
                        <p className="text-body text-center fs-sm mb-4">Subscribe to our mailing list to stay updated about new content!!</p>
                        <div className="row gy-md-5 gy-4 gx-xl-5">
                            <div className="col-lg-6 offset-lg-3 text-center">
                                <form className="subscription-form" onSubmit={handleSubmit}>
                                    <div className="input-group input-group-md rounded-pill">
                                        <input className="form-control" 
                                            type="email" 
                                            placeholder="Email address" 
                                            value={email}
                                            onChange={handleChange}
                                            required
                                          />
                                        <button className="btn btn-primary btn-md rounded-pill" type="submit">Subscribe</button>
                                    </div>
                                </form>
                                <div className="form-text mt-3 fs-sm">* Trust me, no spams</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
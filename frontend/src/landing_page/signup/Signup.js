import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function Signup() {
    // const navigate = useNavigate(); // ⬅️ Proper hook for navigation
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3002/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            });

            const result = await res.json();
            console.log(result);

            if (res.ok) {
                window.location.href = `http://localhost:3001/?name=${encodeURIComponent(formValues.name)}`;
            } else {
                alert(result.error || 'Signup failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className='mt-5 mb-5 pb-5 w-50 container border-black'>
            <form onSubmit={handleSignup} className='mt-5 vh-100'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required value={formValues.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" required value={formValues.email} onChange={handleChange} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required value={formValues.password} onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox" required />
                    <label className="form-check-label" htmlFor="checkbox">
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-outline-info fw-semibold mx-3 btn-sm" data-bs-toggle="modal" data-bs-target="#privacyModal">
                            View Privacy Statement
                        </button>
                    </label>

                </div>
                <button type="submit" className="btn btn-info text-black fw-semibold btn-sm">Submit</button>
                {/* Modal Open */}



                {/* <!-- Privacy Statement Modal --> */}
                <div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="privacyModalLabel">Privacy Statement</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p><strong>Last Updated:</strong> [Insert Date]</p>

                                <h6>1. Information We Collect 📊</h6>
                                <ul>
                                    <li>Personal Details: Name, email, contact number</li>
                                    <li>Financial Data: Linked bank or brokerage account (if applicable)</li>
                                    <li>Usage Data: Pages visited, features used</li>
                                    <li>Technical Info: IP address, device type, browser version</li>
                                </ul>

                                <h6>2. How We Use Your Information ⚙️</h6>
                                <ul>
                                    <li>To provide and improve trading services</li>
                                    <li>Customize user experience</li>
                                    <li>Respond to support requests</li>
                                    <li>Send notifications and alerts</li>
                                </ul>

                                <h6>3. Data Protection and Security 🔒</h6>
                                <ul>
                                    <li>SSL encryption</li>
                                    <li>Secure servers and firewalls</li>
                                    <li>Role-based access control</li>
                                </ul>

                                <h6>4. Sharing Your Information 🚫</h6>
                                <ul>
                                    <li>No selling or renting of personal data</li>
                                    <li>Shared only with essential third-party services</li>
                                    <li>Disclosed if required by law</li>
                                </ul>

                                <h6>5. Your Rights and Choices ✅</h6>
                                <ul>
                                    <li>Request data access</li>
                                    <li>Ask for corrections or deletions</li>
                                    <li>Opt-out of certain communications</li>
                                </ul>

                                <h6>6. Cookies and Tracking 🍪</h6>
                                <ul>
                                    <li>Cookies may be used to improve UX and analyze traffic</li>
                                    <li>Preferences can be managed via browser settings</li>
                                </ul>

                                <h6>7. Changes to This Policy 🔄</h6>
                                <p>We may update this statement periodically. Changes will be posted here.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn w-25 btn-outline-secondary fw-semibold" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Modal Close */}
            </form>
        </div>
    );
}

export default Signup;

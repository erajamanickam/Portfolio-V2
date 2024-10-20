import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { BsEnvelopeAt } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Contact = ({ data }) => {
    const [contactItems, setContactItems] = useState([]);

    useEffect(() => {
        if (data) {
            setContactItems(data.contact)
        }
    }, [data]);

    const form = useRef();
    const captchaRef = useRef(null)

    const [isRecaptchaVerified, setRecaptchaVerified] = useState(false);
    const [submissionError, setSubmissionError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        purpose: 'discussion',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        mobile: '',
        purpose: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Validate Name
        if (!formData.name.trim() || /[0-9!@#$%^&*()_+={};':"\\|,.<>?/]+/.test(formData.name)) {
            newErrors.name = 'Please enter a name';
            isValid = false;
        } else {
            newErrors.name = '';
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        } else {
            newErrors.email = '';
        }

        // Validate Mobile
        const mobileRegex = /^[0-9]+$/;
        if (!mobileRegex.test(formData.mobile.trim()) || formData.mobile.length !== 10) {
            newErrors.mobile = 'Please enter a valid mobile no';
            isValid = false;
        } else {
            newErrors.mobile = '';
        }

        // Validate Purpose
        if (!formData.purpose) {
            newErrors.purpose = 'Please choose a purpose.';
            isValid = false;
        } else {
            newErrors.purpose = '';
        }

        setErrors(newErrors);
        return isValid;
    };

    const getInputBorderColor = (inputName) => {
        // Use Tailwind CSS classes to set border color based on validation status
        if (errors[inputName]) {
            return 'border-red-600'; // Set the border color to red if there is an error
        } else {
            return 'border-[#ffffff26] focus:border-[#cc00ff]'; // Set the default border color
        }
    };

    const handleRecaptchaChange = (value) => {
        if (value) {
            setSubmissionError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if (validateForm()) {
                if (captchaRef.current && captchaRef.current.getValue()) {
                    console.log(validateForm(), captchaRef.current, captchaRef.current.getValue());
                    const token = captchaRef.current.getValue();
                    captchaRef.current.reset();

                    emailjs.sendForm('service_w4yhkhe', 'template_qwwdhwb', e.target, 'user_e6CZf4K6kU9TCU80qBwFO')
                        .then((result) => {
                            alert('Thank You, I am shortly contact with you');
                            window.location.reload();
                        }, (error) => {
                            alert('Oops!. Try again later');
                        });

                    // console.log('Form submitted:', formData);
                } else {
                    setSubmissionError('Please verify reCAPTCHA');
                }
            } else {
                setSubmissionError('Please verify reCAPTCHA');
            }
        } catch (error) {
            // console.error('Form submission error:', error.message);
            setSubmissionError('An error occurred during form submission. Please try again.');
        }
    };

    return (
        <section className='py-12 z-20 relative' id='contact'>
            <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-4 text-center animate__animated animate__jackInTheBox">{contactItems?.section_data?.title}</h2>
                <p className="text-lg text-gray-300 mb-4 text-center">{contactItems?.section_data?.description}</p>
                <ul className='mb-4'>
                    <li>
                        <a href={`mailto:${contactItems?.section_data?.email}`} className='text-[#61DAFB] hover:text-white mr-2 flex items-center justify-center mb-1'><BsEnvelopeAt size="20" color="#61DAFB" className='mr-2' /> {contactItems?.section_data?.email} </a>
                    </li>
                    <li>
                        <a href={`tel:${contactItems?.section_data?.mobile}`} className='text-[#61DAFB] hover:text-white flex items-center justify-center'><FaMobileAlt size="20" color="#61DAFB" className='mr-0.5' /> {contactItems?.section_data?.mobile}</a>
                    </li>
                </ul>

                <div className='flex justify-center mb-8'>
                    <a href={contactItems?.section_data?.social.linkedin} target="_blank" className='mr-2 text-[#0A66C2] hover:text-[#6fb7ffdc]' rel="noopener noreferrer">
                        <FaLinkedin size="30" />
                    </a>
                    <a href={contactItems?.section_data?.social.youtube} target="_blank" className='mr-2 text-[#CD201F] hover:text-[#dd5b5b]' rel="noopener noreferrer">
                        <FaYoutube size="30" />
                    </a>
                    <a href={contactItems?.section_data?.social.github} target="_blank" className='mr-2 text-[#fafbfc] hover:text-[#fafbfcbe]' rel="noopener noreferrer">
                        <FaGithub size="26" />
                    </a>
                </div>
                <form className="max-w-md mx-auto" ref={form} onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className={`w-full border-2 border-solid ${getInputBorderColor('name')} p-2 rounded-md bg-transparent outline-0 text-white`}
                                autoComplete="off"
                            />
                            {errors.name && <p className='text-red-600 text-xs'>{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className={`w-full border-2 border-solid ${getInputBorderColor('email')} p-2 rounded-md bg-transparent outline-0 text-white`}
                                autoComplete="off"
                            />
                            {errors.email && <p className='text-red-600 text-xs'>{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                        <div className="mb-4">
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile"
                                className={`w-full border-2 border-solid ${getInputBorderColor('mobile')} p-2 rounded-md bg-transparent outline-0 text-white`}
                                autoComplete="off"
                            />
                            {errors.mobile && <p className='text-red-600 text-xs'>{errors.mobile}</p>}
                        </div>

                        <div className="mb-4 flex items-center">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="discussionOption"
                                    name="purpose"
                                    value="discussion"
                                    checked={formData.purpose === 'discussion'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="discussionOption"
                                    className="cursor-pointer ml-2 text-slate-300"
                                >
                                    Discussion
                                </label>
                                <input
                                    type="radio"
                                    id="hireOption"
                                    name="purpose"
                                    value="hire"
                                    checked={formData.purpose === 'hire'}
                                    onChange={handleChange}
                                    className="ml-4"
                                />
                                <label htmlFor="hireOption" className="cursor-pointer ml-2 text-slate-300">
                                    Hire
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="mb-4">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows="4"
                            className="w-full border-2 border-solid border-[#ffffff26] focus:border-[#cc00ff] p-2 rounded-md bg-transparent outline-0 text-white"
                        ></textarea>
                    </div>

                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        ref={captchaRef}
                        onChange={handleRecaptchaChange}
                    />
                    {submissionError && <div className="text-red-600 text-xs mb-2">{submissionError}</div>}

                    <button type='submit' className="mt-2 py-0 px-7 h-[2.6em] transition-all duration-150 ease-in-out shadow-lg focus:outline-none font-size-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-gradient-to-r text-white from-[#89E5FF] to-[#5468FF] shadow-indigo-500/50 rounded-full hover:transform hover:-translate-y-1 hover:shadow-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
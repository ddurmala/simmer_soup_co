import { useState } from 'react'
import axios from 'axios'

const initialFormData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    soups: {},
    message: '',
    access_key: 'cc106326-f1b1-45ac-a95d-1d9142d536d7'
}

const soupOptions = [
    "Bouillon Cubes",
    "Chicken Orzo",
    "Loaded Potato",
    "Butternut Squash"
];

function Order({ soups = soupOptions }) {
    const [formData, setFormData] = useState(initialFormData)

    const [alertMessage, setAlertMessage] = useState({
        title: 'Success!',
        details: 'You will receive an email shortly from Simmer Soup Co. with your total and payment and pickup information'
    })

    const [emailValid, setEmailValid] = useState(true)

    const [phoneValid, setPhoneValid] = useState(true)

    const [formSubmitted, setFormSubmitted] = useState(false)


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailValid) {
            setAlertMessage('Please enter a valid email address')
            return
        }

        if (!phoneValid) {
            setAlertMessage('Please enter a valid phone number')
            return
        }

        const formattedSoups = Object.entries(formData.soups)
            .filter(([_, quantity]) => quantity > 0)
            .map(([name, quantity]) => `${name}: ${quantity}`)
            .join(', ');

        const submissionData = {
            ...formData,
            soups: formattedSoups
        };

        const url = 'https://api.web3forms.com/submit'

        await axios.post(url, submissionData)

        setFormSubmitted(true);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {

            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

            setEmailValid(emailPattern.test(value))
        }

        if (name === 'phoneNumber') {
            let formattedValue = value.replace(/\D/g, '');

            if (formattedValue.length === 10) {
                formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(3, 6)}-${formattedValue.slice(6)}`;
                setPhoneValid(true);
            } else {
                setPhoneValid(false);
            }

            setFormData({
                ...formData,
                [name]: formattedValue
            });
            return;
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSoupChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            soups: {
                ...prevData.soups,
                [name]: parseInt(value)
            }
        }))
    }

    return (
        <>
            {formSubmitted ? (
                <div className='alert-message text-center'>
                    <p className="alert-title">{alertMessage.title}</p>
                    <p className="alert-details">{alertMessage.details}</p>
                </div>

            ) : (
                <form onSubmit={handleSubmit} className="contact-form d-flex flex-column mt-3">

                    <h2 className="contact-header text-center mt-5">Order Form</h2>

                    <input onChange={handleInputChange} value={formData.fullName} name="fullName" type="text" placeholder="your full name" required className='form-input' />

                    <input onChange={handleInputChange} value={formData.email} name="email" type="email" placeholder="your email address" required className='form-input' />

                    <input onChange={handleInputChange} value={formData.phoneNumber} name="phoneNumber" type="text" placeholder="your phone number" required className='form-input' />

                    {/* Soup Choices */}

                    <fieldset className="soup-options my-4">
                        <legend>Select Soups (You can choose multiple):
                            <br></br>
                            <p className='note mb-4'>All soups come in quart size</p>
                        </legend>

                        {soups.map((soup) => (
                            <label key={soup} className='choice mb-2'>
                                <select name={soup} value={formData.soups[soup] || 0} onChange={handleSoupChange} className='dropdown'>
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </select>
                                {soup}
                            </label>
                        ))}

                    </fieldset>

                    <textarea onChange={handleInputChange} value={formData.message} name="message" rows="5" cols="30" placeholder="enter your message (optional)" className='form-input'></textarea>

                    <div className="is-flex is-justify-content-center mt-4">
                        <button className='button is-light '>Send</button>
                    </div>
                </form>
            )}

        </>
    )
}

export default Order
import { useState } from 'react'
import axios from 'axios'

const initialFormData = {
    fullName: '',
    email: '',
    soups: [],
    message: '',
    access_key: 'cc106326-f1b1-45ac-a95d-1d9142d536d7'
}

function Order() {
    const [formData, setFormData] = useState(initialFormData)

    const [alertMessage, setAlertMessage] = useState('')

    const [emailValid, setEmailValid] = useState(true)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailValid) {
            setAlertMessage('Please enter a valid email address')
            return
        }

        const url = 'https://api.web3forms.com/submit'

        const res = await axios.post(url, formData)

        setAlertMessage('Order received! You will receive an email shortly from Simmer Soup Co. with you total and payment/pickup information')

        setFormData({
            ...initialFormData
        })

        setTimeout(() => {
            setAlertMessage('')
        }, 3500)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {

            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

            setEmailValid(emailPattern.test(value))
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSoupChange = (event) => {
        const { value, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            soups: checked
                ? [...prevData.soups, value]
                : prevData.soups.filter((soup) => soup !== value)
        }))
    }

    return (
        <>
            <h2 className="contact-header text-center mt-5">Order Form</h2>

            {alertMessage && <p className='alert-message text-center'>{alertMessage}</p>}

            <form onSubmit={handleSubmit} className="contact-form d-flex flex-column mt-3">

                <input onChange={handleInputChange} value={formData.fullName} name="fullName" type="text" placeholder="your full name" required className='form-input' />

                <input onChange={handleInputChange} value={formData.email} name="email" type="email" placeholder="your email address" required className='form-input' />

                {/* Soup Choices */}

                <fieldset className="soup-options my-4">
                    <legend>Select Soups (You can choose multiple):</legend>
                    <label>
                        <input className='checkbox'
                            type="checkbox"
                            value="Bouillon Cubes"
                            checked={formData.soups.includes("Bouillon Cubes")}
                            onChange={handleSoupChange}
                        /> Low Sodium Bouillon Cubes
                    </label>
                    <label>
                        <input className='checkbox'
                            type="checkbox"
                            value="Chicken Orzo"
                            checked={formData.soups.includes("Chicken Orzo")}
                            onChange={handleSoupChange}
                        /> Chicken Orzo
                    </label>
                    <label>
                        <input className='checkbox'
                            type="checkbox"
                            value="Loaded Potato"
                            checked={formData.soups.includes("Loaded Potato")}
                            onChange={handleSoupChange}
                        /> Loaded Baked Potato
                    </label>
                    <label>
                        <input className='checkbox'
                            type="checkbox"
                            value="Butternut Squash"
                            checked={formData.soups.includes("Butternut Squash")}
                            onChange={handleSoupChange}
                        /> Roasted Butternut Squash
                    </label>

                </fieldset>

                <textarea onChange={handleInputChange} value={formData.message} name="message" rows="5" cols="30" placeholder="enter your message (optional)" className='form-input'></textarea>

                <button>Send</button>
            </form>

        </>
    )
}

export default Order
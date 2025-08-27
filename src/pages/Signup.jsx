import React, { useState } from 'react'
import { NewValidation } from './NewValidation';

const initialData = {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
}
const Signup = () => {
    const [formdata, setFormdata] = useState(initialData);
    const [errors, setErrors] = useState(initialData);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validation form logics
        const validationFormData = NewValidation(formdata);
        setErrors(validationFormData);

        if (Object.keys(validationFormData).length === 0) {
            console.log("Form submited successfully✅", formdata);
            setFormdata(initialData);
        } else {
            console.log("form submission failed❌", validationFormData)
        }
    }
    return (
        <section className='flex justify-center items-center w-full my-50'>
            <form onSubmit={handleSubmit} className="flex justify-center flex-col w-[400px] bg-white border-2 border-gray-300 p-4">
                <div className="flex flex-col gap-4 mb-4">
                    <input
                        type="text"
                        placeholder='Enter your name'
                        className='bg-[#E8F0FE] px-4 py-2 outline-none border-none'
                        name='username'
                        value={formdata.username}
                        onChange={handlechange}
                    />
                    {errors.username && <p className='text-red-400 font-semibold text-lg'>{errors.username}</p>}
                    <input
                        type="email"
                        placeholder='Enter your email'
                        className='bg-[#E8F0FE] px-4 py-2 outline-none border-none'
                        name='email'
                        value={formdata.email}
                        onChange={handlechange}
                    />
                    {errors.name && <p className='text-red-400 font-semibold text-lg'>{errors.name}</p>}
                    <input
                        type="number"
                        placeholder='Enter your phone number'
                        className='bg-[#E8F0FE] px-4 py-2 outline-none border-none'
                        name='phoneNumber'
                        value={formdata.phoneNumber}
                        onChange={handlechange}
                    />
                    {errors.name && <p className='text-red-400 font-semibold text-lg'>{errors.name}</p>}
                    <input
                        type="password"
                        placeholder='Enter your password'
                        className='bg-[#E8F0FE] px-4 py-2 outline-none border-none'
                        name='password'
                        value={formdata.password}
                        onChange={handlechange}
                    />
                    {errors.name && <p className='text-red-400 font-semibold text-lg'>{errors.name}</p>}
                    <input
                        type="password"
                        placeholder='Confirm your password'
                        className='bg-[#E8F0FE] px-4 py-2 outline-none border-none'
                        name='confirmPassword'
                        value={formdata.confirmPassword}
                        onChange={handlechange}
                    />
                    {errors.name && <p className='text-red-400 font-semibold text-lg'>{errors.name}</p>}
                </div>
                <button className="bg-red-500 rounded-md px-6 py-2 text-white">Submit</button>
            </form>
        </section>
    )
}

export default Signup

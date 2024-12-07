import React, { useState } from 'react'

const GetStarted = () => {

    const [step, setStep] = useState(0)

    const steps = [
        'Share your knowledge',
        'Build your course',
        'Publish your course'
    ];

    const nextStep = () => {
        setStep((v) => Math.min(v + 1, steps.length - 1))
    }

    const prevStep = () => {
        setStep((v) => Math.max(v - 1, 0))
    }

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <h2 className="text-2xl font-semibold">Share your knowledge</h2>
                        <p className="mt-4">Udemy courses are video-based experiences...</p>
                        <label className="block mt-4">
                            What kind of teaching have you done before?
                            <select className="block w-full mt-2 p-2 border border-gray-300 rounded">
                                <option
                                onClick={nextStep}
                                >In person, informally</option>
                                <option>In person, professionally</option>
                                <option>Online</option>
                                <option
                                onClick={nextStep}
                                >Other</option>
                            </select>
                        </label>
                    </div>
                )
            case 1:
                return (
                    <div>
                        <h2 className="text-2xl font-semibold">Share your knowledge</h2>
                        <p className="mt-4">Udemy courses are video-based experiences...</p>
                        <label className="block mt-4">
                            What kind of teaching have you done before?
                            <select className="block w-full mt-2 p-2 border border-gray-300 rounded">
                                <option
                                onClick={nextStep}
                                >In person, informally</option>
                                <option>In person, professionally</option>
                                <option>Online</option>
                                <option
                                onClick={nextStep}
                                >Other</option>
                            </select>
                        </label>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <h2 className="text-2xl font-semibold">Share your knowledge</h2>
                        <p className="mt-4">Udemy courses are video-based experiences...</p>
                        <label className="block mt-4">
                            What kind of teaching have you done before?
                            <select className="block w-full mt-2 p-2 border border-gray-300 rounded">
                                <option
                                onClick={nextStep}
                                >In person, informally</option>
                                <option>In person, professionally</option>
                                <option>Online</option>
                                <option
                                onClick={nextStep}
                                >Other</option>
                            </select>
                        </label>
                    </div>
                )
        }
    }

    return (

        <div className='max-container mt-4'>
            <h1 className='text-3xl font-semibold text-heading '>Step {step + 1} of {steps.length}</h1>
            <div className='w-[50%] my-[10rem] rounded-lg shadow-2xl p-4 mx-auto'>
                {/* <p className='text-xl font-medium text-medium'>Question 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis id dicta dignissimos impedit, vero </p> */}
                <div className='my-3'>
                    {renderStepContent(step)}
                </div>

                <button
                    onClick={prevStep}
                    className='text-lg bg-blue-400 text-semibold text-white py-1 rounded-lg  px-6'>Prev</button>
                <button
                    onClick={nextStep}
                    className='text-lg  border-[1px] border-blue-400 text-semibold ml-5 text-blue-400 py-1 rounded-lg  px-6'>Next</button>
                <div
                    className="top-2 mt-4 bg-blue-500 h-2 relative right-0 rounded"
                    style={{ width: `${(step + 1) / steps.length * 100}%` }}
                >
                </div>
            </div>
        </div>

    )
}

export default GetStarted

import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the check icon
import feature from '../../assets/feature/feature-img.png';

const Featured = () => {
    return (
        <section className='py-10 '>
            <h1 className='text-4xl mb-5 font-bold'>Our Features</h1>
            <div className='lg:flex items-center'>
                <div>
                    <div className='mb-4'>
                        <h2 className='text-4xl font-semibold mb-5 text-left'>We Have Also Some Features That <br /> Provided by Paso</h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, delectus! Qui illo  <br /> harum   quibusdam non magnam necessitatibus. consectetur . Commodi.</p>
                    </div>
                    <div className='text-left font-semibold mt-4 space-y-1'>
                        <p><FaCheck className='inline mr-2 text-green-500' /> Freelancing Training Course</p>
                        <p><FaCheck className='inline mr-2 text-green-500' /> Technological Consultation</p>
                        <p><FaCheck className='inline mr-2 text-green-500' /> Monthly Paid Workspace</p>
                        <p><FaCheck className='inline mr-2 text-green-500' /> IT Learning Institute</p>
                        <p><FaCheck className='inline mr-2 text-green-500' /> Digital Marketing</p>
                    </div>
                    <div className='mt-6 text-left'>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
                            Let's Talk
                        </button>
                    </div>
                </div>
                <div>
                    <img src={feature} alt="Feature" />
                </div>
            </div>
        </section>
    );
};

export default Featured;

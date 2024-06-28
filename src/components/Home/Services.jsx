import React from 'react';
const services = [
    {
        icon: 'https://i.ibb.co/jk9G1Ng/s1.png',
        title: 'Visual Design',
        description: 'Crafting visually appealing and user-friendly designs to enhance user experience.'
    },
    {
        icon: 'https://i.ibb.co/422LSMX/s2.png',
        title: 'Development',
        description: 'Building robust and scalable applications tailored to meet your business needs.'
    },
    {
        icon: 'https://i.ibb.co/BndxY94/s3.png',
        title: 'QA Testing',
        description: 'Ensuring the highest quality of your products through comprehensive testing services.'
    },
    {
        icon: 'https://i.ibb.co/gwJgYXR/s4.png',
        title: 'IT Management',
        description: 'Managing and optimizing your IT infrastructure for better performance and reliability.'
    },
    {
        icon: 'https://i.ibb.co/JFfMRGX/s5.png',
        title: 'Cyber Security',
        description: 'Protecting your business from cyber threats with advanced security solutions.'
    },
    {
        icon: 'https://i.ibb.co/QQMnH3n/s6.png',
        title: 'Wireless Connectivity',
        description: 'Providing seamless and secure wireless connectivity solutions for your business.'
    }
];

const Services = () => {
    return (
        <section className="py-10 ">
            <h2 className='text-4xl mb-7 font-bold'>Our Services</h2>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="service-card bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="icon mb-4">
                                <img src={service.icon} alt={`Service ${index + 1} Icon`} className="mx-auto" />
                            </div>
                            <h2 className="service-title text-2xl font-semibold mb-2">{service.title}</h2>
                            <p className="description text-gray-600 mb-4">{service.description}</p>
                            <button className="service-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

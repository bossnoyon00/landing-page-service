import React from 'react';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <header className="py-5  border-b">
            <div className="container px-3 mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center gap-2 mb-4 sm:mb-0">
                    <img style={{ width: '75px' }} src={logo} alt="Logo" />
                    <h5 className="text-2xl">Exclusive Service</h5>
                </div>
                <div className="flex items-center gap-2 mb-4 sm:mb-0 text-center sm:text-left">
                    <h5 className="text-1xl">
                        <span className="font-semibold">Customer Support</span> <br /> +550 554 4554
                    </h5>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        className="btn bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition font-semibold"
                        href="https://www.teamviewer.com/apac/download/windows/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download TeamViewer
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
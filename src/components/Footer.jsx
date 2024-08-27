import logo from '../assets/logo.png'
function Footer() {
    return ( 
        <>
            <footer className="bg-dark text-primary py-10">
                <div className=" px-10 grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-8 sm:col-span-8">
                        <div className="flex">
                            <img src={logo} alt="logo"  />
                            <p className="text-primary text-3xl font-bold">OOV</p>
                        </div>
                            <p className="mt-5 w-96">Discover a cinematic universe like no other with Moov, your ultimate destination for movie magic.</p>
                        </div>
                    <div className="col-span-6 md:col-span-2 sm:col-span-2">
                        <ul className="space-y-2 ">
                            <li className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Product</li>
                            <li className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Movie</li>
                            <li className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Series</li>
                            <li className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">TV Show</li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-2 sm:col-span-2">
                        <ul className="space-y-2">
                            <li className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Information</li>
                            <li className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">FAQ</li>
                            <li className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Contact Us</li>
                            <li className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Help Center</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-24 "><hr className="border-[#2A2A2A]"/></div>
                <div className=" sm:flex-col px-10 flex justify-between items-center mt-5 md:flex-row flex-wrap   ">
                    <div className="text-secondary">© 2024 Moov. Design by <a className="text-red-600" href="https://www.instagram.com/swipecursor_/">swipecursor_</a> and develop by <a className="text-red-600" href="https://github.com/Qosay-Abu-Alrob">Qosay Abu Alrob</a></div>
                    <div>
                    <ul className=" flex justify-between ">
                            <li className="mr-5 text-secondary cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 ">Terms of Service</li>
                            <li className="mr-5 text-secondary cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Policy service</li>
                            <li className="mr-5 text-secondary cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Cookie Policy</li>
                            <li className="mr-5 text-secondary cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">Partners</li>
                    </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
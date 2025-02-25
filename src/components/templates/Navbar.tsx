const Navbar = () => {
    return (
        <div className=" w-full">
            <nav className="bg-white  border-gray-200 py-2">
                <div className="flex items-center justify-between px-16 py-4">
                    <div className="flex items-center ">
                        <a
                            href="#"
                            className="text-2xl font-extrabold text-[#204C5B] mr-5"
                        >
                            LOGO
                        </a>
                        <div className="w-[1px] h-6 bg-gray-300" />
                        <div className="flex ml-5 gap-5">
                            <a
                                href="#"
                                className="text-[#204C5B] text-lg font-medium hover:underline"
                            >
                                Projects
                            </a>
                            <a
                                href="#"
                                className="text-[#204C5B] text-lg font-medium hover:underline"
                            >
                                Products
                            </a>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button className="px-6 py-3 w-[142px] border-2 border-[#204C5B] text-[#204C5B] font-medium rounded-full">
                            Log in
                        </button>
                        <button className="px-6 py-3 bg-[#204C5B] text-white font-medium rounded-full">
                            Create account
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

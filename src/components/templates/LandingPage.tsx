import Input from '../atoms/Input/Input';
import Globe from "../../assets/Globe.png"

const LandingPage = () => {
    return (
        <div className=" flex-1 flex flex-col justify-around items-center">
            <div className='flex flex-col items-center justify-center'>
                <h1 className="hidden md:inline font-medium text-3xl  text-primaryBlue">
                    Search,Connect and Build
                </h1>
                <h1 className='md:hidden text-center font-medium text-xl text-primaryBlue'> Search,Connect and Build</h1>
                <h1 className="hidden md:block  font-medium text-center text-5xl flex-auto ">
                    Discover Global Construction Opportunities
                </h1>
                <h1 className="md:hidden font-medium text-xl text-center flex-auto ">
                    Discover Global Construction Opportunities
                </h1>
            </div>

            <div className='w-full flex   justify-center'>
                <Input placeholder='Search for new construction projects in you area' />
            </div>
            <div>
                <img className='' src={Globe}/>
            </div>
        </div>
    );
};

export default LandingPage;

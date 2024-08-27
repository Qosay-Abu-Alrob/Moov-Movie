import HomePageContent from "./HomePageContent";
import NavBar from "./NavBar";
import backgroundImage from '../assets/background.png'
function HomePage() {
    const background = {
        backgroundImage: `url(${backgroundImage})`,
    };
return (
    <>
            <div className=" bg-cover   sm:bg-cover md:bg-cover lg:bg-cover bg-center bg-no-repeat h-[100vh] w-full " style={background}>
                <NavBar/>
                <div className="mt-36">
                    <HomePageContent />
                </div>
            </div>
        
    </>
);
}

export default HomePage;

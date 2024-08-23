import HomePageContent from "./HomePageContent";
import NavBar from "./NavBar";
function HomePage() {
return (
    <>
        <div className="bg-[url('src/assets/background.png')] bg-cover  sm:bg-cover md:bg-cover lg:bg-cover bg-center bg-no-repeat h-[100vh] w-full">
            <NavBar/>
            <div className="mt-36">
                <HomePageContent />
            </div>
        </div>
    </>
);
}

export default HomePage;

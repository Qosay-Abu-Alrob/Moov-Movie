import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faArrowRight} from '@fortawesome/free-solid-svg-icons';
function HomePageContent() {
    return ( 
        <>
            <div className="px-10">
                <h1 className="text-lg pb-2 md:font-bold md:text-5xl text-primary md:pb-5">Monsters, INC</h1>
                <p className="text-sm pb-3 w-[22rem] md:w-[32rem] md:text-xl text-primary md:pb-8">
                    Animated film that explores the world of Monstropolis,
                    where monsters generate their citys power by scaring
                    children at night.
                </p>
                <div className="relative z-10">
                    <button className="text-dark bg-white border rounded-full py-1 px-1 text-[0.7rem] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg md:py-2 md:px-4 md:text-base">
                        Watch Now<FontAwesomeIcon className='ml-2 md:ml-3' icon={faPlay} />
                    </button>
                    <button className="text-primary bg-transparent bg-[#2C2E30] border rounded-full py-1 px-1 text-[0.7rem] ml-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg md:py-2 md:px-4 md:ml-4 md:text-base">
                        Details<FontAwesomeIcon className='ml-2 md:ml-3' icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default HomePageContent;
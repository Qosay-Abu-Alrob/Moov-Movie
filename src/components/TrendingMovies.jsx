import MovieCard from "./MovieCard";
function TrendingMovies() {
    return ( 
        <>
            <div className="px-10">   
                <div>
                    <div className="mt-[-10rem] ">
                        <h2 className="text-primary text-2xl mb-5 ">Trending Movies</h2>
                        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:ml-36 md:gap-5 lg:ml-0 lg:grid-cols-6 gap-3 ">
                            <MovieCard start={0} limit={6} />
                        </div>
                    </div>
                </div>
                <div className="pt-10">
                        <h2 className="text-primary text-2xl mb-5 ">Continue Watching</h2>
                        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:ml-36 md:gap-5 lg:ml-0 lg:grid-cols-6 gap-3 ">
                            <MovieCard start={7} limit={10}/>
                        </div>
                    </div>
                <div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrendingMovies;
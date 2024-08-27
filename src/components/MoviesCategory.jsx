import PropTypes from 'prop-types';

function MoviesCategory({ movies }) {
return (
    <div>
    {movies.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:ml-36 md:gap-5 lg:ml-0 lg:grid-cols-6 gap-3 mt-10">
        {movies.map((movie) => (
            
                <img
                key={movie.id}
                className="border rounded-lg h-[340px] w-[210px] transition-transform duration-300 transform hover:scale-105"
                src={movie.image}
                alt={movie.title}
                />
        ))}
        
    </div>
    ) : (
        <p>No movies found for this category.</p>
    )}
    <div className="mt-24 "><hr className="border-[#2A2A2A]"/></div>
    </div>
    
);
}

// Adding prop types validation
MoviesCategory.propTypes = {
movies: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    })
).isRequired,
};

export default MoviesCategory;
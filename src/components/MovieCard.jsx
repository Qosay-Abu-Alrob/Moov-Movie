import movies from './MoviesList';
import PropTypes from 'prop-types'
function MovieCard({start,limit,}) {
    const moviesToShow = limit ? movies.slice(start, limit) : movies;
return (
    <>
        {moviesToShow.map((movie) => (
        <img
        key={movie.id}
        className="border rounded-lg h-[340px] w-[210px] transition-transform duration-300 transform hover:scale-105"
        src={movie.image}
        alt={movie.title}
        />
    ))}
    </>
);
}
MovieCard.propTypes = {
    limit: PropTypes.number,
    start: PropTypes.number,
};
export default MovieCard;

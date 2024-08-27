import PropTypes from 'prop-types';

function CategoryFilter({ selectedCategory, onCategoryChange }) {
const categories = ['All', 'Action', 'Romance', 'Kids', 'Comedy'];

return (
    <div className="pt-10 flex flex-wrap justify-center gap-4">
    {categories.map((category) => (
        <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className="bg-[#262626] text-primary px-3 py-2 border-none rounded-full mr-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        style={{
            backgroundColor: selectedCategory === category ? 'white' : '',
            color: selectedCategory === category ? 'black' : '',
        }}
        >
        {category}
        </button>
    ))}
    </div>
);
}

CategoryFilter.propTypes = {
selectedCategory: PropTypes.string.isRequired,
onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
import { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import MoviesCategory from './MoviesCategory';
import movies from '../components/MoviesList'

function CategoryList() {
const [selectedCategory, setSelectedCategory] = useState('All');

const handleCategoryChange = (category) => {
    setSelectedCategory(category);
};

const filteredMovies = selectedCategory === 'All' 
    ? movies 
    : movies.filter(movie => movie.category === selectedCategory);

return (
    <aside>
    <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
    />
    <MoviesCategory movies={filteredMovies} />
    </aside>
);
}

export default CategoryList;
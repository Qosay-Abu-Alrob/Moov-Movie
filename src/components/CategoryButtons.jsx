const categories = ['All Popular', 'Action', 'Romance', 'Kids', 'Comedy'];

function CategoryButtons() {
return (
    <div className="pt-10 flex flex-wrap justify-center gap-4">
    {categories.map((category) => (
        <button
            key={category} 
            className="bg-[#262626] text-primary px-3 py-2 border-none rounded-full mr-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            onClick={() => console.log(`Selected category: ${category}`)}
        >
        {category}
        </button>
    ))}
    </div>
);
}

export default CategoryButtons;
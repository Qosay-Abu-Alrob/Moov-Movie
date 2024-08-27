import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import TrendingMovies from "./components/TrendingMovies";
function App() {
  

  return (
    <div className="App">
      <HomePage/>
      <TrendingMovies/>
      <CategoryList/>
      <Footer/>
    </div>
  );
}


export default App;

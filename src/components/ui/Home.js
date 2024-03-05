import Banner from "./Banner";
import Choose from "./Choose";
import CoffeeMenu from "./CoffeeMenu";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Opening from "./Opening";
import Recipes from "./Recipes";
import Showcase from "./Showcase";

const Home = () => {
    return (
        <>
           <Navbar/>
           <Banner/>
           <Opening/>
           <Choose/>
           <CoffeeMenu/>
           <Recipes/>
           <Showcase/>
           <Footer/>
        </>
    );
};

export default Home;
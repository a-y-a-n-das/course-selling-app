import CoursesCardList from "./CoursesCardList";
import Header from "./Header";
import Hero from "./Hero";

function Homepage() {
    return (
        <div className="bg-white">
        <Header/>
        <Hero></Hero>
        <CoursesCardList/>
        </div>
    );
    }
export default Homepage;
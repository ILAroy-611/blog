import Banner from "../components/Banner"
import FeedNavBar from "../components/FeedNavBar"


function Homepage(){
    return(
        <div className="home-page">
            <Banner />
            <FeedNavBar />
            <div className="feed-section">
                
            </div>
        </div>
    )
}

export default Homepage
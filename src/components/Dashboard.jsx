
import Header from "./Header"
import NavigatedSection from "./NavigatedSection"
import "../css/Header.css"
import Destination from "./Destination"



const Dashboard = function(){
    return<>

    <div className = 'main-dashboard'>
            
        <Header/>

        <NavigatedSection/>
        <Destination />

        </div>
    </>
}


export default Dashboard
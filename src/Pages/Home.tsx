import Communities from "../components/Communities";
import ContainerBuild from "../components/ContainerBuild";
import ContainerReadBuild from "../components/ContainerReadBuild";
import ContainerYourUser from "../components/ContainerYourUser";
import FlowingConversations from "../components/FlowingConversations";
import Footer from "../components/Footer";
import Growtogether from "../components/GrowTogether";
import NavBar from "../components/navbar";

const Home = () =>{
    return(
        <>  
            <NavBar/>
            <div className="flex justify-around flex-col gap-9">
                <ContainerBuild/>
                <Communities/>
                <Growtogether/>
                <FlowingConversations/>
                <ContainerYourUser/>
                <ContainerReadBuild/>
                <Footer/>
            </div>
        </>
    )
}


export default Home;
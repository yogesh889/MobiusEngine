import About from "./About";
import Clients from "./Clients";
import ContactUs from "./ContactUs";
import ResumeBuildPlans from "./ResumeBuildPlans";
import ServicePlans from "./ServicePlans";
import WorkPlans from "./WorkPlans";

const Body = () =>{
    return(
        <div>
            <WorkPlans />
            <About />
            <Clients />

            <ServicePlans />
            <ResumeBuildPlans />
            <ContactUs />
        </div>
    )
}

export default Body;
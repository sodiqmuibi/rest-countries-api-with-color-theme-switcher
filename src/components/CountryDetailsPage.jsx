import CountryDetails from "./CountryDetails";
import Navbar from "./Navbar";

const CountryDetailsPage = (props) => (
    <div className="body">
        <Navbar clicked = {props.click}/>
        <CountryDetails />
    </div>
)

export default CountryDetailsPage
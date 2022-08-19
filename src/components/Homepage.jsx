import Navbar from "./Navbar"
import Countries from "./Countries"


const Homepage = (props) => {
    return (
        <div className='body'>
            <Navbar clicked = {props.click}/>
            <Countries />
        </div>
    )
}
export default Homepage


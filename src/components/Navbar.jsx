import {BulbOutlined} from '@ant-design/icons'
const Navbar = (props) => (
    <div className="navCon">
        <div className="nav">
            Where in the world?
        </div>
        <div className="navNav" onClick={props.clicked}>
            <BulbOutlined /> {props.darkTheme ? 'Dark Mode' : 'Light Mode'}
        </div>
    </div>
)

export default Navbar
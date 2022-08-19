import {BulbOutlined} from '@ant-design/icons'
const Navbar = (props) => (
    <div className="navCon">
        <div className="nav">
            Where in the world?
        </div>
        <div className="navNav" onClick={props.clicked}>
            <BulbOutlined /> Dark Mode
        </div>
    </div>
)

export default Navbar
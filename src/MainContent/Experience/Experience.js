import UD from './img/University of Delaware.png'

import {Link} from "react-router-dom";
import './BoxWithImage.css'; // Import your CSS file

function Experience () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Experience</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to={"phd-ud"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={UD} style={{ width: '80%' }} alt="UD"/>
                                </div>
                                <div className="card-title fw-bold">Ph.D. in Mechanical Engineering</div>
                                <div className="card-subtext fw-bold">2018-Present</div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Experience;
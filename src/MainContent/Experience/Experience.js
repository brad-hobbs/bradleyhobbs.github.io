import UD from './img/HORC.png'
import ASU from './img/ASU.jpg'
import SKA from './img/SKA.png'
import ATS from './img/ATS.png'
import RMRG from './img/RMRG.png'

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
                                    <img className="card-image" src={UD} style={{ width: '95%' }} alt="UD"/>
                                </div>
                                <div className="card-title fw-bold">Graduate Researcher</div>
                                <div className="card-subtext fw-bold">2019-2024</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"phd-asu"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={ASU} style={{ width: '70%' }} alt="ASU"/>
                                </div>
                                <div className="card-title fw-bold">Graduate Researcher</div>
                                <div className="card-subtext fw-bold">2018-2019</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"ska"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={SKA} style={{ width: '80%' }} alt="SKA"/>
                                </div>
                                <div className="card-title fw-bold">Contract R&D Engineer</div>
                                <div className="card-subtext fw-bold">2018</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"ats"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={ATS} style={{ width: '70%' }} alt="ATS"/>
                                </div>
                                <div className="card-title fw-bold">R&D Engineer Intern</div>
                                <div className="card-subtext fw-bold">2016-2017</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"rmrg"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={RMRG} style={{ width: '80%' }} alt="RMRG"/>
                                </div>
                                <div className="card-title fw-bold">Undergraduate Researcher</div>
                                <div className="card-subtext fw-bold">2016-2018</div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Experience;
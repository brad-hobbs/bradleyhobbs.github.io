import HORC from './img/HORC.png'
import UD from './img/UD.png'
import ASU from './img/ASU.jpg'
import ATS from './img/ATS.png'
import RMRG from './img/RMRG.png'
import MTSU from './img/MTSU.jpg'

import {Link} from "react-router-dom";
import './BoxWithImage.css'; // Import your CSS file

function Experience () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Experience</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to={"phd-horc"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={HORC} style={{ width: '95%' }} alt="HORC"/>
                                </div>
                                <div className="card-title fw-bold">Mechanical Engineer (Contract)</div>
                                <div className="card-subtext fw-bold">2024-2025</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"phd-ud"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={UD} style={{ width: '63%' }} alt="UD"/>
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

                    <Link to={"RMRG"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={RMRG} style={{ width: '80%' }} alt="RMRG"/>
                                </div>
                                <div className="card-title fw-bold">Mechanical Engineer (Contract)</div>
                                <div className="card-subtext fw-bold">2018</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"ats"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={ATS} style={{ width: '55%' }} alt="ATS"/>
                                </div>
                                <div className="card-title fw-bold">Mechanical Engineer (Intern)</div>
                                <div className="card-subtext fw-bold">2016-2017</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"mtsu"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={MTSU} style={{ width: '100%' }} alt="MTSU"/>
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
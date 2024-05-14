import personal_webpage from "./img/personal_webpage.png"
import {Link} from "react-router-dom";
import './BoxWithImage_projects.css'; // Import your CSS file

function Projects () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Projects</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="personal-webpage" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container">
                                    <img className="card-image-projects" src={personal_webpage} id='personal-webpage' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Personal Webpage</div>
                                <div className="card-subtext-projects fw-bold">2024-Present</div>
                            </div>
                        </div>

                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Projects;
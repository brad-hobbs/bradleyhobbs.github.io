import './Home.css'
import WillieImage from './Hobbs.jpg'

function Home () {
    return (
        <div>
            <div className="d-flex justify-content-center mx-5">
                <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center"
                     style={{maxWidth: '1536px'}}>
                    {/* Image */}
                    <img src={WillieImage} alt="Willie img" className="main-image m-3"></img>
                    {/* Details */}
                    <div className="d-flex flex-column justify-content-center m-3">
                        <h1 className="fw-bold">Bradley W Hobbs</h1>
                        <span> I am a fifth year Ph.D. Candidate in Mechanical Engineering at the University of Delaware.
                            My expected graduation date is in July of 2024 and I am excited to explore job opportunities in industry or research centers. </span>
                        <br/>
                        <span> Currently, I am working as a research associate at the Human-Oriented Robotics and Control Lab
                            <a href="https://sites.udel.edu/horclab/" target="_blank" rel="noopener noreferrer"
                               style={{marginRight: '0px'}}> (HORC Lab)</a>
                            , where my main research focuses on the effects of <strong>ground stiffness changes and visual feedback </strong>on ground reaction forces during human gait, with applications to robot-assisted lower-limb stroke rehabilitation.
                        </span>
                        <br/>
                        <span> This website is under construction as of May 14, 2024. Feel free to check out any of the links below, while more content is being added.
                        </span>
                        <div className="row">
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Research Interests</h3>
                                <ul className="ul-interests mb-0">
                                    <li>Medical Robotics</li>
                                    <li>Mechanism Design</li>
                                    <li>Gait Biomechanics</li>
                                    <li>Visual Feedback</li>
                                    <li>Legged Locomotion</li>
                                    <li>Kinematics and Dynamics</li>
                                </ul>
                            </div>
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Education</h3>
                                <ul className="ul-edu fa-ul mb-2">
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                Ph.D., Mechanical Engineering, 2024 (expected)
                                            </p>
                                            <p className="institution" style={{fontWeight: 300, marginBottom: '2px'}}>
                                                University of Delaware
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                B.S., Mechatronics Engineering, 2018
                                            </p>
                                            <p className="institution" style={{fontWeight: 300, marginBottom: '2px'}}>
                                                Middle Tennessee State University
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
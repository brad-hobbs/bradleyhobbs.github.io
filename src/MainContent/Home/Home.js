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
                        <span> I am a recent graduate with a PhD in Mechanical Engineering from University of Delaware.
                            I am seeking a role as a Senior Mechanical Engineer in R&D with industries of medical devices, humanoids, and automotive. </span>
                        <br/>
                        <span> Currently, I am working as a Postdoctoral Researcher at the Human-Oriented Robotics and Control Lab
                            <a href="https://sites.udel.edu/horclab/" target="_blank" rel="noopener noreferrer"
                               style={{marginRight: '0px'}}> (HORC Lab)</a>
                            , where I am continuing my PhD work, which focused on developing a visual feedback approach to training gait kinetics with robotic systems over compliant terrain, with applications for lower-limb stroke rehabilitation.
                        </span>
                        <div className="row">
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Interests</h3>
                                <ul className="ul-interests mb-0">
                                    <li>Medical Devices</li>
                                    <li>Mechanism Design</li>
                                    <li>Drivetrain Design</li>
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
                                                Ph.D., Mechanical Engineering, Dec 2024
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
                                                B.S., Mechatronics Engineering, May 2018
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
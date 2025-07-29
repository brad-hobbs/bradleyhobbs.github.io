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
                        <h1 className="fw-bold">Bradley Hobbs, PhD</h1>
                        <span> Hi! My name is Brad and I am a recent graduate in Mechanical Engineering from University of Delaware </span>
                        <br/>
                        <span> This website is under construction as of July 2025, but will serve as a brief visual portfolio to supplement my CV, and to highlight my 10+ years of contributions both professionally and personally. Please use the buttons above to look around, and use the links below to connect with me. 
                        </span>
                        <br/>
                        <span> Most recently, I worked as a contract Mechanical Engineer at the Human-Oriented Robotics and Control Lab
                            <a href="https://sites.udel.edu/horclab/" target="_blank" rel="noopener noreferrer"
                               style={{marginRight: '0px'}}> (HORC Lab)</a>
                            , where I continued my PhD work, which focused on developing a visual feedback approach to training gait kinetics with robotic systems over compliant terrain.
                        </span>
                        <div className="row">
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Interests</h3>
                                <ul className="ul-interests mb-0">
                                    <li>Humanoid Robotics</li>
                                    <li>Mechanism Design</li>
                                    <li>Legged Locomotion</li>
                                    <li>Drivetrain Design</li>
                                    <li>Gait Mechanics</li>
                                    <li>Force Feedback</li>
                                </ul>
                            </div>
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Education</h3>
                                <ul className="ul-edu fa-ul mb-2">
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                Ph.D., Mechanical Engineering, 2024
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
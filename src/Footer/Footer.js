import './Footer.css'
import 'academicons/css/academicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center my-5"}>
                <a href="mailto:bradleywhobbs@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fas fa-envelope huge-icon" style={{ fontSize: '45px', marginInline: '3px' }} ></i>
                </a>
                <a href="https://github.com/brad-hobbs" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-github big-icon" style={{ fontSize: '45px', marginInline: '3px' }} ></i>
                </a>
                <a href="https://www.linkedin.com/in/bradley-hobbs" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-linkedin huge-icon" style={{ fontSize: '45px', marginInline: '3px' }} ></i>
                </a>
                <a href="https://scholar.google.com/citations?user=-bbHRD0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-google-scholar huge-icon" style={{ fontSize: '45px', marginInline: '3px' }} ></i>
                    {/*<img src={GoogleScholarLogo} alt="GoogleScholar logo" className="footer-logo mx-2 clickable"></img>*/}
                </a>
            </div>
        </div>
    )
}

export default Footer;
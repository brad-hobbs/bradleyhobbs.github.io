import Ultimate from "./img/brad_ultimate_indoor2023_standing_square.JPG"
import {Link} from "react-router-dom";

function Hobbies () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center">

                <h1 className="fw-bold">Hobbies</h1>

                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="ultimating" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Ultimate} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Ultimate</h4>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default Hobbies;
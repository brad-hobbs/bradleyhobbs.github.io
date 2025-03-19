import Rocks_tile_photo from "./img/newplaceholdertile.png"
import Ultimate_tile_photo from "./img/brad_ultimate_indoor2023_standing_square.JPG"
import Trans_tile_photo from "./img/trans_half.jpg"
import Chess_tile_photo from "./img/newplaceholdertile.png"
import Food_tile_photo from "./img/newplaceholdertile.png"
import Cars_tile_photo from "./img/newplaceholdertile.png"
import Lifting_tile_photo from "./img/newplaceholdertile.png"
import Ecu_tile_photo from "./img/newplaceholdertile.png"
import Tabletennis_tile_photo from "./img/broken_bat.JPG"
import Backpacking_tile_photo from "./img/newplaceholdertile.png"
import Climbing_tile_photo from "./img/newplaceholdertile.png"
import Cycling_tile_photo from "./img/newplaceholdertile.png"
import Boarding_tile_photo from "./img/newplaceholdertile.png"
import Baseball_tile_photo from "./img/newplaceholdertile.png"
import {Link} from "react-router-dom";

function Hobbies () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center">

                <h1 className="fw-bold">Hobbies</h1>

                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="ultimate-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Ultimate_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Disc Ultimate</h4>
                    </Link>

                    <Link to="trans-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Trans_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Transmission Rebuilding</h4>
                    </Link>

                </div>
            </div>
        </div>
    )
}
/*

                    <Link to="rocks-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Rocks_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Rocks</h4>
                    </Link>

                    <Link to="chess-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Chess_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Chess</h4>
                    </Link>

                    <Link to="Food-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Food_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">New</h4>
                    </Link>

                    <Link to="Cars-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Cars_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Cars</h4>
                    </Link>

                    <Link to="lifting-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Lifting_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Lifting</h4>
                    </Link>

                    <Link to="ecu-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Ecu_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Engine ECU Programming</h4>
                    </Link>

                    <Link to="tabletennis-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Tabletennis_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Table Tennis</h4>
                    </Link>

                    <Link to="backpacking-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Backpacking_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Backpacking</h4>
                    </Link>

                    <Link to="Climbing-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Climbing_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Rock Climbing</h4>
                    </Link>

                    <Link to="cycling-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Cycling_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Cycling</h4>
                    </Link>

                    <Link to="boarding-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Boarding_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Boarding</h4>
                    </Link>

                    <Link to="baseball-path" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Baseball_tile_photo} alt="Record img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Baseball</h4>
                    </Link>

*/
export default Hobbies;
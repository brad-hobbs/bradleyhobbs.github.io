import Chess_page_photo from "./img/newplaceholderpage.png"
function ChessFunction() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold mY-3">Chess</h2>

                <span className="text-body my-3">
                    I enjoy playing chess.

               </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={Chess_page_photo} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>

            </div>
        </div>
    )
}

export default ChessFunction;
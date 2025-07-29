import trans_page_photo from "./img/trans_exploded.jpg"
function TransFunction() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold mY-3">Transmission Rebuilding</h2>

                <span className="text-body my-3">
                    I enjoy rebuilding transmissions in my spare time, with my most current project being for my 2008 Subaru WRX.

               </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={trans_page_photo} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    
                </div>

            </div>
        </div>
    )
}

export default TransFunction;
import ultimate_page_photo from "./img/brad_ultimate_indoor2023_standing_square.JPG"
function UltimateFunction() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold mY-3">Ultimate</h2>

                <span className="text-body my-3">
                    I enjoy playing the sport of Ultimate (frisbee) in my spare time. 

               </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={ultimate_page_photo} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>

            </div>
        </div>
    )
}

export default UltimateFunction;
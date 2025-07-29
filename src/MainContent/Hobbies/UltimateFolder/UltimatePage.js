import ultimate_page_photo from "./img/brad_ultimate_indoor2023_standing_square.JPG"
function UltimateFunction() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold mY-3">Ultimate</h2>

                <span className="text-body my-3">
                    I enjoy playing the sport of Disc Ultimate (frisbee) in my spare time. I have served as a high school coach, league team captain, coordinator for Delaware leagues, and as a member of the Competitions Commission for Delaware and Philadelphia leagues.</span>
                <br/>

                <span>I also currently play for Delaware's Open club team, EZ.</span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={ultimate_page_photo} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>

            </div>
        </div>
    )
}

export default UltimateFunction;
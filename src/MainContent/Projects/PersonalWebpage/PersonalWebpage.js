import personal_webpage from "../img/personal_webpage.png";

function PersonalWebpage() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold m-3">Personal Webpage</h2>

                <img src={personal_webpage} alt="Logo 2" className="sd-block mx-auto section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%'}}/>

                <span className="text-body m-3">
                    <a href="https://bradleyhobbs.github.io/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://bradleyhobbs.github.io/</a>.
                </span>

                <span className="text-body m-3">
                    The github repository can be found
                    <a href="https://github.com/brad-hobbs/bradleyhobbs.github.io" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.
                </span>

            </div>
        </div>
    )
}

export default PersonalWebpage;
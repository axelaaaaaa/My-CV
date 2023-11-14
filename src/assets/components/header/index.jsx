const ResumeHeader = () => {
    const url = "../../src/assets/img/1.jpg"
    return (
            <header className="resume-header pt-4 pt-md-0">
    <div className="media flex-column flex-md-row">
    <a><img src={url} alt="image" width={220} height={220} /></a>
    <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
        <div className="primary-info">
        <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Alexandra J. A Tompunu</h1>
        <div className="title mb-3">Web Developer</div>
        <ul className="list-unstyled">
            <li className="mb-2"><a><i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3" />alexandratompunu@gmail.com</a></li>
            <li><a><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6" />+896-980-77516</a></li>
        </ul>
        </div>
    </div>
    </div>
    </header>
    )
}

export default ResumeHeader;
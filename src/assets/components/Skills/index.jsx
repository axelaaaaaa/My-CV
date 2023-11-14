const ResumeSkill = () => {
  return (
    <section className="resume-section skills-section mb-5">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills</h2>
    <div className="resume-section-content">
      <div className="resume-skill-item">
        <ul className="list-unstyled mb-4">
          <li className="mb-2">
            <div className="resume-skill-name">HTML</div>
            <div className="progress resume-progress">
              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '100%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </li>
          <li className="mb-2">
            <div className="resume-skill-name">CSS</div>
            <div className="progress resume-progress">
              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </li>
          <li className="mb-2">
            <div className="resume-skill-name">JavaScript</div>
            <div className="progress resume-progress">
              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '75%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </li>
          <li className="mb-2">
            <div className="resume-skill-name">PHP</div>
            <div className="progress resume-progress">
              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '80%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </li>
          <li className="mb-2">
            <div className="resume-skill-name">WORDPRESS/CMS</div>
            <div className="progress resume-progress">
              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </li>
        </ul>
      </div>
      <div className="resume-skill-item">
        <h4 className="resume-skills-cat font-weight-bold">Нobbies</h4>
        <ul className="list-inline">
          <li className="list-inline-item"><span className="badge badge-light">Swimming</span></li>
          <li className="list-inline-item"><span className="badge badge-light">Singing</span></li>
          <li className="list-inline-item"><span className="badge badge-light">Play Games</span></li>
          <li className="list-inline-item"><span className="badge badge-light">Programming</span></li>
          <li className="list-inline-item"><span className="badge badge-light">Editing</span></li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default ResumeSkill;
       
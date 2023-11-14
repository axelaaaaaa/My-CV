import ResumeHeaders from"./assets/components/header/index.jsx";
import ResumeSection from "./assets/components/AboutMe/index.jsx";
import ResumeInterested from "./assets/components/Interested/index.jsx";
import ResumeLanguage from "./assets/components/Languages/index.jsx";
import ResumeEducation from"./assets/components/Major/index.jsx";
import ResumeSkill from "./assets/components/Skills/index.jsx";
import ResumeExperience from "./assets/components/Sumary/index.jsx";
import "./assets/css/index.css"

const App = () => {
  return (
    <div>
  <title>Сurriculum Vitae</title>
  <link rel="shortcut icon" href="index.css" />
  <style dangerouslySetInnerHTML={{__html: "\n  " }} />
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" />
  <link id="theme-style" rel="stylesheet" href="index.css" />
  <base target="_blank" />
  <article className="resume-wrapper text-center position-relative">
    <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
      <div className="body">
      <ResumeHeaders/>
      <div className="resume-body p-5">
        <ResumeSection />
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">About me</h2>
          <div className="resume-section-content">
            <p className="mb-0">I am passionate about creating innovative and user-friendly web solutions. Armed with a strong foundation in web development and a keen eye for design, I have successfully contributed to various projects, showcasing my proficiency in languages such as HTML, CSS, and JavaScript. My commitment to staying abreast of the latest industry trends and technologies reflects my dedication to continuous learning and professional growth. I bring a combination of technical expertise, creativity, and a results-oriented mindset to every project. As a proactive and detail-oriented individual, I am eager to leverage my skills to contribute effectively to dynamic and forward-thinking teams.</p>
          </div>
        <div className="row">
          <div className="col-lg-9">
          <ResumeExperience />
          </div>
          <div className="col-lg-3">
          <ResumeSkill />
          <ResumeEducation />
          <ResumeLanguage />
          <ResumeInterested />
      </div>
      
          </div>
        </div>
      </div>
    </div>
  </article>  
</div>
  )
}

export default App




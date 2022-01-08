import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import resume from '../pdfs/Stacey-Breinich-Resume.pdf';

export const About = () => {
  
  return (
    <>
      <div className="container about__wrapper">
        <div className="row">
          
          <div className="col-md-12">
            <h1>About Me</h1>
            <h3>I'm Stacey Breinich and I'm a Web Developer</h3>
            <p>As a Web Developer the goal is to solve problems and create solutions using the best tool for the job. I'm currently working with React and WordPress and am always looking for new projects and challenges to solve and grow my skill set.</p>
            <p>Take a look at my work samples and drop a line. I look forward to hearing from you!</p>
            <div className="buttons">
              <a href={resume} className="btn btn-dark" download="Stacey-Breinich-Resume">Download My Resume</a>
              <a href="/projects" className="btn btn-dark">View My Projects</a><br />
            </div>
          </div>

          <div className="col-md-12">
            <hr className="progress"></hr>
          </div>

          <div className="col-md-12">
            <h2>My Skills</h2>
            <h6>Scroll right to see more of my skills!</h6>
          </div>

          <div className="skills__wrapper">
            <div className="col-sm-2">
              <div className="progress__bar">
                  <CircularProgressbar 
                    value={95}
                    text={`${95}%`}
                    styles={buildStyles({
                      textSize: '2rem',
                      pathTransitionDuration: 1,
                    })}
                  />
                <div className="about__text">HTML/CSS</div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="progress__bar">
                <CircularProgressbar 
                  value={95}
                  text={`${95}%`}
                  styles={buildStyles({
                    textSize: '2rem',
                    pathTransitionDuration: 1,
                  })}
                />
                <div className="about__text">JavaScript</div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="progress__bar">
                <CircularProgressbar 
                  value={95}
                  text={`${95}%`}
                  styles={buildStyles({
                    textSize: '2rem',
                    pathTransitionDuration: 1,
                  })}
                />
                <div className="about__text">PHP/Wordpress</div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="progress__bar">
                <CircularProgressbar 
                  value={95}
                  text={`${95}%`}
                  styles={buildStyles({
                    textSize: '2rem',
                    pathTransitionDuration: 1,
                  })}
                />
                <div className="about__text">React</div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="progress__bar">
                <CircularProgressbar 
                  value={85}
                  text={`${85}%`}
                  styles={buildStyles({
                    textSize: '2rem',
                    pathTransitionDuration: 1,
                  })}
                />
                <div className="about__text">Node.js</div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="progress__bar">
                <CircularProgressbar 
                  value={85}
                  text={`${85}%`}
                  styles={buildStyles({
                    textSize: '2rem',
                    pathTransitionDuration: 1,
                  })}
                />
                <div className="about__text">AWS</div>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="progress__bar">
                <CircularProgressbar 
                  value={85}
                  text={`${85}%`}
                  styles={buildStyles({
                    textSize: '2rem',
                    pathTransitionDuration: 1,
                  })}
                />
                <div className="about__text">jQuery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

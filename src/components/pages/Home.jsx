import me from '../images/stacey.png';

export const Home = () => {
  return (
    <>
      <div className="container home__wrapper">
        <div className="row">
          <div className="col-md-4 col-md-offset-1">
            <img src={me} alt="Stacey Breinich" />
          </div>
          <div className="col-md-7">
            <h1>Hi, I am Stacey Breinich.</h1>
            <h2>Front End &amp; Wordpress Developer</h2>
            <div>
              <a href="https://github.com/staceybreinich" target="_blank" rel="noreferrer"><i className="fab fa-github social__icons"></i></a>
              <a href="https://www.linkedin.com/in/sbreinich/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin social__icons"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import Cards from "../cards/Cards";

export const Projects = () => {
  return (
    <>
      <div className="col-md-12 text-center projects__title">
        <h1>My Projects</h1>
        <h6>Scroll right to see more of my projects!</h6>
      </div>

      <div className="container card__wrapper">
        <div className="row">

          <Cards />

        </div>
      </div>
    </>
  );
};

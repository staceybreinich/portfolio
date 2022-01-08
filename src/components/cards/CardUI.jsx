const Card = props => {

  return (
    <>
      <div className="card text-center">
        <div className="overflow">
          <img src={props.imgsrc} alt="Img" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">{props.cardtext}</p>
          <a href={props.siteurl} className="btn btn-outline-dark" rel="noreferrer" target="_blank">Visit Site</a><br />
          <a href={props.githubrepo} className="btn btn-outline-dark" rel="noreferrer" target="_blank">GitHub Repository</a>
        </div>
      </div>
    </>
  );
};

export default Card;
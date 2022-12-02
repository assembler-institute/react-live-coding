const ObjectCard = ({ object }) => {
  return (
    <>
      <div className="card">
        <div className="imgBox">
          <img src={object.hdurl} alt={object.name} />
        </div>
        <div className="contentBox">
          <p>{object.date}</p>
          <h4>{object.title}</h4>
          <p>{object.explanation.substring(0, 150)}...</p>
        </div>
      </div>
    </>
  );
};

export default ObjectCard;

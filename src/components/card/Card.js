const Card = (props) => {
  const user = props.user;
  return (
    <>
      <div className='card card-body mb-3'>
        <h5 className='card-title'>{user.name}</h5>
        <p className='card-text'>{user.email}</p>
      </div>
    </>
  );
};

export default Card;

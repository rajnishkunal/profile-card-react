import './Card.css'

function Card({userData}) {
    
  return (
    <div className='Card-Container'>
      <div className='Img-Container'>
      <img src={userData.picture.large} alt="User" />
      </div>
      <div className='Detail-Container'>
      <p>Name: {`${userData.name.first} ${userData.name.last}`}</p>
      <p>Gender: {userData.gender}</p>
      <p>Phone: {userData.phone}</p>
      </div>
    </div>
  )
}

export default Card

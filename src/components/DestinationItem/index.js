// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {imgUrl, name} = destination

  return (
    <div className="container">
      <li className="destination-item">
        <img src={imgUrl} alt={name} className="destination-image" />
        <p className="destination-name">{name}</p>
      </li>
    </div>
  )
}
export default DestinationItem

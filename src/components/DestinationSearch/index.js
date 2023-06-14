// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredDestinations = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-bar"
            onChange={this.onChangeSearchInput}
            placeholder="Search"
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul>
          {filteredDestinations.map(destination => (
            <DestinationItem key={destination.id} destination={destination} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

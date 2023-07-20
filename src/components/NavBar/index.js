// Write your code here.
import './index.css'

const NavBar = props => {
  const {displayresult} = props
  return (
    <div className="navbar_container">
      <div className="nav_">
        <img
          className="image_logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p className="heading">Emoji Game</p>
      </div>
      <div className="nav_">
        <p className="heading">Score:{displayresult}</p>
        <p className="heading">Total Score:0</p>
      </div>
    </div>
  )
}

export default NavBar

// Write your code here.
import './index.css'

const NavBar = props => {
  const {displayresult, isTrue, maxvalue} = props
  return (
    <div className="navbar_container">
      <div className="nav_">
        <img
          className="image_logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="nav_">
        {isTrue ? <p className="heading">Score: {displayresult}</p> : ' '}
        {isTrue ? <p className="heading">Top Score: {maxvalue}</p> : ' '}
      </div>
    </div>
  )
}

export default NavBar

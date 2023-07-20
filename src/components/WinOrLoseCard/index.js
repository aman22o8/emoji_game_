// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isTrue1, displayresult} = props
  const execute = () => {
    isTrue1()
  }
  return (
    <div className="winloosecontainer">
      <div className="left_side">
        <p className="heading1">You Won</p>
        <p className="heading2">Best Score</p>
        <p className="heading3">{displayresult}/12</p>
        <button onClick={execute} type="button" className="btnplayagain">
          Play again
        </button>
      </div>
      <div className="right_side">
        <img
          className="winimage"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard

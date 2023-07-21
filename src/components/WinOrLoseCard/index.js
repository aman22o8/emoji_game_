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
        {displayresult !== 12 ? (
          <h1 className="heading1">You Lose</h1>
        ) : (
          <h1 className="heading1">You Won</h1>
        )}
        {displayresult !== 12 ? (
          <p className="heading2">Score</p>
        ) : (
          <p className="heading2">Best Score</p>
        )}
        <p className="heading3">{displayresult}/12</p>
        <button onClick={execute} type="button" className="btnplayagain">
          Play Again
        </button>
      </div>
      <div className="right_side">
        <img
          className="winimage"
          src={
            displayresult !== 12
              ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
          }
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard

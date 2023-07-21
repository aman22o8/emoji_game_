/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {isTrue: true, emolist: [], displayresult: 0, maxofall: [0]}

  mytruefunction = () =>
    // const {isTrue} = this.state
    this.setState(prevState => ({isTrue: !prevState.isTrue, displayresult: 0}))

  finishGameAndSetTopScore = resultEmojisLength => {
    console.log(resultEmojisLength)
    // const {emojisList} = this.props
    return this.setState(prevState => ({
      isTrue: !prevState.isTrue,
      // displayresult: resultEmojisLength,
      emolist: [],
      maxofall: [...prevState.maxofall, resultEmojisLength],
    }))
  }

  myclickedemoji = id => {
    // console.log(`this ${id} emo is clicked`)
    const {emojisList} = this.props
    const {emolist} = this.state
    const isEmojiPresent = emolist.includes(id)
    const clickedEmojisLength = emolist.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevsate => ({
        emolist: [...prevsate.emolist, id],
        displayresult: clickedEmojisLength + 1,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {isTrue, emolist, maxofall, displayresult} = this.state
    const maxvalue = Math.max(...maxofall)
    const myresult = this.shuffledEmojisList()
    console.log(emolist)
    // console.log(maxofall)
    // console.log(displayresult)
    // console.log(isTrue)

    return (
      <div className="myfooter_container">
        <div className="mynav_bar">
          <NavBar
            isTrue={isTrue}
            displayresult={displayresult}
            maxvalue={maxvalue}
          />
        </div>
        {isTrue ? (
          <div className="align_at_center">
            <ul className="footer">
              {myresult.map(each => (
                <EmojiCard
                  key={each.id}
                  listeach={each}
                  myFunction={this.myclickedemoji}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className=" loosecontainer">
            <WinOrLoseCard
              displayresult={displayresult}
              isTrue1={this.mytruefunction}
            />
          </div>
        )}
      </div>
    )
  }
}
export default EmojiGame

// if (emojisList.length !== resultEmojisLength) {
//   this.setState(prevState => ({
//     isTrue: !prevState.isTrue,
//     // displayresult: resultEmojisLength,
//     emolist: [],
//     maxofall: [...prevState.maxofall, resultEmojisLength],
//   }))
// } else {
//   this.setState({
//     //   displayresult: resultEmojisLength,
//     emolist: [],
//   })
// }

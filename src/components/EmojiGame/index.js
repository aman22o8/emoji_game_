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

class EmojiGame extends Component {
  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    console.log(shuffledEmojisList)
    const {emojisList} = this.props
    console.log(emojisList)
    return (
      <>
        <div>
          <NavBar />
        </div>
        <ul className="footer">
          {emojisList.map(each => (
            <EmojiCard
              myFunction={shuffledEmojisList}
              urlofemoji={each.emojiUrl}
              key={each.id}
              index={each.id}
              alternate={each.emojiName}
            />
          ))}
        </ul>
      </>
    )
  }
}
export default EmojiGame

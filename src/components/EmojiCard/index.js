// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {listeach, myFunction} = props
  const {emojiName, id, emojiUrl} = listeach

  const eventtri = () => {
    myFunction(id)
  }
  //   console.log(urlofemoji)
  //   console.log(index)
  return (
    <li className="list_card">
      <button onClick={eventtri} className="btn" type="button">
        <img className="image_emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

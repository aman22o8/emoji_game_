// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {urlofemoji, index, alternate, myFunction} = props
  const eventtri = () => {
    myFunction()
  }
  //   console.log(urlofemoji)
  //   console.log(index)
  return (
    <li className="list_card">
      <button onClick={eventtri} className="btn" type="button">
        <img className="image_emoji" src={urlofemoji} alt={alternate} />
      </button>
    </li>
  )
}

export default EmojiCard

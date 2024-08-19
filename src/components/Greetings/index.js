import {Component} from 'react'
import LanguageButtons from '../LanguageButtons'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]
class Greetings extends Component {
  state = {
    activeImage: languageGreetingsList[0].id,
  }

  updateActiveLanguage = id => {
    this.setState({activeImage: id})
  }

  render() {
    const {activeImage} = this.state
    const activeLanguage = languageGreetingsList.find(
      eachLanguage => eachLanguage.id === activeImage,
    )
    const {imageUrl, imageAltText} = activeLanguage
    return (
      <div className="greetings-container">
        <div className="greetings-content">
          <h1>Multilingual Greetings</h1>
          <ul className="language-buttons-list">
            {languageGreetingsList.map(eachlanguage => (
              <LanguageButtons
                eachlanguage={eachlanguage}
                key={eachlanguage.id}
                updateActiveLanguage={this.updateActiveLanguage}
                isActive={eachlanguage.id === activeImage}
              />
            ))}
          </ul>
        </div>
        <img src={imageUrl} className="image-url" alt={imageAltText} />
      </div>
    )
  }
}

export default Greetings

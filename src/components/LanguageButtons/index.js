import './index.css'

const LanguageButtons = props => {
  const {eachlanguage, updateActiveLanguage, isActive} = props
  const {buttonText, id} = eachlanguage
  const changeActiveLanguage = () => {
    updateActiveLanguage(id)
  }
  const isActiveButton = isActive ? 'lang-button active-button' : 'lang-button'
  return (
    <li className="button-item">
      <button
        type="button"
        className={isActiveButton}
        onClick={changeActiveLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageButtons

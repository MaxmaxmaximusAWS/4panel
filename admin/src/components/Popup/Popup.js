import classNames from 'classnames'
import styles from './Popup.styl'
import {observer} from 'mobx-react-lite'


function Popup({opened, onClose, children}) {

  const popupRef = useRef(null)

  const popupClassName = classNames(
    styles.Popup, {
      [styles.__opened]: opened,
    }
  )

  function closePopup() {
    if (onClose) {
      onClose(false)
    }
  }

  function onMouseDown(event) {
    if (event.target === popupRef.current) {
      closePopup()
    }
  }

  return <div
    ref={popupRef}
    className={popupClassName}
    onMouseDown={onMouseDown}>

    {children}

  </div>
}


export default observer(Popup)


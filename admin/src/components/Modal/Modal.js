import styles from './Modal.styl'
import Popup from "../Popup/Popup";
import classNames from 'classnames'
import {observer} from 'mobx-react-lite'


function Modal({opened, onClose, children, ...props}) {

  const modalClassName = classNames(
    styles.Modal, {
      [styles.__opened]: opened
    }
  )

  return <Popup opened={opened} onClose={onClose} {...props}>
    <div className={modalClassName}>
      {children}
    </div>
  </Popup>
}


export default observer(Modal)

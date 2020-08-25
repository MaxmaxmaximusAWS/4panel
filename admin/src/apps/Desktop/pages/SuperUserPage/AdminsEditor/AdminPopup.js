import styles from './AdminPopup.styl'
import {observer} from 'mobx-react-lite'
import Modal from "../../../../../components/Modal/Modal";


function AdminPopup({admin, opened, onClose}) {

  const {username} = admin || {}
  // console.log(admin)


  return <Modal
    className={styles.AdminPopup}
    opened={opened}
    onClose={onClose}>

    {username && <div>
      {username}
    </div>}

  </Modal>
}


export default observer(AdminPopup)



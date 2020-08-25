import styles from './UserPanel.styl'
import {observer} from 'mobx-react-lite'
import useCurrentUser from "../../../../hooks/useCurrentUser";
import Button from "../../../../components/Button/Button";
import useConfirm from "../../../../hooks/useConfirm";
import {logout} from "../../../../lib/withApollo";


function UserPanel() {

  const user = useCurrentUser()
  const {username, role} = user

  const [confirmLogout] = useConfirm({
    message: 'Выйти?',
    onConfirm: logout
  })


  return <div className={styles.UserPanel}>
    <div className={styles.userInfo}>
      <h3 className={styles.username}>{username}</h3>
      <div className={styles.role}>{role}</div>
    </div>

    <Button onClick={confirmLogout}>Выйти</Button>
  </div>
}


export default observer(UserPanel)



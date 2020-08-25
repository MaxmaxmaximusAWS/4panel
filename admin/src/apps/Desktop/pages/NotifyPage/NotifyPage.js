import styles from './NotifyPage.styl'
import {observer} from 'mobx-react-lite'
import NotifySender from "./NotifySender";


function NotifyPage() {


  return <div className={styles.NotifyPage}>
    <NotifySender/>
  </div>
}


export default observer(NotifyPage)



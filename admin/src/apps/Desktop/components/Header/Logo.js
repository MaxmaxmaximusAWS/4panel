import styles from './Logo.styl'
import {observer} from 'mobx-react-lite'


function Logo() {

  return <div className={styles.Logo}></div>
}


export default observer(Logo)



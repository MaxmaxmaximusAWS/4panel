import styles from './Header.styl'
import {observer} from 'mobx-react-lite'
import Nav from "./Nav";
import UserPanel from "./UserPanel";
import Logo from "./Logo";


function Header({pages}) {

  return <div className={styles.Header}>
    <Logo/>
    <Nav pages={pages}/>
    <UserPanel/>
  </div>
}


export default observer(Header)



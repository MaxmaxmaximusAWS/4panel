import styles from './AdminRow.styl'
import {observer} from 'mobx-react-lite'
import Row from "../../../../../components/Row/Row";
import TitlesRow from "../../../../../components/TitlesRow/TitlesRow";
import toDate from "../../../../../filters/toDate";
import toRole from "../../../../../filters/toRole";


function AdminRow({admin, openAdminPopup}) {

  const {id, role, username, permissions, createdAt} = admin

  function onClick() {
    openAdminPopup(admin)
  }


  return <Row className={styles.AdminRow} onClick={onClick}>
    <td>{id}</td>
    <td>{toRole(role)}</td>
    <td>{username}</td>
    <td>{permissions}</td>
    <td>{toDate(createdAt)}</td>
  </Row>
}


export default observer(AdminRow)



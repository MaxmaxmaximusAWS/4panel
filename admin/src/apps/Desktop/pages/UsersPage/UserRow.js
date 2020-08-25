import styles from './UserRow.styl'
import {observer} from 'mobx-react-lite'
import toDate from "../../../../filters/toDate";
import Row from "../../../../components/Row/Row";
import toMoney from "../../../../filters/toMoney";
import { useHistory } from 'react-router-dom';


function UserRow({user}) {

  const {id, username, balance, role, createdAt} = user

  const history = useHistory()

  function onClick() {
    history.push(`/user/${id}`)
  }

  return <Row className={styles.UserRow} onClick={onClick}>
    <td>{id}</td>
    <td>{username}</td>
    <td>{toMoney(balance)}</td>
    <td>{role}</td>
    <td>{toDate(createdAt)}</td>
  </Row>
}


export default observer(UserRow)



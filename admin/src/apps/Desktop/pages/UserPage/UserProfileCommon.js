import styles from './UserProfileCommon.styl'
import {observer} from 'mobx-react-lite'
import Row from "../../../../components/Row/Row";
import toDate from "../../../../filters/toDate";
import Panel from "../../../../components/Panel/Panel";
import useNotificator from "../../../../hooks/useNotificator";
import copy from 'copy-to-clipboard'


function UserProfileCommon({user}) {

  const {
    id, username, createdAt,
    mobilePhone, email, img, role
  } = user

  const rows = [
    {name: 'Дата регистрации', value: toDate(createdAt)},
    {name: 'Телефон', value: mobilePhone},
    {name: 'Email', value: email},
  ]

  const notificator = useNotificator()

  function onIdClick() {
    copy(id)
    notificator.alert('Скопировано')
  }

  return <Panel className={styles.UserProfileCommon}>

    <h3 className={styles.username}>{username}</h3>

    <div
      className={styles.avatar}
      style={{backgroundImage: `url("${img}")`}}>
    </div>

    <h4 className={styles.id} onClick={onIdClick}>
      <div className={styles.idText}>{id}</div>
    </h4>

    <table>
      <tbody>
      {rows.map(({name, value}) =>
        <Row key={name}>
          <td>{name}</td>
          <td>{value}</td>
        </Row>
      )}
      </tbody>
    </table>

  </Panel>
}


export default observer(UserProfileCommon)



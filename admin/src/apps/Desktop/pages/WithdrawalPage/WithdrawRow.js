import styles from './WithdrawRow.styl'
import {observer} from 'mobx-react-lite'
import Row from "../../../../components/Row/Row";
import useQuery from "../../../../hooks/useQuery";
import {GET_USER, GET_USER_INFO} from "../../../../graphql/queries";
import TitlesRow from "../../../../components/TitlesRow/TitlesRow";
import toMoney from "../../../../filters/toMoney";
import Button from "../../../../components/Button/Button";
import useConfirm from "../../../../hooks/useConfirm";
import toRole from "../../../../filters/toRole";
import copy from 'copy-to-clipboard'
import useNotificator from "../../../../hooks/useNotificator";
import {useMutation} from "@apollo/react-hooks";
import {ACCEPT_WITHDRAW, DENY_WITHDRAW} from "../../../../graphql/mutations";
import {useHistory} from 'react-router-dom'


function WithdrawRow({withdraw}) {

  const {
    accepted, amount, createdAt,
    denied, id, reason, userId
  } = withdraw

  const user = useQuery(GET_USER, {
    variables: {id: userId}
  }) || {}

  const {username, role} = user

  const userInfo = useQuery(GET_USER_INFO, {
    variables: {userId: userId}
  }) || {}

  const {depositAmount, withdrawsAmount} = userInfo

  const notificator = useNotificator()

  const history = useHistory()

  // const [acceptWithdraw] = useMutation(ACCEPT_WITHDRAW, {
  //   variables: {id: id}
  // })
  //
  // const [denyWithdraw] = useMutation(DENY_WITHDRAW, {
  //   variables: {id: id, reason: reason}
  // })


  function goToUserPage() {
    history.push(`/user/${userId}`)
  }

  function onIdClick() {
    copy(id)
    notificator.alert('Скопирован id вывода')
  }

  function onUserIdClick() {
    copy(userId)
    notificator.alert('Скопирован id пользователя')
  }

  const [confirmAcceptWithdraw] = useConfirm({
    message: 'Одобрить вывод?',
    onConfirm() {
      notificator.alert(`Вывод одобрен 
        (пока не посылаю запрос к серверу, чтобы вывод не исчезал)`
      )
    }
  })

  const [confirmDenyWithdraw] = useConfirm({
    message: 'Отклонить вывод?',
    onConfirm() {
      notificator.alert(`Вывод отклонен 
        (пока не посылаю запрос к серверу, чтобы вывод не исчезал)`
      )
    }
  })


  return <Row className={styles.WithdrawRow}>

    <td className={styles.idsTd}>

      <div className={styles.id}>
        <span className={styles.idTitle}>
          id вывода:
        </span>
        <span
          className={styles.idValue}
          onClick={onIdClick}>
          {id}
        </span>
      </div>

      <div className={styles.id}>
        <span className={styles.idTitle}>
          id юзера:
        </span>
        <span
          className={styles.idValue}
          onClick={onUserIdClick}>
          {userId}
        </span>
      </div>
    </td>

    <td
      className={styles.username}
      onClick={goToUserPage}>
      {username}
    </td>

    <td>Баланс</td>
    <td>{toRole(role)}</td>
    <td>Дата рег</td>
    <td>{toMoney(depositAmount)}</td>
    <td>{toMoney(withdrawsAmount)}</td>
    <td>{toMoney(amount)}</td>

    <td>
      <Button green onClick={confirmAcceptWithdraw}>Одобрить</Button>
      <Button red onClick={confirmDenyWithdraw}>Отклонить</Button>
    </td>
  </Row>
}


export default observer(WithdrawRow)



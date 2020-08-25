import styles from './UserProfileInfo.styl'
import {observer} from 'mobx-react-lite'
import useLiveQuery from "../../../../../hooks/useLiveQuery";
import {GET_USER_INFO} from "../../../../../graphql/queries";
import Panel from "../../../../../components/Panel/Panel";
import toMoney from "../../../../../filters/toMoney";
import Table from "../../../../../components/Table/Table";
import Row from "../../../../../components/Row/Row";
import TitlesRow from "../../../../../components/TitlesRow/TitlesRow";


function UserProfileInfo({user}) {

  const userInfo = useLiveQuery(GET_USER_INFO, {
    variables: {
      userId: user.id
    }
  })


  if (!userInfo) {
    return <div className={styles.UserProfileInfo}>
      Loading...
    </div>
  }

  const {
    userId, balanceReal, balanceBonus, promocodes, bonusSlot,
    moneyRain, chatPrises, depositCount, depositAmount,
    withdrawsCount, withdrawsAmount, referralWithdrawCount,
    referralWithdrawAmount, ngr, betsAmount, depositWagering,
    gamesInfo
  } = userInfo


  return <div className={styles.UserProfileInfo}>


    <Panel className={styles.panel}>
      <Table>
        <TitlesRow>
          <td>Реальный баланс</td>
          <td>{toMoney(balanceReal)}</td>
        </TitlesRow>

        <Row>
          <td>Сделано ставок на сумму</td>
          <td>{toMoney(betsAmount)}</td>
        </Row>

        <Row>
          <td>Сумма отыгрыша депозита</td>
          <td>{toMoney(depositWagering)}</td>
        </Row>
      </Table>
    </Panel>

    <Panel className={styles.panel}>
      <Table>
        <TitlesRow>
          <td>Бонусный баланс</td>
          <td>{toMoney(balanceBonus)}</td>
        </TitlesRow>

        <Row>
          <td>Промокоды</td>
          <td>{toMoney(promocodes)}</td>
        </Row>

        <Row>
          <td>Бонусный слот</td>
          <td>{toMoney(promocodes)}</td>
        </Row>

        <Row>
          <td>Викторина в чате</td>
          <td>{toMoney(chatPrises)}</td>
        </Row>

        <Row>
          <td>Денежный дождь</td>
          <td>{toMoney(moneyRain)}</td>
        </Row>
      </Table>
    </Panel>

    <Panel className={styles.panel}>
      <Table>
        <TitlesRow>
          <td>Игра</td>
          <td>Поставлено</td>
          <td>Выиграно</td>
        </TitlesRow>

        {gamesInfo.map(({gameMode, betsAmount, winsAmount}) =>
          <Row key={gameMode}>
            <td>{gameMode}</td>
            <td>{toMoney(betsAmount)}</td>
            <td>{toMoney(winsAmount)}</td>
          </Row>
        )}
      </Table>
    </Panel>

  </div>

}


export default observer(UserProfileInfo)



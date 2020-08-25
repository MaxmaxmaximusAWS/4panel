import styles from './UserGamesHistoryRow.styl'
import {observer} from 'mobx-react-lite'
import Row from "../../../../../components/Row/Row";
import toMoney from "../../../../../filters/toMoney";
import toDate from "../../../../../filters/toDate";


function UserGamesHistoryRow({gameResult}) {

  const {gameMode, timestamp, betAmount, result} = gameResult


  return <Row className={styles.UserGamesHistoryRow}>
    <td>{gameMode}</td>
    <td>{toDate(timestamp)}</td>
    <td>{toMoney(betAmount)}</td>
    <td>{toMoney(result)}</td>
  </Row>
}


export default observer(UserGamesHistoryRow)



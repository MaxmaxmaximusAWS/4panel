import styles from './UserGamesHistoryTable.styl'
import {observer} from 'mobx-react-lite'
import TitlesRow from "../../../../../components/TitlesRow/TitlesRow";
import UserGamesHistoryRow from "./UserGamesHistoryRow";


function UserGamesHistoryTable({gamesHistory}) {

  const {history, count} = gamesHistory

  if (!history.length) {
    return <div className={styles.UserGamesHistoryTable}>
      <div className={styles.notFoundGames}>
        По данному фильтру игр не найдено
      </div>
    </div>
  }

  return <div className={styles.UserGamesHistoryTable}>
    <table className={styles.table}>
      <tbody>
      <TitlesRow>
        <td>Игра</td>
        <td>Дата</td>
        <td>Ставка</td>
        <td>Результат</td>
      </TitlesRow>

      {history.map(gameResult =>
        <UserGamesHistoryRow
          key={gameResult.id}
          gameResult={gameResult}
        />
      )}
      </tbody>
    </table>
  </div>
}


export default observer(UserGamesHistoryTable)



import styles from './DashboardGamesTable.styl'
import {observer} from 'mobx-react-lite'
import DashBoardGameTableRow from "./DashBoardGameTableRow";
import Row from "../../../../components/Row/Row";
import TitlesRow from "../../../../components/TitlesRow/TitlesRow";


function DashboardGamesTable({gamesRevenue}) {

  return <div className={styles.DashboardGamesTable}>

    <table className={styles.table}>
      <tbody>

      <TitlesRow className={styles.titlesRow}>
        <td>Игра</td>
        <td>Поставлено</td>
        <td>Ставок</td>
        <td>GGR</td>
        <td>Проиграно</td>
        <td>Выиграно</td>
      </TitlesRow>

      {gamesRevenue.map(gameRevenue =>
        <DashBoardGameTableRow
          key={gameRevenue.gameMode}
          gameRevenue={gameRevenue}
        />
      )}
      </tbody>
    </table>

  </div>
}


export default observer(DashboardGamesTable)



import styles from './DashBoardGames.styl'
import {observer} from 'mobx-react-lite'
import Panel from "../../../../components/Panel/Panel";
import DashBoardGamesPie from "./DashBoardGamesPie";
import DashboardGamesTable from "./DashboardGamesTable";


function DashBoardGames({gamesRevenue}) {

  return <Panel className={styles.DashBoardGames}>
    <h3 className={styles.title}>Доходы от игр</h3>

    <DashboardGamesTable gamesRevenue={gamesRevenue}/>
    <DashBoardGamesPie gamesRevenue={gamesRevenue}/>
  </Panel>
}


export default observer(DashBoardGames)



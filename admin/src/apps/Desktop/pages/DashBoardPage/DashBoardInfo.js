import styles from './DashBoardInfo.styl'
import {observer} from 'mobx-react-lite'
import DashboardStatistic from "./DashboardStatistic";
import DashBoardGames from "./DashBoardGames";


function DashBoardInfo({dashboardInfo}) {

  const {gamesRevenue} = dashboardInfo

  return <div className={styles.DashBoardInfo}>
    <DashboardStatistic dashboardInfo={dashboardInfo}/>
    <DashBoardGames gamesRevenue={gamesRevenue}/>
  </div>
}


export default observer(DashBoardInfo)



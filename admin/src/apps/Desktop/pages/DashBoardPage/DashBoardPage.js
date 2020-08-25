import styles from './DashBoardPage.styl'
import {observer} from 'mobx-react-lite'
import {GET_DASHBOARD_INFO} from "../../../../graphql/queries";
import DashBoardInfo from "./DashBoardInfo";
import useLiveQuery from "../../../../hooks/useLiveQuery";


function DashBoardPage() {

  const dashboardInfo = useLiveQuery(GET_DASHBOARD_INFO)

  return <div className={styles.DashBoardPage}>
    {dashboardInfo &&
      <DashBoardInfo dashboardInfo={dashboardInfo}/>
    }
  </div>
}


export default observer(DashBoardPage)



import styles from './SuperUserPage.styl'
import {observer} from 'mobx-react-lite'
import Tabs from "../../../../components/Tabs/Tabs";
import Tab from "../../../../components/Tabs/Tab";
import AdminsEditor from "./AdminsEditor/AdminsEditor";
import AdminsActionsLog from "./AdminsActionsLog/AdminsActionsLog";


function SuperUserPage() {

  return <div className={styles.SuperUserPage}>

    <Tabs className={styles.tabs}>
      <Tab title={"Администраторы"}>
        <AdminsEditor/>
      </Tab>

      <Tab title={"Лог действий"}>
        <AdminsActionsLog/>
      </Tab>

    </Tabs>

  </div>
}


export default observer(SuperUserPage)



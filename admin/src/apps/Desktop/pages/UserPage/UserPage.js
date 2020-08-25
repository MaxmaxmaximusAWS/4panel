import styles from './UserPage.styl'
import {observer} from 'mobx-react-lite'
import {useParams} from 'react-router-dom'
import useLiveQuery from "../../../../hooks/useLiveQuery";
import {GET_USER} from "../../../../graphql/queries";
import Tabs from "../../../../components/Tabs/Tabs";
import Tab from "../../../../components/Tabs/Tab";
import UserProfileCommon from "./UserProfileCommon";
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";
import UserProfileNotify from "./UserProfileNotify/UserProfileNotify";
import UserProfileAntiFraud from "./UserProfileAntiFraud/UserProfileAntiFraud";
import UserGamesHistory from "./UserGamesHistory/UserGamesHistory";


function UserPage() {

  const {id} = useParams()

  const user = useLiveQuery(GET_USER, {
    variables: {id: id}
  })

  if(!user){
    return <div className={styles.UserPage}></div>
  }

  return <div className={styles.UserPage}>

    <UserProfileCommon user={user}/>

    <Tabs className={styles.tabs}>

      <Tab title={"Игры"}>
        <UserGamesHistory user={user}/>
      </Tab>

      <Tab title={"Статистика"}>
        <UserProfileInfo user={user}/>
      </Tab>

      <Tab title={"Уведомления"}>
        <UserProfileNotify user={user}/>
      </Tab>

      <Tab title={"АнтиФрод"}>
        <UserProfileAntiFraud user={user}/>
      </Tab>
    </Tabs>

  </div>
}


export default observer(UserPage)



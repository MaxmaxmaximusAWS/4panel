import 'setimmediate'
import styles from './Mobile.styl'
import ReactDOM from 'react-dom'
import withApollo, {getAccessToken} from "../../lib/withApollo"
import Pages from "../../components/Pages/Pages"
import withCurrentUser from "../../lib/withCurrentUser"
import Confirm from "../../components/Confirm/Confirm"
import Notificator from "../../components/Notificator/Notificator"
import withRouter from "../../lib/withRouter";
import useCurrentUser from "../../hooks/useCurrentUser";


// export const pages = [
//   {name: 'Dashdoard', url: '/', Page: DashBoardPage},
//   {name: 'Аналитика', url: '/analytics', Page: AnalyticsPage},
//   {name: 'Пользователи', url: '/users', match: '/user/:id', Page: UsersPage},
//   {name: 'Чат', url: '/chat', Page: ChatPage},
//   {name: 'Вывод средств', url: '/withdrawal', Page: WithdrawalPage},
//   {name: 'Инструменты', url: '/tools', Page: ToolsPage},
//   {name: 'АнтиФрод', url: '/anti-fraud', Page: AntiFraudPage},
//   {name: 'Уведомления', url: '/notify', Page: NotifyPage},
//   {name: 'Админ. функции', url: '/super-user', Page: SuperUserPage},
//   {url: '/user/:id', Page: UserPage},
// ]



function Mobile() {

  const user = useCurrentUser()
  const accessToken = getAccessToken()

  return <div className={styles.Mobile}>
    {!user && <AuthPanel/>}

    {user && <div className={styles.content}>
      <Header pages={pages}/>
      <Pages pages={pages}/>
    </div>}

    <Confirm/>
    <Notificator/>
  </div>
}


Mobile = withCurrentUser(Mobile)
Mobile = withRouter(Mobile)
Mobile = withApollo(Mobile)


ReactDOM.render(
  <Mobile/>,
  document.querySelector('#App')
)




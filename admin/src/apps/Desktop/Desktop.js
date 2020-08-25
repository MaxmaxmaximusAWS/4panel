import 'setimmediate'
import styles from './Desktop.styl'
import ReactDOM from 'react-dom'
import withApollo, {getAccessToken} from "../../lib/withApollo"
import Pages from "../../components/Pages/Pages"
import withCurrentUser from "../../lib/withCurrentUser"
import Confirm from "../../components/Confirm/Confirm"
import Notificator from "../../components/Notificator/Notificator"
import withRouter from "../../lib/withRouter";
import Header from "./components/Header/Header";
import useCurrentUser from "../../hooks/useCurrentUser";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import AntiFraudPage from "./pages/AntiFraudPage/AntiFraudPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import NotifyPage from "./pages/NotifyPage/NotifyPage";
import SuperUserPage from "./pages/SuperUserPage/SuperUserPage";
import ToolsPage from "./pages/ToolsPage/ToolsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import WithdrawalPage from "./pages/WithdrawalPage/WithdrawalPage";
import AuthPanel from "./components/AuthPanel/AuthPanel";
import UserPage from "./pages/UserPage/UserPage";


export const pages = [
  {name: 'Dashdoard', url: '/', Page: DashBoardPage},
  {name: 'Аналитика', url: '/analytics', Page: AnalyticsPage},
  {name: 'Пользователи', url: '/users', match: '/user/:id', Page: UsersPage},
  {name: 'Чат', url: '/chat', Page: ChatPage},
  {name: 'Вывод средств', url: '/withdrawal', Page: WithdrawalPage},
  {name: 'Инструменты', url: '/tools', Page: ToolsPage},
  {name: 'АнтиФрод', url: '/anti-fraud', Page: AntiFraudPage},
  {name: 'Уведомления', url: '/notify', Page: NotifyPage},
  {name: 'Админ. функции', url: '/super-user', Page: SuperUserPage},
  {url: '/user/:id', Page: UserPage},
]



function Desktop() {

  const user = useCurrentUser()
  const accessToken = getAccessToken()


  return <div className={styles.Desktop}>
    {!user && <AuthPanel/>}

    {user && <div className={styles.content}>
      <Header pages={pages}/>
      <Pages pages={pages}/>
    </div>}

    <Confirm/>
    <Notificator/>
  </div>
}


Desktop = withCurrentUser(Desktop)
Desktop = withRouter(Desktop)
Desktop = withApollo(Desktop)


ReactDOM.render(
  <Desktop/>,
  document.querySelector('#App')
)




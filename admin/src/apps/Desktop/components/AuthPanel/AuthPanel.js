import styles from './AuthPanel.styl'
import {observer} from 'mobx-react-lite'
import {loginWithVk} from "../../../../lib/withApollo";
import Button from "../../../../components/Button/Button";
import Panel from "../../../../components/Panel/Panel";


function AuthPanel() {

  return <Panel className={styles.AuthPanel}>
    <Button onClick={loginWithVk}>Войти</Button>
  </Panel>
}


export default observer(AuthPanel)



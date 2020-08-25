import styles from './NotifySender.styl'
import {observer} from 'mobx-react-lite'
import useNotificator from "../../../../hooks/useNotificator";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import {useMutation} from "@apollo/react-hooks";
import {SEND_NOTIFICATION} from "../../../../graphql/mutations";
import Textarea from "../../../../components/Textarea/Textarea";
import Button from "../../../../components/Button/Button";
import Panel from "../../../../components/Panel/Panel";


function NotifySender() {

  const [message, setMessage] = useState('')
  const notificator = useNotificator()
  const user = useCurrentUser()

  const [sendNotification] = useMutation(SEND_NOTIFICATION, {
    variables: {
      from: user.id,
      message: message,
    },
    onCompleted() {
      setMessage('')
      notificator.alert('Уведомление отправлено')
    }
  })


  return <Panel className={styles.NotifySender}>
    <h4 className={styles.title}>
      Уведомление
    </h4>

    <Textarea
      className={styles.textArea}
      value={message}
      onChange={setMessage}>
      Текст уведомления
    </Textarea>

    <Button onClick={sendNotification}>
      Отправить
    </Button>
  </Panel>
}


export default observer(NotifySender)



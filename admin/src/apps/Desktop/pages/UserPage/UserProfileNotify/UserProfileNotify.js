import styles from './UserProfileNotify.styl'
import {observer} from 'mobx-react-lite'
import Textarea from "../../../../../components/Textarea/Textarea";
import Button from "../../../../../components/Button/Button";
import {useMutation} from "@apollo/react-hooks";
import {SEND_NOTIFICATION} from "../../../../../graphql/mutations";
import useCurrentUser from "../../../../../hooks/useCurrentUser";
import useNotificator from "../../../../../hooks/useNotificator";


function UserProfileNotify({user}) {

  const currentUser = useCurrentUser()
  const notificator = useNotificator()
  const [message, setMessage] = useState('')

  const [sendNotification] = useMutation(SEND_NOTIFICATION, {
    variables: {
      receivers: [user.id],
      from: currentUser.id,
      message: message,
    },
    onCompleted() {
      clearMessage()
      notificator.alert('Уведомление отправлено')
    }
  })

  function clearMessage() {
    setMessage('')
  }


  return <div className={styles.UserProfileNotify}>
    <h3 className={styles.title}>
      Уведомление для {user.username}
    </h3>

    <Textarea
      className={styles.textArea}
      value={message}
      onChange={setMessage}>
      Введите текст
    </Textarea>

    <Button onClick={sendNotification}>
      Отправить
    </Button>
  </div>
}


export default observer(UserProfileNotify)



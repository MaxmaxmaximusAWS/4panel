import styles from './ToolsPage.styl'
import {observer} from 'mobx-react-lite'
import {CREATE_PROMOCODE} from "../../../../graphql/mutations";
import Button from "../../../../components/Button/Button";
import {useMutation} from "@apollo/react-hooks";
import CreatedPromocode from "./CreatedPromocode";
import Text from "../../../../components/Text/Text";
import useNotificator from "../../../../hooks/useNotificator";
import Table from "../../../../components/Table/Table";
import Row from "../../../../components/Row/Row";
import Number from "../../../../components/Number/Number";
import copy from 'copy-to-clipboard'


const SEC_IN_DAY = 86400


function ToolsPage() {

  const [code, setCode] = useState('')
  const [amount, setAmount] = useState(0)
  const [timeoutDays, setTimeoutDays] = useState(1)
  const [activationCount, setActivationCount] = useState(1)

  const notificator = useNotificator()

  const [createPromocode, result] = useMutation(CREATE_PROMOCODE, {
    variables: {
      amount: amount,
      activationCount: activationCount,
      timeoutSec: timeoutDays * SEC_IN_DAY,
      code: code,
    },
    onCompleted(){
      copy(code)
      notificator.alert(`Код "${code.toUpperCase()}" создан и скопирован`)
    }
  })

  const {called, loading, data, error} = result


  return <div className={styles.ToolsPage}>

    <h3>Создать промокод</h3>

    <Table>
      <Row>
        <td>Придумайте промокод</td>
        <td><Text value={code} onChange={setCode}/></td>
      </Row>

      <Row>
        <td>Количество денег</td>
        <td><Number value={amount} onChange={setAmount}/></td>
      </Row>

      <Row>
        <td>Количество активаций</td>
        <td><Number value={activationCount} onChange={setActivationCount}/></td>
      </Row>

      <Row>
        <td>Сколько дней действует</td>
        <td><Number value={timeoutDays} onChange={setTimeoutDays}/></td>
      </Row>

    </Table>

    <Button onClick={createPromocode}>
      Создать
    </Button>


    {called && !loading && !error &&
    <CreatedPromocode promocode={data.createPromocode}/>
    }
  </div>
}


export default observer(ToolsPage)



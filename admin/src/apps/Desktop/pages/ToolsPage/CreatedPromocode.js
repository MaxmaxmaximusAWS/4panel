// createPromocode

import styles from './CreatedPromocode.styl'
import {observer} from 'mobx-react-lite'
import Table from "../../../../components/Table/Table";
import Panel from "../../../../components/Panel/Panel";
import Row from "../../../../components/Row/Row";
import toDate from "../../../../filters/toDate";
import toMoney from "../../../../filters/toMoney";
import useNotificator from "../../../../hooks/useNotificator";
import copy from 'copy-to-clipboard'


function CreatedPromocode({promocode}) {

  const {
    activationCounter, activationLimit,
    amount, code, createdAt, expire
  } = promocode

  const notificator = useNotificator()

  function onCodeClick() {
    copy(code)
    notificator.alert(`Код "${code}" скопирован`)
  }


  return <Panel className={styles.CreatedPromocode}>
    <h4 className={styles.title}>Промокод создан</h4>

    <Table>
      <Row className={styles.codeRow} onClick={onCodeClick}>
        <td>Код</td>
        <td>{code}</td>
      </Row>

      <Row>
        <td>Сумма</td>
        <td>{toMoney(amount)}</td>
      </Row>

      <Row>
        <td>Активирован</td>
        <td>{activationCounter} из {activationLimit} раз</td>
      </Row>

      <Row>
        <td>Создан</td>
        <td>{toDate(createdAt, "dd.MM.yyyy в HH:mm")}</td>
      </Row>

      <Row>
        <td>Истекает</td>
        <td>{toDate(expire, "dd.MM.yyyy в HH:mm")}</td>
      </Row>


    </Table>
  </Panel>
}


export default observer(CreatedPromocode)



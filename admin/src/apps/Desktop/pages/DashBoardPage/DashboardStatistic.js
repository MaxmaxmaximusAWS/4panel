import styles from './DashboardStatistic.styl'
import {observer} from 'mobx-react-lite'
import Panel from "../../../../components/Panel/Panel";
import Row from "../../../../components/Row/Row";
import toMoney from "../../../../filters/toMoney";
import Table from "../../../../components/Table/Table";
import TitlesRow from "../../../../components/TitlesRow/TitlesRow";


function DashboardStatistic({dashboardInfo}) {

  const {
    bonuses, commissions, deposits, gifts, ngr,
    promotions, referrals, withdraws,
  } = dashboardInfo

  const rows = [
    {name: 'Поступления', value: toMoney(deposits)},
    {name: 'Расходы', value: toMoney(withdraws)},
    {name: 'Бонусы', value: toMoney(bonuses)},
    {name: 'Комиссия', value: toMoney(commissions)},
    {name: 'Подарки', value: toMoney(gifts)},
    {name: 'Акции', value: toMoney(promotions)},
    {name: 'Рефералы', value: toMoney(referrals)},
    {name: 'NGR', value: toMoney(ngr)},
  ]


  return <Panel className={styles.DashboardStatistic}>
    <h3 className={styles.title}>Статистика</h3>

    <div className={styles.partition}>
      <Table>
        <TitlesRow>
          <td>Поступления (депозиты)</td>
          <td>{toMoney(deposits)}</td>
        </TitlesRow>
      </Table>
    </div>

    <div className={styles.partition}>
      <Table>
        <TitlesRow>
          <td>Расходы (выводы)</td>
          <td>{toMoney(withdraws)}</td>
        </TitlesRow>
      </Table>
    </div>

    <div className={styles.partition}>
      <Table>
        <TitlesRow>
          <td>Иные расходы</td>
          <td>{toMoney(1999)}</td>
        </TitlesRow>

        <Row>
          <td>Промо</td>
          <td>{toMoney(promotions)}</td>
        </Row>

        <Row>
          <td>Раздачи</td>
          <td>{toMoney(gifts)}</td>
        </Row>

        <Row>
          <td>Рефералка</td>
          <td>{toMoney(referrals)}</td>
        </Row>

        <Row>
          <td>Комиссия платежки</td>
          <td>{toMoney(commissions)}</td>
        </Row>
      </Table>
    </div>
  </Panel>
}


export default observer(DashboardStatistic)



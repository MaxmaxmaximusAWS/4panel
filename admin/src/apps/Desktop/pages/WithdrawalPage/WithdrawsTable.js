import styles from './WithdrawsTable.styl'
import {observer} from 'mobx-react-lite'
import Table from "../../../../components/Table/Table";
import TitlesRow from "../../../../components/TitlesRow/TitlesRow";
import WithdrawRow from "./WithdrawRow";


function WithdrawsTable({withdrawsList}) {

  const {count, withdraws} = withdrawsList


  return <div className={styles.WithdrawsTable}>
    <Table className={styles.table}>
      <TitlesRow>
        <td>id</td>
        <td>Ник</td>
        <td>Баланс</td>
        <td>Роль</td>
        <td>Дата рег</td>
        <td>Депозитов</td>
        <td>Выводов</td>
        <td>Вывод</td>
        <td></td>
      </TitlesRow>

      {withdraws.map(withdraw =>
        <WithdrawRow
          key={withdraw.id}
          withdraw={withdraw}
        />
      )}

    </Table>
  </div>
}


export default observer(WithdrawsTable)



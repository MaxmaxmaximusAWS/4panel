import styles from './DashBoardGameTableRow.styl'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'
import Row from "../../../../components/Row/Row";
import toMoney from "../../../../filters/toMoney";


function DashBoardGameTableRow({gameRevenue}) {

  const {
    gameMode, betsAmount, betsQty,
    ggr, looseAmount, winsAmount
  } = gameRevenue

  const gameRowClassName = classNames(styles.DashBoardGameTableRow,
    {[styles.__bad]: ggr <= 0}
  )

  const ggrClassName = classNames(styles.ggr,
    {[styles.__bad]: ggr <= 0}
  )

  return <Row className={gameRowClassName}>
    <td>{gameMode}</td>
    <td>{toMoney(betsAmount)}</td>
    <td>{betsQty}</td>
    <td className={ggrClassName}>{toMoney(ggr)}</td>
    <td>{toMoney(looseAmount)}</td>
    <td>{toMoney(winsAmount)}</td>
  </Row>
}


export default observer(DashBoardGameTableRow)



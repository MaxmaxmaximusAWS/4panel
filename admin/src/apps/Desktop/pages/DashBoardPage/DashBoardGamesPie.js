import styles from './DashBoardGamesPie.styl'
import {observer} from 'mobx-react-lite'
import Chart from "react-google-charts";


function DashBoardGamesPie({gamesRevenue}) {

  const columnNames = ['Игра', 'Проценты']

  const gamesData = gamesRevenue
  .filter(({ggr}) => ggr > 0)
  .map(({gameMode, ggr}) => [gameMode, ggr])


  return <div className={styles.DashBoardGamesPie}>
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Загрузка...</div>}
      data={[
        columnNames,
        ...gamesData
      ]}
      options={{
        chartArea: {
          left: 10,
          top: 10,
          bottom: 13,
          width: "100%",
          height: "100%"
        },

        backgroundColor: {
          fill: 'transparent'
        },

        pieStartAngle: 100,

        tooltip: {
          trigger: 'none'
        },

        pieSliceText: 'label',
        legend: {
          position: 'labeled',
          labeledValueText: 'both',
          textStyle: {
            color: 'white',
            fontSize: 12
          }
        }

      }}
    />
  </div>
}


export default observer(DashBoardGamesPie)



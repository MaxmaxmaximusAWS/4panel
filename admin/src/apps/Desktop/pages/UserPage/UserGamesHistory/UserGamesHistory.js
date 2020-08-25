import styles from './UserGamesHistory.styl'
import {observer} from 'mobx-react-lite'
import {GET_USER_GAMES_HISTORY} from "../../../../../graphql/queries";
import DateRange from "../../../../../components/DateRange/DateRange";
import toMoveMonths from "../../../../../filters/toMoveMonths";
import GAME_MODES from "../../../../../controllers/GameModes";
import useLiveQuery from "../../../../../hooks/useLiveQuery";
import Select from "../../../../../components/Select/Select";
import UserGamesHistoryTable from "./UserGamesHistoryTable";


function UserGamesHistory({user}) {

  const [dateFrom, setDateFrom] = useState(toMoveMonths(new Date(), -1))
  const [dateTo, setDateTo] = useState(new Date())
  const [gameMode, setGameMode] = useState(GAME_MODES[0])

  const gamesHistory = useLiveQuery(GET_USER_GAMES_HISTORY, {
    variables: {
      userId: user.id,
      dateFrom: dateFrom,
      dateTo: dateTo,
      gameMode: gameMode,
    }
  })

  function onGameModeChange(event) {
    setGameMode(event.target.value)
  }


  return <div className={styles.UserGamesHistory}>

    <h3 className={styles.title}>
      История игр
    </h3>


    <div className={styles.filter}>
      <Select
        label={"Режим игры"}
        value={gameMode}
        onChange={onGameModeChange}>
        {GAME_MODES.map(gameMode =>
          <option key={gameMode} value={gameMode}>
            {gameMode}
          </option>
        )}
      </Select>

      <DateRange
        startDate={dateFrom}
        onStartDateChange={setDateFrom}
        endDate={dateTo}
        onEndDateChange={setDateTo}
      />
    </div>


    {!gamesHistory && <div>Загрузка...</div>}

    {gamesHistory && <UserGamesHistoryTable
      gamesHistory={gamesHistory}
    />}

  </div>
}


export default observer(UserGamesHistory)



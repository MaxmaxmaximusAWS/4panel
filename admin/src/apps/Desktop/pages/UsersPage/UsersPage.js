import styles from './UsersPage.styl'
import UserRow from "./UserRow"
import {observer} from 'mobx-react-lite'
import FiltersPanel from "./UsersFiltersPanel"
import useQuery from "../../../../hooks/useQuery"
import Panel from "../../../../components/Panel/Panel"
import {FIND_USERS} from "../../../../graphql/queries"
import toMoveMonths from "../../../../filters/toMoveMonths"
import TitlesRow from "../../../../components/TitlesRow/TitlesRow"


function UsersPage() {

  const [filters, setFilters] = useState({
    registeredFrom: toMoveMonths(new Date(), -1),
    registeredTo: new Date(),
    deposited: false
  })

  const result = useQuery(FIND_USERS, {
    variables: {
      registeredFrom: filters.registeredFrom.toISOString(),
      registeredTo: filters.registeredTo.toISOString(),
      deposited: filters.deposited,
    }
  })

  if (!result) {
    return <div className={styles.UsersPage}>
      <FiltersPanel
        filters={filters}
        onChange={setFilters}
      />
    </div>
  }

  const {users, count} = result


  return <div className={styles.UsersPage}>

    <FiltersPanel
      filters={filters}
      onChange={setFilters}
    />

    {!count && <Panel className={styles.notFoundItems}>
      По данному фильтру пользователей не найдено...
    </Panel>}

    {!!count && <div className={styles.scrollWrapper}>
      <table className={styles.table}>
        <tbody>

        <TitlesRow>
          <td>id</td>
          <td>Ник</td>
          <td>Баланс</td>
          <td>Роль</td>
          <td>Дата рег</td>
        </TitlesRow>

        {users.map(user =>
          <UserRow
            key={user.id}
            user={user}
          />
        )}
        </tbody>
      </table>
    </div>}

  </div>
}


export default observer(UsersPage)



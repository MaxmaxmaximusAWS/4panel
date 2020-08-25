import styles from './AdminsEditor.styl'
import {observer} from 'mobx-react-lite'
import useLiveQuery from "../../../../../hooks/useLiveQuery";
import {GET_ADMIN_USERS} from "../../../../../graphql/queries";
import useLiveQueryList from "../../../../../hooks/useLiveQueryList";
import Table from "../../../../../components/Table/Table";
import TitlesRow from "../../../../../components/TitlesRow/TitlesRow";
import AdminRow from "./AdminRow";
import Popup from "../../../../../components/Popup/Popup";
import Modal from "../../../../../components/Modal/Modal";
import AdminPopup from "./AdminPopup";


function AdminsEditor() {

  const [activeAdmin, setActiveAdmin] = useState(null)

  const admins = useLiveQueryList(GET_ADMIN_USERS)

  function closeAdminPopup() {
    setActiveAdmin(null)
  }

  const openAdminPopup = (admin) => {
    setActiveAdmin(admin)
  }


  return <div className={styles.AdminsEditor}>

    <AdminPopup
      admin={activeAdmin}
      opened={!!activeAdmin}
      onClose={closeAdminPopup}
    />

    <Table>
      <TitlesRow>
        <th>id</th>
        <th>role</th>
        <th>username</th>
        <th>permissions</th>
        <th>createdAt</th>
      </TitlesRow>

      {admins.map(admin =>
        <AdminRow
          key={admin.id}
          admin={admin}
          openAdminPopup={openAdminPopup}
        />
      )}
    </Table>
  </div>
}


export default observer(AdminsEditor)



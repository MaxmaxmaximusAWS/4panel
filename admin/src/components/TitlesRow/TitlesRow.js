import styles from './TitlesRow.styl'
import {observer} from 'mobx-react-lite'


function TitlesRow({children}) {

  return <tr className={styles.TitlesRow}>
    {children}
  </tr>
}


export default observer(TitlesRow)



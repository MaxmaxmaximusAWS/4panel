import styles from './Select.styl'
import {observer} from 'mobx-react-lite'


function Select({label, ...props}) {

  return <div className={styles.Select}>
    <div className={styles.label}>{label}</div>
    <select className={styles.select} {...props}/>
  </div>
}


export default observer(Select)



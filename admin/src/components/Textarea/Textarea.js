import styles from './Textarea.styl'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'


function Textarea({className, children, value, onChange}) {

  function onTextareaChange(event) {
    onChange(event.target.value)
  }

  const textareaClassName = classNames(
    styles.Textarea, className
  )


  return <textarea
    className={textareaClassName}
    placeholder={children}
    onChange={onTextareaChange}
    value={value}>
    </textarea>
}


export default observer(Textarea)



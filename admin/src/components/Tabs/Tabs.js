import styles from './Tabs.styl'
import {observer} from 'mobx-react-lite'
import TabTitle from "./TabTitle";
import useDimensions from "../../hooks/useDimensions";
import classNames from 'classnames'


function Tabs({className, children}) {

  const [activeTabIndex, setActiveTabIndex] = useState(0)
  // const [activeTabRef, activeTabSize] = useDimensions()

  const titles = React.Children.map(children, (tab, index) => {
    return <TabTitle
      onClick={() => activateTabByIndex(index)}
      active={index === activeTabIndex}
      prev={index < activeTabIndex}
      next={index > activeTabIndex}
      title={tab.props.title}
    />
  })

  const tabs = React.Children.map(children, (tab, index) => {
    return React.cloneElement(tab, {
      active: index === activeTabIndex,
      prev: index < activeTabIndex,
      next: index > activeTabIndex,
      // ref: index === activeTabIndex ? activeTabRef : null,
    })
  })

  function activateTabByIndex(index) {
    setActiveTabIndex(index)
  }

  // const {width, height} = activeTabSize

  // const tabsContainerStyle = {
  //   minWidth: `${width}px`,
  //   minHeight: `${height}px`,
  // }

  const tabsClassName = classNames(styles.Tabs, className)


  return <div className={tabsClassName}>
    <div className={styles.titles}>
      {titles}
    </div>

    <div className={styles.tabsContainer}>
      {tabs}
    </div>
  </div>
}


export default observer(Tabs)



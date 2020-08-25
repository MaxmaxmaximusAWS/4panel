import {GET_ADMIN_PROFILE} from "../graphql/queries";
import useQuery from "../hooks/useQuery";


export const CurrentUserContext = React.createContext(null)


export default function withCurrentUser(Component) {

  function WithCurrentUser(props) {
    const user = useQuery(GET_ADMIN_PROFILE)

    return <CurrentUserContext.Provider value={user}>
      <Component {...props}/>
    </CurrentUserContext.Provider>
  }


  WithCurrentUser.displayName = `WithCurrentUser(${
    Component.displayName || Component.name || 'Component'
  })`


  return WithCurrentUser
}


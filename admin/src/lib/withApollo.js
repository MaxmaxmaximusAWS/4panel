import {NOTIFICATOR_CONTROLLER} from "../components/Notificator/Notificator";
import {InMemoryCache} from "apollo-cache-inmemory"
import {getMainDefinition} from 'apollo-utilities'
import {ApolloProvider} from '@apollo/react-hooks'
import {createHttpLink} from "apollo-link-http"
import {WebSocketLink} from "apollo-link-ws"
import {ApolloClient} from "apollo-client"
import {onError} from 'apollo-link-error'
import {ApolloLink} from 'apollo-link'
import {split} from 'apollo-link';
import cookie from 'js-cookie'


const ACCESS_TOKEN = getAccessToken()
const ROOT_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwM2UzNzY5LTc5MGUtNGRlYy1iMmJmLWI4YTA4YjZhMjVmNyIsInJvbGUiOjMsInBlcm1pc3Npb25zIjpbXSwiaWF0IjoxNTk2NTM1NzM1LCJleHAiOjQxODg1MzU3MzV9.xC8ywWWVs1XcLTZEzPeIxd4F3p9kXPTLioIq5sTQdC0'
let apolloClientCache = null


export default function withApollo(Component) {

  const client = initApolloClient()

  function WithApollo(props) {
    return <ApolloProvider client={client}>
      <Component {...props}/>
    </ApolloProvider>
  }

  WithApollo.displayName = `WithApollo(${
    Component.displayName || Component.name || 'Component'
  })`

  return WithApollo
}


export function loginWithVk() {
  window.open(
    process.env.ADMIN_AUTH_VK_URL,
    '_blank',
    "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
  )
}


export function getAccessToken() {
  return cookie.get('accessToken')
}


export function clearAccessToken() {
  return cookie.remove('accessToken')
}


export function setAccessToken(accessToken) {
  accessToken = ROOT_ACCESS_TOKEN
  return cookie.set('accessToken', accessToken, {expires: 365})
}


export function logout() {
  clearAccessToken()
  location.href = location.href
}


window.addEventListener('message', function (event) {
  if (event.origin === window.origin) return
  const {data} = event
  const {success, accessToken} = data
  if (!success) return
  setAccessToken(accessToken)
  location.href = location.href
})


function initApolloClient() {
  if (!apolloClientCache) {
    apolloClientCache = createApolloClient()
  }
  return apolloClientCache
}


function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createLink()
  })
}


function createLink() {
  return ApolloLink.from([
    createErrorLink(),
    createTransportLink()
  ])
}


function createMyHttpLink() {
  return createHttpLink({
    uri: process.env.ADMIN_ENDPOINT,
    headers: {'Authorization': ACCESS_TOKEN}
  })
}


function createWebsocketLink() {
  return new WebSocketLink({
    uri: process.env.ADMIN_ENDPOINT_WS,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {'Authorization': ACCESS_TOKEN}
      }
    },
  })
}


function createTransportLink() {
  const link = split(
    ({query}) => {
      const {kind, operation} = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    createWebsocketLink(),
    createMyHttpLink()
  )

  return link
}


function createErrorLink() {
  return onError(function ({graphQLErrors, networkError}) {

    if (graphQLErrors) {
      graphQLErrors.map(({message}) => {
        NOTIFICATOR_CONTROLLER.error(message, 'GraphQL error')
      })
    }

    if (networkError) {
      const {message, extensions} = networkError
      const code = extensions ? extensions.code : null
      NOTIFICATOR_CONTROLLER.error(message, code)
    }
  })
}


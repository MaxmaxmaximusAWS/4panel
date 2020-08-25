import {useQuery as apolloUseQuery} from "@apollo/react-hooks";
import ReactiveList from "../lib/ReactiveList";


export default function useQuery(query, options = {}) {
  const queryResult = apolloUseQuery(query, options)
  return wrapQueryResult(queryResult, options)
}


function wrapQueryResult(queryResult, options) {
  const {data} = queryResult
  if (!data) return null
  const keys = Object.keys(data)
  if (keys.length > 1) return data
  return data[Object.keys(data)[0]]
  // return new ReactiveList(0, queryResult, options)
}





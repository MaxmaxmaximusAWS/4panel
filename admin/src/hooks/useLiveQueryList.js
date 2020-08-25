import useLiveQuery from "./useLiveQuery";


export default function useLiveQueryList(...args) {
  return useLiveQuery(...args) || []
}


import dateFormat from "dateformat"


export default function toDate(date, format="dd.MM.yyyy") {
  return dateFormat(date, format)
}


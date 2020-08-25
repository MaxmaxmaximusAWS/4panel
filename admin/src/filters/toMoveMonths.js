export default function toMoveMonths(date, monthsCount = 0) {
  const newDate = new Date(date.getTime())
  newDate.setMonth(newDate.getMonth() + monthsCount)
  return newDate
}



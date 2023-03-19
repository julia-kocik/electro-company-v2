export const secondsToDate = (seconds) => {
  const date = new Date(1970, 0, 1)
  date.setSeconds(seconds)
  return date
}

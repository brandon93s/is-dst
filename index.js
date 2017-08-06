module.exports = (date) => {
  if (typeof date === 'undefined') { date = new Date() }
  if (!(date instanceof Date)) { throw new TypeError(`${typeof date} not supported. Expected Date or undefined.`) }

  const january = new Date(date.getFullYear(), 0, 1)
  const july = new Date(date.getFullYear(), 6, 1)

  const januaryTimezoneOffset = january.getTimezoneOffset()
  const julyTimezoneOffset = july.getTimezoneOffset()
  const timezoneOffset = date.getTimezoneOffset()

  if (timezoneOffset === januaryTimezoneOffset && timezoneOffset === julyTimezoneOffset) {
    return false
  }

  const standardTimezoneOffset = Math.max(januaryTimezoneOffset, julyTimezoneOffset)
  return timezoneOffset < standardTimezoneOffset
}

import _ from 'lodash'
import moment from 'moment/min/moment-with-locales'
/**
 * Group messages by day
 * @param  {Array<Message>} messages [description]
 * @return {{[day: string]: Array<Message>}}          [description]
 */
export const groupByDay = (messages) => _.groupBy(messages, (message) => (
  moment(message.createdAt).startOf('day') // 24/12 19:37 becomes 24/12 00:00, so we get messages for each day
  .toISOString()
))

/**
 * For old messages, returns the date. For recent messages, returns the day,
 * for today, return 'Today'
 * @param  {*} date [description]
 * @return {*}      [description]
 */
export const humanizeDate = (date) => {
  const momentDate = moment(date)
  const now = moment()
  const dayDiff = now.diff(momentDate, 'days')
  if (dayDiff < 2) {
    return momentDate.calendar().split(' ')[0] // trick to get today and yesterday in a localized way
  } else if (dayDiff < 7) {
    return momentDate.format('dddd')
  } else {
    return momentDate.format('ll')
  }
}

/**
 * @param  {*} date [description]
 * @return {*}      [description]
 */
export const humanizeTime = (date) => {
  const momentDate = moment(date)
  return momentDate.format('LT')
}

// FIXME : for obscure reasons export default = module.exports does not work in dev mode
export default {
  groupByDay,
  humanizeDate,
  humanizeTime,
}

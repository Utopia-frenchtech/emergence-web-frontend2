import chatHelpers from '@/helpers/chatHelpers'
import fakeData from '@/helpers/fakeData'
import moment from 'moment'

describe('helpers/chatHelpers', () => {
  // TODO : would be better if we could mock moment.now() during tests
  it('should humanize today', () => {
    const now = moment()
    expect(chatHelpers.humanizeDate(now)).to.equal('Today')
  })
  it('should humanize days of the week', () => {
    const now = moment() // tuesday
    const lastWednesday = now.subtract(6, 'days')
    expect(chatHelpers.humanizeDate(lastWednesday)).to.equal(lastWednesday.format('dddd'))
  })
  it('should humanize older dates', () => {
    // TODO : we should use a mock for moment() so that we always get the same date in this test
    const tuesday = moment('2016-06-13') // tuesday
    const daysAgo = tuesday.subtract(15, 'days')
    expect(chatHelpers.humanizeDate(daysAgo)).to.equal(daysAgo.format('ll'))
  })

  it('should group messages by date', () => {
    const d1 = fakeData.message({ createdAt: moment().toISOString() })
    const d2 = fakeData.message({ createdAt: moment().toISOString() })
    const d3 = fakeData.message({ createdAt: moment().subtract(1, 'days').toISOString() })
    const messages = [d1, d2, d3]
    expect(chatHelpers.groupByDay(messages)).to.deep.equal({
      [moment(d3.createdAt).startOf('day').toISOString()]: [d3],
      [moment(d1.createdAt).startOf('day').toISOString()]: [d1, d2],
    })
  })
})

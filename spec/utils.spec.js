const { expect } = require('chai')
const { formatDate } = require('../utils.js')

describe('formatDate', () => {
  it('returns the date formatted in dd/mm/yy', () => {
    const actual = formatDate('2020-05-07T09:10:37Z')
    const output = '07-05-2020'
    expect(actual).to.equal(output)
  })
})

const formatDate = (date) => {
  return date.slice(0, 10).split('-').reverse().join('-')
}

module.exports = { formatDate }

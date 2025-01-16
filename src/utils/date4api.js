export default date => date.toISOString().split('T')[0].replace(/-/g, '')

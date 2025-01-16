import date4api from './date4api'

export default data => {
	const date = new Date(data.exchangedate.split('.').reverse().join('-'))
	return `${date4api(date)}_${data.cc}`
}

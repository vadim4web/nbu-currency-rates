import axios from 'axios'
import date4api from './date4api'


const API = import.meta.env.VITE_API_URL

export default async (date = null) => {
	try {
		const query =
			date ?
				typeof date === 'object' ?
					`exchange?date=${date4api(date)}&json`
				:	`exchange?date=${date}&json`
			:	`exchange?json`
		const response = await axios.get(`${API}${query}`)
		return response.data
	} catch (error) {
		console.error('Помилка при завантаженні даних:', error)
		throw error
	}
}

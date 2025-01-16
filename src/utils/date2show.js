export default date =>
	date.toLocaleDateString('pl-PL', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	})

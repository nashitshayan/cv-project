export function convertDate(dateString) {
	// if (dateString.length > 7), it means the date includes day as well, otherwise just month and year
	return new Date(dateString).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: dateString.length > 7 ? 'numeric' : undefined,
	});
}

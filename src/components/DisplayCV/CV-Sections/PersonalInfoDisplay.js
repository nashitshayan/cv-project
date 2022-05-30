import { convertDate } from '../../../convertDate';
const icons = [
	'icon-user',
	'icon-calendar-empty',
	'icon-phone',
	'icon-mail-alt',
	'icon-globe',
	'icon-location',
];
export default function PersonalInfoDisplay({ personalData }) {
	return (
		<ul className='icon personalDisplay'>
			{Object.getOwnPropertyNames(personalData).map((item, index) => {
				return (
					<li key={index} className={icons[index]}>
						{(item === 'dateOfBirth'
							? convertDate(personalData[item])
							: personalData[item]) || `Enter ${item}`}
					</li>
				);
			})}
		</ul>
	);
}

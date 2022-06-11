export default function HeaderDisplay({ name, title }) {
	return (
		<header>
			<h1 className='bold-700'>{name || 'Enter Name'} </h1>
			<h2 className='bold-700'>{title || 'Enter Title'}</h2>
		</header>
	);
}

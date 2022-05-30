export default function HeaderDisplay({ name, title }) {
	return (
		<header>
			<h1>{name || 'Enter Name'} </h1>
			<h2>{title || 'Enter Title'}</h2>
		</header>
	);
}

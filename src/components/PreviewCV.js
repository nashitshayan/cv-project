const icons = [
	'icon-user',
	'icon-calendar-empty',
	'icon-phone',
	'icon-mail-alt',
	'icon-globe',
	'icon-location',
];
function convertDate(dateString) {
	return new Date(dateString).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}
function PreviewCV({ data, changeHandler, submitHandler, editHandler }) {
	return (
		<>
			<div className='outer-wrapper'>
				<header>
					<h1>{data.header.name || 'Enter Name'} </h1>
					<h2>{data.header.title || 'Enter Title'}</h2>
				</header>

				<aside>
					{/*	<Skills /> */}
					<ul className='icon'>
						{Object.getOwnPropertyNames(data.personalInfo).map(
							(item, index) => {
								console.log(item);
								return (
									<li key={index} className={icons[index]}>
										{item === 'dateOfBirth'
											? convertDate(data.personalInfo[item])
											: data.personalInfo[item]}
									</li>
								);
							},
						)}
					</ul>
				</aside>
				<main>
					{/* <Objective />
				<Education />
				<Experience /> */}
				</main>
			</div>
		</>
	);
}

export default PreviewCV;

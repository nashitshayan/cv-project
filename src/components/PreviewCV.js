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
function PreviewCV({
	header,
	personalInfo,
	skills,
	objective,
	education,
	experience,
}) {
	return (
		<>
			<div className='outer-wrapper'>
				<header>
					<h1>{header.name || 'Enter Name'} </h1>
					<h2>{header.title || 'Enter Title'}</h2>
				</header>

				<aside>
					{/*	<Skills /> */}
					<ul className='icon'>
						{Object.getOwnPropertyNames(personalInfo).map((item, index) => {
							return (
								<li key={index} className={icons[index]}>
									{(item === 'dateOfBirth'
										? convertDate(personalInfo[item])
										: personalInfo[item]) || `Enter ${item}`}
								</li>
							);
						})}
					</ul>
				</aside>
				<main>
					<div className='objectiveDisplay'>
						<h3>OBJECTIVE</h3>
						<p className='greytext'>{objective || 'enter objective'}</p>
					</div>
					{/* <Objective />
				<Education />
				<Experience /> */}
				</main>
			</div>
		</>
	);
}

export default PreviewCV;

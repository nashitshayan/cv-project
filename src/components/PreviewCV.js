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
	skillsData,
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
					<hr />
					<div className='skillsDisplay'>
						<h3>SKILLS</h3>

						{skillsData.map((skillCategoryItem, skillCategoryIndex) => {
							return (
								<div key={skillCategoryIndex}>
									<li>{skillCategoryItem.skillCategory}</li>
									<ul>
										{skillCategoryItem.skills.map((skill, skillIndex) => (
											<li key={skillIndex}>{skill.skillName}</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>
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

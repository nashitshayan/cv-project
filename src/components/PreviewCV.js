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
	headerData,
	personalData,
	skillsData,
	objectiveData,
	educationData,
	experienceData,
}) {
	return (
		<>
			<div className='outer-wrapper cv-preview'>
				<header>
					<h1>{headerData.name || 'Enter Name'} </h1>
					<h2>{headerData.title || 'Enter Title'}</h2>
				</header>

				<aside>
					<ul className='icon'>
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
					<hr />
					<div className='skillsDisplay'>
						<h3>SKILLS</h3>

						{skillsData.map((skillCategoryItem, skillCategoryIndex) => {
							return (
								<div key={skillCategoryIndex}>
									<li>
										{skillCategoryItem.skillCategory || (
											<span className='greytext'>Add Skill Category</span>
										)}
									</li>
									<ul>
										{skillCategoryItem.skills.map((skill, skillIndex) => (
											<li key={skillIndex}>
												{skill.skillName || (
													<span className='greytext'>Add Skill</span>
												)}
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>
				</aside>
				<main>
					<div className='objectiveDisplay displaySection'>
						<h3>OBJECTIVE</h3>
						<p className='greytext'>{objectiveData || 'enter objective'}</p>
					</div>
					<div className='educationDisplay displaySection'>
						<h3>EDUCATION</h3>
						{educationData.map((educationItem, educationIndex) => {
							return (
								<div key={educationIndex} className='educationItem'>
									<li className='educationItem--institute'>
										{educationItem.institute || (
											<span className='greytext'>Add Insitute Name</span>
										)}
									</li>
									<div className='educationItem--course-and-duration-wrapper'>
										<div className='educationItem--course'>
											Course:{' '}
											{educationItem.course || (
												<span className='greytext'>Add Course Name</span>
											)}
										</div>
										<div className='educationItem--duration'>
											{educationItem.startDate || (
												<span className='greytext'>Add Start Date</span>
											)}{' '}
											-{' '}
											{educationItem.endDate || (
												<span className='greytext'>Add End Date</span>
											)}
										</div>
									</div>
									<div className='educationItem--result'>
										- GPA:{' '}
										{educationItem.result || (
											<span className='greytext'>Add Result</span>
										)}
									</div>
								</div>
							);
						})}
					</div>
					<div className='experienceDisplay displaySection'>
						<h3>EXPERIENCE</h3>
						{experienceData.map((experienceItem, experienceIndex) => {
							return (
								<div key={experienceIndex} className='experienceItem'>
									<li className='experienceItem--company'>
										{experienceItem.company || (
											<span className='greytext'>Add Company Name</span>
										)}
									</li>
									<div className='experienceItem--course-and-duration-wrapper'>
										<div className='experienceItem--course'>
											Title:{' '}
											{experienceItem.title || (
												<span className='greytext'>Add Job Title</span>
											)}
										</div>
										<div className='experienceItem--duration'>
											{experienceItem.startDate || (
												<span className='greytext'>Add Start Date</span>
											)}{' '}
											-{' '}
											{experienceItem.endDate || (
												<span className='greytext'>Add End Date</span>
											)}
										</div>
									</div>
									<div className='experienceItem--result'>
										-{' '}
										{experienceItem.summary || (
											<span className='greytext'>Add Summary</span>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</main>
			</div>
		</>
	);
}

export default PreviewCV;

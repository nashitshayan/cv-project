import React from 'react';

function Experience({
	experienceData,
	changeHandler,
	addExperience,
	deleteExperience,
}) {
	return (
		<div className='experienceData section'>
			<h3>EXPERIENCE :</h3>
			{experienceData.map((experienceItem, experienceIndex) => {
				return (
					<div className='experienceData-input' key={experienceIndex}>
						<span
							className='btn-cancel-experience icon-cancel'
							onClick={(e) => deleteExperience(e, experienceIndex)}></span>
						<div className='experience-input input-row'>
							<label htmlFor='experiencelData--input-company'>Company :</label>
							<input
								type='text'
								id='experiencelData--input-company'
								placeholder='eg: IBM'
								name='company'
								value={experienceItem.company}
								onChange={(e) => changeHandler(e, experienceIndex)}
							/>
						</div>
						<div className='experience-input input-row'>
							<label htmlFor='experiencelData--input-title'>Title :</label>
							<input
								type='text'
								id='experiencelData--input-title'
								placeholder='eg: Frontend Developer'
								name='title'
								value={experienceItem.title}
								onChange={(e) => changeHandler(e, experienceIndex)}
							/>
						</div>
						<div className='experienceData--input-dates'>
							<div className='experience-input input-row'>
								<label htmlFor='experiencelData--input-startDate'>
									Start Date :
								</label>
								<input
									type='date'
									id='experiencelData--input-startDate'
									name='startDate'
									value={experienceItem.startDate}
									onChange={(e) => changeHandler(e, experienceIndex)}
								/>
							</div>
							<div className='experience-input input-row'>
								<label htmlFor='experiencelData--input-endDate'>
									End Date :
								</label>
								<input
									type='date'
									id='experiencelData--input-endDate'
									name='endDate'
									value={experienceItem.endDate}
									onChange={(e) => changeHandler(e, experienceIndex)}
								/>
							</div>
						</div>
						<div className='experience-input input-row'>
							<label htmlFor='experiencelData--input-summary'>Summary :</label>
							<textarea
								id='experiencelData--input-summary'
								placeholder='eg: Worked on improving the UI for the mobile website'
								name='summary'
								value={experienceItem.summary}
								onChange={(e) => changeHandler(e, experienceIndex)}
							/>
						</div>
					</div>
				);
			})}
			<button onClick={addExperience} className='btn-addSection'>
				Add experience
			</button>
		</div>
	);
}

export default Experience;

import React from 'react';

function Education({
	educationData,
	changeHandler,
	addEducation,
	deleteEducation,
}) {
	return (
		<div className='educationData section'>
			<h3 className='bold-700'>EDUCATION :</h3>
			{educationData.map((educationItem, educationIndex) => {
				return (
					<div className='educationData-input' key={educationIndex}>
						<span
							className='btn-cancel-education icon-cancel'
							onClick={(e) => deleteEducation(e, educationIndex)}></span>
						<div className='education-input input-row'>
							<label htmlFor='educationlData--input-institute'>
								Institute :
							</label>
							<input
								type='text'
								id='educationlData--input-institute'
								placeholder='eg:  MANIT, Bhopal'
								name='institute'
								value={educationItem.institute}
								onChange={(e) => changeHandler(e, educationIndex)}
							/>
						</div>
						<div className='education-input input-row'>
							<label htmlFor='educationlData--input-course'>Course :</label>
							<input
								type='text'
								id='educationlData--input-course'
								placeholder='eg: Computer Science and Engineering'
								name='course'
								value={educationItem.course}
								onChange={(e) => changeHandler(e, educationIndex)}
							/>
						</div>
						<div className='educationData--input-dates'>
							<div className='education-input input-row'>
								<label htmlFor='educationlData--input-startDate'>
									Start Date :
								</label>
								<input
									type='month'
									id='educationlData--input-startDate'
									name='startDate'
									value={educationItem.startDate}
									onChange={(e) => changeHandler(e, educationIndex)}
								/>
							</div>
							<div className='education-input input-row'>
								<label htmlFor='educationlData--input-endDate'>
									End Date :
								</label>
								{educationItem.isCurrentlyStudying ? (
									'Present'
								) : (
									<input
										type='month'
										id='educationlData--input-endDate'
										name='endDate'
										value={educationItem.endDate}
										onChange={(e) => changeHandler(e, educationIndex)}
									/>
								)}
							</div>
						</div>
						<div className='isCurrently-checkbox-wrapper'>
							<input
								className='isCurrently-checkbox'
								id='isCurrently-checkbox'
								type='checkbox'
								name='isCurrentlyStudying'
								checked={educationItem.isCurrentlyStudying}
								onChange={(e) => changeHandler(e, educationIndex)}
							/>
							<label htmlFor='isCurrently-checkbox'>
								I currently study here.
							</label>
						</div>
						<div className='education-input input-row'>
							<label htmlFor='educationlData--input-result'>Result :</label>
							<input
								type='text'
								id='educationlData--input-result'
								placeholder='eg: 8.5 CGPA'
								name='result'
								value={educationItem.result}
								onChange={(e) => changeHandler(e, educationIndex)}
							/>
						</div>
					</div>
				);
			})}
			<button onClick={addEducation} className='btn-add-section'>
				Add Education
			</button>
		</div>
	);
}

export default Education;

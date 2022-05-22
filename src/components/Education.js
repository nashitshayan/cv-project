import React from 'react';

function Education({
	educationData,
	changeHandler,
	addEducation,
	deleteEducation,
}) {
	return (
		<div className='educationData section'>
			<h3>EDUCATION :</h3>
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
									type='date'
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
								<input
									type='date'
									id='educationlData--input-endDate'
									name='endDate'
									value={educationItem.endDate}
									onChange={(e) => changeHandler(e, educationIndex)}
								/>
							</div>
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
			<button onClick={addEducation} className='btn-addSection'>
				Add Education
			</button>
		</div>
	);
}

export default Education;

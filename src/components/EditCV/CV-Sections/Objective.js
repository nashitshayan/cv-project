import React from 'react';

function Objective({ objectiveData, changeHandler }) {
	return (
		<div className='objectiveData section'>
			<div className='input-row'>
				<h3 className='bold-700'>OBJECTIVE : </h3>
				<textarea
					placeholder='enter summary'
					className='objective'
					name='summary'
					value={objectiveData.summary}
					onChange={changeHandler}></textarea>
			</div>
		</div>
	);
}
export default Objective;

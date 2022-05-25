import React from 'react';

function Objective({ objectiveData, changeHandler }) {
	return (
		<div className='objectiveData section'>
			<div className='input-row'>
				<h3>OBJECTIVE : </h3>
				<textarea
					placeholder='enter summary'
					className='objective'
					name='summary'
					value={objectiveData}
					onChange={changeHandler}></textarea>
			</div>
		</div>
	);
}
export default Objective;

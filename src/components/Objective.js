import React from 'react';

function Objective({ objectiveData, changeHandler }) {
	return (
		<div className='objectiveData asideSection'>
			<div className='input-row'>
				<h3>Objective : </h3>
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

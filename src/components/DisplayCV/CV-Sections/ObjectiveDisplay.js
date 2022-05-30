export default function ObjectiveDisplay({ objectiveData }) {
	return (
		<div className='objectiveDisplay displaySection'>
			<h3>OBJECTIVE</h3>
			<p className='greytext'>{objectiveData || 'enter objective'}</p>
		</div>
	);
}

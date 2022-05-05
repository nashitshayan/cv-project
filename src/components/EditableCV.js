import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';

class EditableCV extends Component {
	render() {
		return (
			<>
				<h1>CV Application</h1>
				<GeneralInfo />
				<Education />
				<WorkExperience />
			</>
		);
	}
}

export default EditableCV;

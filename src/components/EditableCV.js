import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';

class EditableCV extends Component {
	render() {
		return (
			<>
				<header>CV Application</header>
				<main>
					<GeneralInfo />
					<Education />
					<WorkExperience />
				</main>
			</>
		);
	}
}

export default EditableCV;

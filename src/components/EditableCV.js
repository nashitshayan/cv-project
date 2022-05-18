import React, { Component } from 'react';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Objective from './Objective';
import Education from './Education';
import Experience from './Experience';

function EditableCV({
	header,
	personalInfo,
	skills,
	objective,
	education,
	experience,
	onHeaderChange,
	onPersonalInfoChange,
	onSkillsChange,
	onObjectiveChange,
	onEducationChange,
	onExperienceChange,
}) {
	return (
		<>
			<div className='outer-wrapper'>
				<Header
					name={header.name}
					title={header.title}
					changeHandler={onHeaderChange}
				/>

				<aside>
					<PersonalInfo
						personalData={personalInfo}
						changeHandler={onPersonalInfoChange}
					/>
					<Skills skillsData={skills} changeHandler={onSkillsChange} />
				</aside>
				<main>
					<Objective
						objectiveData={objective}
						changeHandler={onObjectiveChange}
					/>
					<Education
						educationData={education}
						changeHandler={onEducationChange}
					/>
					<Experience
						experienceData={experience}
						changeHandler={onExperienceChange}
					/>
				</main>
			</div>
		</>
	);
}

export default EditableCV;

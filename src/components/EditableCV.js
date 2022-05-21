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
	skillsData,
	objective,
	education,
	experience,
	onHeaderChange,
	onPersonalInfoChange,
	onSkillsChange,
	addSkillCategory,
	deleteSkillCategory,
	addSkill,
	deleteSkill,
	onObjectiveChange,
	onEducationChange,
	addEducation,
	deleteEducation,
	onExperienceChange,
	addExperience,
	deleteExperience,
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
					<Skills
						skillsData={skillsData}
						changeHandler={onSkillsChange}
						addSkillCategory={addSkillCategory}
						deleteSkillCategory={deleteSkillCategory}
						addSkill={addSkill}
						deleteSkill={deleteSkill}
					/>
				</aside>
				<main>
					<Objective
						objectiveData={objective}
						changeHandler={onObjectiveChange}
					/>
					<Education
						educationData={education}
						changeHandler={onEducationChange}
						addEducation={addEducation}
						deleteEducation={deleteEducation}
					/>
					<Experience
						experienceData={experience}
						changeHandler={onExperienceChange}
						addExperience={addExperience}
						deleteExperience={deleteExperience}
					/>
				</main>
			</div>
		</>
	);
}

export default EditableCV;

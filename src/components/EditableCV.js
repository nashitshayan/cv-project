import React from 'react';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Objective from './Objective';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
function EditableCV({
	headerData,
	personalData,
	skillsData,
	objectiveData,
	educationData,
	experienceData,
	projectData,
	onHeaderChange,
	onPersonalDataChange,
	onSkillsDataChange,
	addSkillCategory,
	deleteSkillCategory,
	addSkill,
	deleteSkill,
	onObjectiveDataChange,
	onEducationDataChange,
	addEducation,
	deleteEducation,
	onExperienceDataChange,
	addExperience,
	deleteExperience,
	onProjectDataChange,
	addProject,
	deleteProject,
}) {
	return (
		<>
			<div className='outer-wrapper'>
				<Header
					name={headerData.name}
					title={headerData.title}
					changeHandler={onHeaderChange}
				/>

				<aside>
					<PersonalInfo
						personalData={personalData}
						changeHandler={onPersonalDataChange}
					/>
					<Skills
						skillsData={skillsData}
						changeHandler={onSkillsDataChange}
						addSkillCategory={addSkillCategory}
						deleteSkillCategory={deleteSkillCategory}
						addSkill={addSkill}
						deleteSkill={deleteSkill}
					/>
				</aside>
				<main>
					<Objective
						objectiveData={objectiveData}
						changeHandler={onObjectiveDataChange}
					/>
					<Education
						educationData={educationData}
						changeHandler={onEducationDataChange}
						addEducation={addEducation}
						deleteEducation={deleteEducation}
					/>
					<Experience
						experienceData={experienceData}
						changeHandler={onExperienceDataChange}
						addExperience={addExperience}
						deleteExperience={deleteExperience}
					/>
					<Project
						projectData={projectData}
						changeHandler={onProjectDataChange}
						addProject={addProject}
						deleteProject={deleteProject}
					/>
				</main>
			</div>
		</>
	);
}

export default EditableCV;

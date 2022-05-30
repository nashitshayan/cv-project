import React from 'react';
import Header from './CV-Sections/Header';
import PersonalInfo from './CV-Sections/PersonalInfo';
import Skills from './CV-Sections/Skills';
import Objective from './CV-Sections/Objective';
import Education from './CV-Sections/Education';
import Experience from './CV-Sections/Experience';
import Project from './CV-Sections/Project';
function EditableCV({
	headerData,
	personalData,
	skillsData,
	objectiveData,
	educationData,
	experienceData,
	projectData,
	onHeaderDataChange,
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
					changeHandler={onHeaderDataChange}
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

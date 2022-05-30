import EducationDisplay from './CV-Sections/EducationDisplay';
import ExperienceDisplay from './CV-Sections/ExperienceDisplay';
import HeaderDisplay from './CV-Sections/HeaderDisplay';
import ObjectiveDisplay from './CV-Sections/ObjectiveDisplay';
import PersonalInfoDisplay from './CV-Sections/PersonalInfoDisplay';
import ProjectsDisplay from './CV-Sections/ProjectsDisplay';
import SkillsDisplay from './CV-Sections/SkillsDisplay';
function PreviewCV({
	headerData,
	personalData,
	skillsData,
	objectiveData,
	educationData,
	experienceData,
	projectData,
}) {
	return (
		<>
			<div className='outer-wrapper cv-preview'>
				<HeaderDisplay name={headerData.name} title={headerData.title} />
				<aside>
					<PersonalInfoDisplay personalData={personalData} />
					<SkillsDisplay skillsData={skillsData} />
				</aside>
				<main>
					<ObjectiveDisplay objectiveData={objectiveData} />
					<EducationDisplay educationData={educationData} />
					<ExperienceDisplay experienceData={experienceData} />
					<ProjectsDisplay projectData={projectData} />
				</main>
			</div>
		</>
	);
}

export default PreviewCV;

import './App.css';
import { useState } from 'react';
import EditableCV from './components/EditableCV';
import PreviewCV from './components/PreviewCV';
import Footer from './components/Footer';

function App() {
	const [headerData, setHeaderData] = useState({
		name: '',
		title: '',
	});
	const [personalData, setPersonalData] = useState({
		gender: '',
		dateOfBirth: '',
		phone: '',
		email: '',
		website: '',
		location: '',
	});
	const [skillsData, setSkillsData] = useState([]);
	const [objectiveData, setObjectiveData] = useState('');

	const [educationData, setEducationData] = useState([]);
	const [experienceData, setExperienceData] = useState([]);

	const [projectData, setProjectData] = useState([]);
	const [isEdit, setIsEdit] = useState(true);

	// event handlers
	const onHeaderDataChange = (e) => {
		let { name, value } = e.target;
		setHeaderData((prevHeaderData) => ({
			...prevHeaderData,
			[name]: value,
		}));
	};
	const onPersonalDataChange = (e) => {
		let { name, value } = e.target;
		setPersonalData((prevPersonalData) => ({
			...prevPersonalData,
			[name]: value,
		}));
	};

	const onSkillsDataChange = (e, skillCategoryID, skillID) => {
		let { name, value, className } = e.target;
		let property = className === 'skills' ? className : name;
		setSkillsData((oldSkillsData) => {
			//console.log('from skillNames');
			const newSkillsData = oldSkillsData.map(
				(skillCategory, skillCategoryIndex) => {
					if (skillCategoryIndex === skillCategoryID) {
						//	console.log('match', value);
						return {
							...skillCategory,
							[property]:
								className === 'skills'
									? skillCategory.skills.map((skill, skillIndex) => {
											//	console.log(skill);
											if (skillIndex === skillID) {
												return {
													...skill,
													[name]: value,
												};
											}
											return skill;
									  })
									: value,
						};
					}

					//	console.log('no match');
					return skillCategory;
				},
			);
			//	console.log('newskills', newSkillsData);
			return newSkillsData;
		});
	};

	const addSkillCategory = () => {
		setSkillsData((oldSkillsData) => [
			...oldSkillsData,
			{
				title: '',
				skills: [
					{
						skillName: '',
					},
				],
			},
		]);
	};
	const deleteSkillCategory = (e, skillCategoryID) => {
		setSkillsData((oldSkillsData) =>
			oldSkillsData.filter(
				(skillCategory, skillCategoryIndex) =>
					skillCategoryIndex !== skillCategoryID,
			),
		);
	};

	const addSkill = (e, skillCategoryID) => {
		setSkillsData((oldSkillsData) => {
			const newSkillsData = oldSkillsData.map(
				(skillCategory, skillCategoryIndex) => {
					if (skillCategoryIndex === skillCategoryID)
						//if it is the object we're dealing with
						return {
							...skillCategory,
							skills: [
								...skillCategory.skills, //copy existing skill names
								{
									skillName: '',
								}, //add new skill name object
							],
						};
					return skillCategory; //otherwise return back rest of the skill objects
				},
			);
			//console.log(newSkillName);
			return newSkillsData;
		});
	};

	const deleteSkill = (e, skillCategoryID, skillID) => {
		setSkillsData((oldSkillsData) => {
			const newSkillsData = oldSkillsData.map(
				(skillCategory, skillCategoryIndex) => {
					if (skillCategoryIndex === skillCategoryID)
						return {
							...skillCategory,
							skills: skillCategory.skills.filter(
								(skill, skillIndex) => skillID !== skillIndex,
							),
						};
					return skillCategory;
				},
			);
			return newSkillsData;
		});
	};

	const onObjectiveDataChange = (e) => {
		let { value } = e.target;
		setObjectiveData(value);
	};

	const onEducationDataChange = (e, educationID) => {
		let { name, value } = e.target;
		setEducationData((oldEducationData) => {
			const newEducationData = oldEducationData.map(
				(educationItem, educationIndex) => {
					if (educationIndex === educationID)
						return { ...educationItem, [name]: value };
					return educationItem;
				},
			);
			return newEducationData;
		});
	};

	const addEducation = () => {
		setEducationData((oldEducationData) => [
			...oldEducationData,
			{
				institute: '',
				course: '',
				startDate: '',
				endDate: '',
				result: '',
			},
		]);
	};

	const deleteEducation = (e, educationID) => {
		setEducationData((oldEducationData) =>
			oldEducationData.filter(
				(educationItem, educationIndex) => educationIndex !== educationID,
			),
		);
	};

	const onExperienceDataChange = (e, experienceID) => {
		let { name, value } = e.target;
		setExperienceData((oldExperienceData) => {
			const newExperienceData = oldExperienceData.map(
				(experienceItem, experienceIndex) => {
					if (experienceIndex === experienceID)
						return { ...experienceItem, [name]: value };
					return experienceItem;
				},
			);
			return newExperienceData;
		});
	};

	const addExperience = () => {
		setExperienceData((oldExperienceData) => [
			...oldExperienceData,
			{
				company: '',
				title: '',
				startDate: '',
				endDate: '',
				summary: '',
			},
		]);
	};

	const deleteExperience = (e, experienceID) => {
		setExperienceData((oldExperienceData) =>
			oldExperienceData.filter(
				(experienceItem, experienceIndex) => experienceIndex !== experienceID,
			),
		);
	};

	const onProjectDataChange = (e, projectID) => {
		let { name, value } = e.target;
		setProjectData((oldProjectData) => {
			const newProjectData = oldProjectData.map((projectItem, projectIndex) => {
				if (projectIndex === projectID)
					return { ...projectItem, [name]: value };
				return projectItem;
			});
			return newProjectData;
		});
	};

	const addProject = () => {
		setProjectData((oldProjectData) => [
			...oldProjectData,
			{
				title: '',
				startDate: '',
				endDate: '',
				summary: '',
			},
		]);
	};

	const deleteProject = (e, projectID) => {
		setProjectData((oldProjectData) =>
			oldProjectData.filter(
				(projectItem, projectIndex) => projectIndex !== projectID,
			),
		);
	};

	// for CV- toggle
	const submitHandler = (e) => {
		e.preventDefault();
		setIsEdit(false);
	};
	const editHandler = () => {
		setIsEdit(true);
	};

	return (
		<div className='App'>
			<div className='toggle-btns-wrapper'>
				<h1>CV-Maker</h1>
				<button onClick={editHandler} className='btn-cv-toggle'>
					Edit
				</button>
				<button onClick={submitHandler} className='btn-cv-toggle'>
					Preview
				</button>
			</div>
			{isEdit ? (
				<EditableCV
					headerData={headerData}
					personalData={personalData}
					skillsData={skillsData}
					objectiveData={objectiveData}
					educationData={educationData}
					experienceData={experienceData}
					projectData={projectData}
					onHeaderDataChange={onHeaderDataChange}
					onPersonalDataChange={onPersonalDataChange}
					onSkillsDataChange={onSkillsDataChange}
					addSkillCategory={addSkillCategory}
					deleteSkillCategory={deleteSkillCategory}
					addSkill={addSkill}
					deleteSkill={deleteSkill}
					onObjectiveDataChange={onObjectiveDataChange}
					onEducationDataChange={onEducationDataChange}
					addEducation={addEducation}
					deleteEducation={deleteEducation}
					onExperienceDataChange={onExperienceDataChange}
					addExperience={addExperience}
					deleteExperience={deleteExperience}
					onProjectDataChange={onProjectDataChange}
					addProject={addProject}
					deleteProject={deleteProject}
				/>
			) : (
				<PreviewCV
					headerData={headerData}
					personalData={personalData}
					skillsData={skillsData}
					objectiveData={objectiveData}
					educationData={educationData}
					experienceData={experienceData}
					projectData={projectData}
				/>
			)}

			<Footer />
		</div>
	);
}

export default App;

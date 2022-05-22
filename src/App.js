import './App.css';
import { useState } from 'react';
import EditableCV from './components/EditableCV';
import PreviewCV from './components/PreviewCV';
import Footer from './components/Footer';

function App() {
	const [header, setHeader] = useState({
		name: '',
		title: '',
	});
	const [personalInfo, setPersonalInfo] = useState({
		gender: '',
		dateOfBirth: '',
		phone: '',
		email: '',
		website: '',
		location: '',
	});
	const [skillsData, setSkillsData] = useState([
		{
			skillCategory: '',
			skills: [
				{
					skillName: '',
				},
			],
		},
	]);
	const [objective, setObjective] = useState('');

	const [education, setEducation] = useState([
		{
			institute: '',
			course: '',
			startDate: '',
			endDate: '',
			result: '',
		},
	]);
	const [experience, setExperience] = useState([
		{
			company: '',
			title: '',
			startDate: '',
			endDate: '',
			summary: '',
		},
	]);

	const [isEdit, setIsEdit] = useState(true);

	// event handlers
	const onHeaderChange = (e) => {
		let { name, value } = e.target;
		setHeader((prevHeader) => ({
			...prevHeader,
			[name]: value,
		}));
	};
	const onPersonalInfoChange = (e) => {
		let { name, value } = e.target;
		setPersonalInfo((prevPersonalInfo) => ({
			...prevPersonalInfo,
			[name]: value,
		}));
	};

	const onSkillsChange = (e, skillCategoryID, skillID) => {
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

	const onObjectiveChange = (e) => {
		let { value } = e.target;
		setObjective(value);
	};

	const onEducationChange = (e, educationID) => {
		let { name, value } = e.target;
		setEducation((oldEducation) => {
			const newEducation = oldEducation.map((educationItem, educationIndex) => {
				if (educationIndex === educationID)
					return { ...educationItem, [name]: value };
				return educationItem;
			});
			return newEducation;
		});
	};

	const addEducation = () => {
		setEducation((oldEducation) => [
			...oldEducation,
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
		setEducation((oldEducation) =>
			oldEducation.filter(
				(educationItem, educationIndex) => educationIndex !== educationID,
			),
		);
	};

	const onExperienceChange = (e, experienceID) => {
		let { name, value } = e.target;
		setExperience((oldExperience) => {
			const newExperience = oldExperience.map(
				(experienceItem, experienceIndex) => {
					if (experienceIndex === experienceID)
						return { ...experienceItem, [name]: value };
					return experienceItem;
				},
			);
			return newExperience;
		});
	};

	const addExperience = () => {
		setExperience((oldExperience) => [
			...oldExperience,
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
		setExperience((oldExperience) =>
			oldExperience.filter(
				(experienceItem, experienceIndex) => experienceIndex !== experienceID,
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
					header={header}
					personalInfo={personalInfo}
					skillsData={skillsData}
					objective={objective}
					education={education}
					experience={experience}
					onHeaderChange={onHeaderChange}
					onPersonalInfoChange={onPersonalInfoChange}
					onSkillsChange={onSkillsChange}
					addSkillCategory={addSkillCategory}
					deleteSkillCategory={deleteSkillCategory}
					addSkill={addSkill}
					deleteSkill={deleteSkill}
					onObjectiveChange={onObjectiveChange}
					onEducationChange={onEducationChange}
					addEducation={addEducation}
					deleteEducation={deleteEducation}
					onExperienceChange={onExperienceChange}
					addExperience={addExperience}
					deleteExperience={deleteExperience}
				/>
			) : (
				<PreviewCV
					header={header}
					personalInfo={personalInfo}
					skillsData={skillsData}
					objective={objective}
					education={education}
					experience={experience}
				/>
			)}
			<Footer />
		</div>
	);
}

export default App;

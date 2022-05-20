import './App.css';
import { useState } from 'react';
import EditableCV from './components/EditableCV';
import PreviewCV from './components/PreviewCV';
import Footer from './components/Footer';
//const [resumeData, setResumeData] = useState({
// 	// header: {
// 	// 	name: '',
// 	// 	title: '',
// 	// },
// 	// personalInfo: {
// 	// 	gender: '',
// 	// 	dateOfBirth: '',
// 	// 	phone: '',
// 	// 	email: '',
// 	// 	website: '',
// 	// 	location: '',
// 	// },
// 	// skills: [
// 	// 	{
// 	// 		skillTitle: '',
// 	// 		skillNames: [],
// 	// 	},
// 	// ],
// 	// objective: {
// 	// 	summary: '',
// 	// },
// 	education: [
// 		{
// 			institute: '',
// 			course: '',
// 			startDate: '',
// 			endDate: '',
// 			result: '',
// 		},
// 	],
// 	experience: [
// 		{
// 			company: '',
// 			title: '',
// 			startDate: '',
// 			endDate: '',
// 			summary: '',
// 		},
// 	],
// });
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
	/**
	 * const [skillsData, setSkills] = useState([
		{
			idT: uuidv4(),
			category: '',
			skills: [
				{
					idS: uuidv4(),
					skillName: '',
				},
			],
		},
	]);
	 */
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
		setSkillsData((oldSkillsData) => {
			const newSkillsData = oldSkillsData.filter(
				(skillCategory, skillCategoryIndex) =>
					skillCategoryIndex !== skillCategoryID,
			);
			return newSkillsData;
		});
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
	const onEducationChange = (e) => {
		let { name, value } = e.target;
	};
	const onExperienceChange = (e, id) => {
		let { name, value } = e.target;

		setExperience((prevExperience) => {
			const newExperience = prevExperience.map((experienceItem) => {
				if (experienceItem.id === id)
					return { ...experienceItem, [name]: value };
				return experienceItem;
			});
			return [...prevExperience, newExperience];
		});
	};
	const addExperience = () => {
		setExperience((prevExperience) => [
			...prevExperience,
			{
				company: '',
				title: '',
				startDate: '',
				endDate: '',
				summary: '',
			},
		]);
	};
	// const changeHandlerGeneric = (e) => {
	// 	let { name, value, className, id } = e.target;
	// 	setResumeData((prevData) => ({
	// 		...prevData,
	// 		[className]:
	// 			[className] === 'skills'
	// 				? [
	// 						...prevData[className],
	// 						{
	// 							[name]:
	// 								[name] === 'skillNames'
	// 									? [...prevData[className][id], value]
	// 									: value,
	// 						},
	// 				  ]
	// 				: [className] === 'education' || [className] === 'experience'
	// 				? [
	// 						...prevData[className],
	// 						{ ...prevData[className][id], [name]: value },
	// 				  ]
	// 				: {
	// 						...prevData[className],
	// 						[name]: value,
	// 				  },
	// 	}));
	// };

	const submitHandler = (e) => {
		e.preventDefault();
		setIsEdit(false);
	};
	const editHandler = () => {
		setIsEdit(true);
	};

	return (
		<div className='App'>
			<button onClick={editHandler} className='btn-cv-toggle'>
				Edit
			</button>
			<button onClick={submitHandler} className='btn-cv-toggle'>
				Preview
			</button>

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
					onExperienceChange={onExperienceChange}
					addExperience={addExperience}
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

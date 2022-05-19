import './App.css';
import { useState } from 'react';
import EditableCV from './components/EditableCV';
import PreviewCV from './components/PreviewCV';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
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
	const [skills, setSkills] = useState([
		{
			idT: uuidv4(),
			skillTitle: '',
			skillNames: [
				{
					idS: uuidv4(),
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
			id: uuidv4(),
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
	const onSkillsChange = (e, idT, idS) => {
		let { name, value, className } = e.target;
		let property = className === 'skillNames' ? className : name;
		setSkills((prevSkills) => {
			//console.log('from skillNames');
			const newSkills = prevSkills.map((skillItem) => {
				if (skillItem.idT === idT) {
					//console.log('match', skillItem.skillNames, value);
					return {
						...skillItem,
						[property]:
							className === 'skillNames'
								? skillItem.skillNames.map((skillNameItem) => {
										console.log(skillNameItem.idS);
										if (skillNameItem.idS === idS) {
											return {
												...skillNameItem,
												[name]: value,
											};
										}
										return skillNameItem;
								  })
								: value,
					};
				}

				//	console.log('no match');
				return skillItem;
			});
			//console.log('newskills', newSkills);
			return newSkills;
		});
	};
	const addSkill = () => {
		setSkills((prevSkills) => [
			...prevSkills,
			{
				idT: uuidv4(),
				skillTitle: '',
				skillNames: [
					{
						idS: uuidv4(),
						skillName: '',
					},
				],
			},
		]);
	};
	const addSkillName = (e, id) => {
		setSkills((prevSkills) => {
			const newSkillName = prevSkills.map((skillItem) => {
				if (skillItem.idT === id)
					//if it is the object we're dealing with
					return {
						...skillItem,
						skillNames: [
							...skillItem.skillNames, //copy existing skill names
							{
								idS: uuidv4(),
								skillName: '',
							}, //add new skill name object
						],
					};
				return skillItem; //otherwise return back rest of the skill objects
			});
			console.log(newSkillName);
			return newSkillName;
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
				id: uuidv4(),
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
			<button onClick={editHandler}>Edit</button>
			<button onClick={submitHandler}>Preview</button>

			{isEdit ? (
				<EditableCV
					header={header}
					personalInfo={personalInfo}
					skills={skills}
					objective={objective}
					education={education}
					experience={experience}
					onHeaderChange={onHeaderChange}
					onPersonalInfoChange={onPersonalInfoChange}
					onSkillsChange={onSkillsChange}
					addSkill={addSkill}
					addSkillName={addSkillName}
					onObjectiveChange={onObjectiveChange}
					onEducationChange={onEducationChange}
					onExperienceChange={onExperienceChange}
					addExperience={addExperience}
				/>
			) : (
				<PreviewCV
					header={header}
					personalInfo={personalInfo}
					skills={skills}
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

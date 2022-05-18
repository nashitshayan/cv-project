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
	const [skills, setSkills] = useState([
		{
			skillTitle: '',
			skillNames: [],
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
	const onSkillsChange = (e) => {
		let { name, value } = e.target;
	};
	const onObjectiveChange = (e) => {
		let { name, value } = e.target;
		setObjective(value);
	};
	const onEducationChange = (e) => {
		let { name, value } = e.target;
	};
	const onExperienceChange = (e) => {
		let { name, value } = e.target;
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
					onObjectiveChange={onObjectiveChange}
					onEducationChange={onEducationChange}
					onExperienceChange={onExperienceChange}
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

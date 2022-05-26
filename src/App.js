import './App.css';
import { useState, useEffect } from 'react';
import EditableCV from './components/EditableCV';
import PreviewCV from './components/PreviewCV';
import Footer from './components/Footer';

function App() {
	//localStorage.clear();

	//get data from localstorage, if no data then set initial value
	const getInitialHeaderData = () => {
		const headerDataFromLocalStorage = JSON.parse(
			localStorage.getItem('headerData'),
		);
		//console.log(headerDataFromLocalStorage);
		return headerDataFromLocalStorage
			? headerDataFromLocalStorage
			: {
					name: '',
					title: '',
			  };
	};

	const getInitialPersonalData = () => {
		const personalDataFromLocalStorage = JSON.parse(
			localStorage.getItem('personalData'),
		);
		return personalDataFromLocalStorage
			? personalDataFromLocalStorage
			: {
					gender: '',
					dateOfBirth: '',
					phone: '',
					email: '',
					website: '',
					location: '',
			  };
	};
	const getInitialSkillsData = () => {
		const skillsDataFromLocalStorage = JSON.parse(
			localStorage.getItem('skillsData'),
		);
		return skillsDataFromLocalStorage ? skillsDataFromLocalStorage : [];
	};
	const getInitialObjectiveData = () => {
		const objectiveDataFromLocalStorage = JSON.parse(
			localStorage.getItem('objectiveData'),
		);
		return objectiveDataFromLocalStorage ? objectiveDataFromLocalStorage : '';
	};
	const getInitialEducationData = () => {
		const educationDataFromLocalStorage = JSON.parse(
			localStorage.getItem('educationData'),
		);
		return educationDataFromLocalStorage ? educationDataFromLocalStorage : [];
	};
	const getInitialExperienceData = () => {
		const experienceDataFromLocalStorage = JSON.parse(
			localStorage.getItem('experienceData'),
		);
		return experienceDataFromLocalStorage ? experienceDataFromLocalStorage : [];
	};
	const getInitialProjectData = () => {
		const projectDataFromLocalStorage = JSON.parse(
			localStorage.getItem('projectData'),
		);
		return projectDataFromLocalStorage ? projectDataFromLocalStorage : [];
	};

	const getInitialIsEdit = () => {
		const isEditFromLocalStorage = JSON.parse(localStorage.getItem('isEdit'));
		console.log(isEditFromLocalStorage);
		return isEditFromLocalStorage !== null ? isEditFromLocalStorage : true;
	};
	// setting initial states
	const [headerData, setHeaderData] = useState(getInitialHeaderData);
	const [personalData, setPersonalData] = useState(getInitialPersonalData);
	const [skillsData, setSkillsData] = useState(getInitialSkillsData);
	const [objectiveData, setObjectiveData] = useState(getInitialObjectiveData);

	const [educationData, setEducationData] = useState(getInitialEducationData);
	const [experienceData, setExperienceData] = useState(
		getInitialExperienceData,
	);

	const [projectData, setProjectData] = useState(getInitialProjectData);
	const [isEdit, setIsEdit] = useState(getInitialIsEdit);

	//set data to local storage;
	useEffect(() => {
		localStorage.setItem('headerData', JSON.stringify(headerData));
	}, [headerData]);
	useEffect(() => {
		localStorage.setItem('personalData', JSON.stringify(personalData));
	}, [personalData]);
	useEffect(() => {
		localStorage.setItem('skillsData', JSON.stringify(skillsData));
	}, [skillsData]);
	useEffect(() => {
		localStorage.setItem('objectiveData', JSON.stringify(objectiveData));
	}, [objectiveData]);
	useEffect(() => {
		localStorage.setItem('educationData', JSON.stringify(educationData));
	}, [educationData]);
	useEffect(() => {
		localStorage.setItem('experienceData', JSON.stringify(experienceData));
	}, [experienceData]);
	useEffect(() => {
		localStorage.setItem('projectData', JSON.stringify(projectData));
	}, [projectData]);

	useEffect(() => {
		localStorage.setItem('isEdit', JSON.stringify(isEdit));
	}, [isEdit]);

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
		let { name, value, type, checked } = e.target;
		value = type === 'checkbox' ? checked : value;
		setEducationData((oldEducationData) => {
			const newEducationData = oldEducationData.map(
				(educationItem, educationIndex) => {
					if (educationIndex === educationID)
						return { ...educationItem, [name]: value };
					return educationItem;
				},
			);
			//	console.log(newEducationData);
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
				isCurrentlyStudying: false,
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
		let { name, value, type, checked } = e.target;
		value = type === 'checkbox' ? checked : value;
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
				isCurrentlyWorking: false,
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
		let { name, value, type, checked } = e.target;
		value = type === 'checkbox' ? checked : value;
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
				isCurrentlyWorking: false,
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

	//for printing page as pdf
	const printPage = () => {
		console.log('oeibt');
		window.print();
	};

	//add a function to window.onscroll
	useEffect(() => {
		const toggleWrapper = document.querySelector('.toggle-btns-wrapper');
		const sticky = toggleWrapper.offsetTop;

		const stickyToggleBar = () => {
			if (window.pageYOffset > sticky) toggleWrapper.classList.add('sticky');
			else toggleWrapper.classList.remove('sticky');
		};
		window.onscroll = function () {
			stickyToggleBar();
		};
	}, []);
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
				{!isEdit && (
					<button onClick={printPage} className='btn-cv-toggle'>
						Print
					</button>
				)}
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

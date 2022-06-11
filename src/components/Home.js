import '../css/App.css';
import { useState, useEffect } from 'react';
import EditableCV from './EditCV/EditableCV';
import PreviewCV from './DisplayCV/PreviewCV';
import Footer from './Footer';
import { db } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { useDebounce } from '../useDebounce';
import { useUserAuth } from '../context/UserAuthContext';
function Home() {
	const { user, logOut } = useUserAuth();
	//console.log('uid', user.uid);
	//localStorage.clear();

	//get isEdit from localstorage, if not available then set initial value
	const getInitialIsEdit = () => {
		const isEditFromLocalStorage = JSON.parse(localStorage.getItem('isEdit'));
		return isEditFromLocalStorage !== null ? isEditFromLocalStorage : true;
	};

	//get realtime db data
	useEffect(() => {
		//doc(db, 'users', user.uid, 'CV-Data', docName)
		onSnapshot(doc(db, 'users', user.uid, 'CV-Data', 'headerData'), (doc) => {
			const fetchedHeaderData = { ...initialHeaderData, ...doc.data() };
			setHeaderData(fetchedHeaderData);
		});
		onSnapshot(doc(db, 'users', user.uid, 'CV-Data', 'personalData'), (doc) => {
			const fetchedPersonalData = { ...initialPersonalData, ...doc.data() };
			setPersonalData(fetchedPersonalData);
		});
		onSnapshot(doc(db, 'users', user.uid, 'CV-Data', 'skillsData'), (doc) => {
			const fetchedSkillslData = doc.data()
				? doc.data().skillsData
				: initialSkillsData;
			setSkillsData(fetchedSkillslData);
		});
		onSnapshot(
			doc(db, 'users', user.uid, 'CV-Data', 'objectiveData'),
			(doc) => {
				const fetchedObjectiveData = { ...initialObjectiveData, ...doc.data() };
				setObjectiveData(fetchedObjectiveData);
			},
		);
		onSnapshot(
			doc(db, 'users', user.uid, 'CV-Data', 'educationData'),
			(doc) => {
				const fetchedEducationlData = doc.data()
					? doc.data().educationData
					: initialEducationData;
				setEducationData(fetchedEducationlData);
			},
		);
		onSnapshot(
			doc(db, 'users', user.uid, 'CV-Data', 'experienceData'),
			(doc) => {
				const fetchedExperiencelData = doc.data()
					? doc.data().experienceData
					: initialExperienceData;
				setExperienceData(fetchedExperiencelData);
			},
		);
		onSnapshot(doc(db, 'users', user.uid, 'CV-Data', 'projectData'), (doc) => {
			const fetchedProjectlData = doc.data()
				? doc.data().projectData
				: initialProjectData;
			setProjectData(fetchedProjectlData);
		});
	}, []);

	// setting initial states
	const initialHeaderData = { name: '', title: '' };
	const [headerData, setHeaderData] = useState(initialHeaderData);
	const initialPersonalData = {
		gender: '',
		dateOfBirth: '',
		phone: '',
		email: '',
		website: '',
		location: '',
	};
	const [personalData, setPersonalData] = useState(initialPersonalData);

	const initialSkillsData = [
		{
			title: '',
			skills: [
				{
					skillName: '',
				},
			],
		},
	];
	const [skillsData, setSkillsData] = useState(initialSkillsData);

	const initialObjectiveData = {
		summary: '',
	};
	const [objectiveData, setObjectiveData] = useState(initialObjectiveData);
	const initialEducationData = [
		{
			institute: '',
			course: '',
			startDate: '',
			endDate: '',
			isCurrentlyStudying: false,
			result: '',
		},
	];
	const [educationData, setEducationData] = useState(initialEducationData);

	const initialExperienceData = [
		{
			company: '',
			title: '',
			startDate: '',
			endDate: '',
			isCurrentlyWorking: false,
			summary: '',
		},
	];
	const [experienceData, setExperienceData] = useState(initialExperienceData);

	const initialProjectData = [
		{
			title: '',
			startDate: '',
			endDate: '',
			isCurrentlyWorking: false,
			summary: '',
		},
	];
	const [projectData, setProjectData] = useState(initialProjectData);
	const [isEdit, setIsEdit] = useState(getInitialIsEdit);

	//set data to db
	async function setToDB(data, docName) {
		data = Array.isArray(data) ? { [docName]: data } : data;
		//if (docName === 'personalData') console.log('setdb', data);
		try {
			/**
			 * The data model is as such :
			 *  users (top collection)
			 * 		-documents named by user ID
			 * 			- CV-Data (subcollection)
			 * 				-headerData
			 * 				-personalData
			 * 				-skillsData
			 * 				-objectiveData
			 * 				-educationData
			 * 				-experienceData
			 * 				-projectData
			 *
			 * The setDoc function below takes in the doc ref and the data to be set. If the doc ref doesn't exist, it will create one. {merge: true} specifies that document data will not get overwritten.
			 */
			await setDoc(doc(db, 'users', user.uid, 'CV-Data', docName), data, {
				merge: true,
			});
		} catch (err) {
			alert(err);
		}
	}

	// Handling Header Data
	const onHeaderDataChange = (e) => {
		let { name, value } = e.target;
		setHeaderData((prevHeaderData) => ({
			...prevHeaderData,
			[name]: value,
		}));
	};

	const debouncedHeaderData = useDebounce(JSON.stringify(headerData), 1000);

	useEffect(() => {
		const data = JSON.parse(debouncedHeaderData);
		if (data.name || data.title) setToDB(data, 'headerData');
	}, [debouncedHeaderData]);

	//Handling Personal Data
	const onPersonalDataChange = (e) => {
		let { name, value } = e.target;
		setPersonalData((prevPersonalData) => ({
			...prevPersonalData,
			[name]: value,
		}));
	};

	const debouncedPersonalData = useDebounce(JSON.stringify(personalData));
	useEffect(() => {
		const data = JSON.parse(debouncedPersonalData);
		if (
			data.gender ||
			data.dateOfBirth ||
			data.phone ||
			data.email ||
			data.website ||
			data.location
		) {
			setToDB(data, 'personalData');
		}
	}, [debouncedPersonalData]);

	//handling skillsData
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

	const debouncedSkillsData = useDebounce(JSON.stringify(skillsData), 1000);

	useEffect(() => {
		const data = JSON.parse(debouncedSkillsData);

		//when there is at least one element in the array, check to see if the title of the first element is empty, if it is, then do not update the db otherwise update it.
		/* 
		NOTE:
		This condition is put in place to stop the db being set to initialSkillsData object on every reload. 

		BUG: 
		So by doing this, it has become necessary for there to be a title on the first element of the array for any changes to its nested array being updated in the db.
		So if anyone erases the title on the first skill Category, NO change will be updated to db and on reload the SAME data as before will be rendered. 
		Also, after erasing the title on the first category, any changes made to the skills array (adding, deleting or updating the skill names) will ALSO NOT be updated to db.

		Is this a bug or a feature? IDK. 
		I guess anyone with the right mind would add the cateogory title before they start adding skill names. But if anyone does, then on reload their data will get lost :/
		*/
		if (data.length > 0 && data[0].title) {
			setToDB(data, 'skillsData');
		}
		//if the array is empty, then update DB (this will be the case when the user removes all skill categories)
		if (data.length === 0) {
			setToDB(data, 'skillsData');
		}
	}, [debouncedSkillsData]);

	// handling objective data
	const onObjectiveDataChange = (e) => {
		let { value } = e.target;
		setObjectiveData({ summary: value });
	};
	//objective data is a string.
	const debouncedObjectiveData = useDebounce(objectiveData, 1000);
	useEffect(() => {
		if (debouncedObjectiveData.summary) {
			setToDB(debouncedObjectiveData, 'objectiveData');
		}
	}, [debouncedObjectiveData]);

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

	const debouncedEducationData = useDebounce(
		JSON.stringify(educationData),
		1000,
	);

	useEffect(() => {
		const data = JSON.parse(debouncedEducationData);

		if (data.length > 0 && data[0].institute) {
			setToDB(data, 'educationData');
		}
		//if the array is empty, then update DB (this will be the case when the user removes all education sections)
		if (data.length === 0) {
			setToDB(data, 'educationData');
		}
	}, [debouncedEducationData]);

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

	const debouncedExperienceData = useDebounce(
		JSON.stringify(experienceData),
		1000,
	);

	useEffect(() => {
		const data = JSON.parse(debouncedExperienceData);

		if (data.length > 0 && data[0].title) {
			setToDB(data, 'experienceData');
		}
		//if the array is empty, then update DB (this will be the case when the user removes all education sections)
		if (data.length === 0) {
			setToDB(data, 'experienceData');
		}
	}, [debouncedExperienceData]);

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

	const debouncedProjectData = useDebounce(JSON.stringify(projectData), 1000);

	useEffect(() => {
		const data = JSON.parse(debouncedProjectData);

		if (data.length > 0 && data[0].title) {
			setToDB(data, 'projectData');
		}
		//if the array is empty, then update DB (this will be the case when the user removes all education sections)
		if (data.length === 0) {
			setToDB(data, 'projectData');
		}
	}, [debouncedProjectData]);

	// for CV- toggle
	const submitHandler = (e) => {
		e.preventDefault();
		setIsEdit(false);
	};
	const editHandler = () => {
		setIsEdit(true);
	};
	useEffect(() => {
		localStorage.setItem('isEdit', JSON.stringify(isEdit));
	}, [isEdit]);

	//add a function to window.onscroll for making the toggle btns sticky
	useEffect(() => {
		const toggleWrapper = document.querySelector('.toggle-btns-wrapper');
		const sticky = toggleWrapper.offsetTop;

		const stickyToggleBar = () => {
			window.pageYOffset > sticky
				? toggleWrapper.classList.add('sticky')
				: toggleWrapper.classList.remove('sticky');
		};
		window.onscroll = () => stickyToggleBar();
	}, []);

	//for printing page as pdf
	const printPage = () => window.print();
	//logout
	const handleLogOut = async () => {
		try {
			await logOut();
		} catch (err) {
			alert(err);
		}
	};
	return (
		<div className='cv-wrapper'>
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
				<button onClick={handleLogOut} className='btn-cv-toggle'>
					Log Out
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

export default Home;

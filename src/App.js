import './App.css';
import { useState } from 'react';
import EditableCV from './components/EditableCV';
import PreviewCV from './components/PreviewCV';
import Footer from './components/Footer';
function App() {
	const [resumeData, setResumeData] = useState({
		header: {
			name: '',
			title: '',
		},
		personalInfo: {
			gender: '',
			dateOfBirth: '',
			phone: '',
			email: '',
			website: '',
			location: '',
		},
		skills: {
			skillTitle: '',
			skillNames: [],
		},
		objective: {
			summary: '',
		},
		education: {
			istitute: '',
			course: '',
			startDate: '',
			endDate: '',
			result: '',
		},
		experience: {
			company: '',
			title: '',
			startDate: '',
			endDate: '',
			summary: '',
		},
	});

	const [isEdit, setIsEdit] = useState(true);

	const changeHandler = (e) => {
		console.log('change');
		const { name, value, className } = e.target;
		setResumeData((prevData) => ({
			...prevData,
			[className]: {
				...prevData[className],
				[name]: value,
			},
		}));
	};

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
				<EditableCV data={resumeData} changeHandler={changeHandler} />
			) : (
				<PreviewCV data={resumeData} />
			)}
			<Footer />
		</div>
	);
}

export default App;

import React, { Component } from 'react';

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			class10: {
				schoolName: '',
				passingYear: '',
				result: '',
			},
			class12: {
				schoolName: '',
				passingYear: '',
				result: '',
			},
			college: {
				collegeName: '',
				courseName: '',
				passingYear: '',
				result: '',
			},
			isEdit: true,
		};
	}

	handleChange = (e) => {
		const { name, value, className } = e.target;

		this.setState((prevState) => ({
			...prevState,
			[className]: {
				...prevState[className],
				[name]: value,
			},
		}));
	};
	handleFormSave = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			isEdit: false,
		}));
	};
	handleEdit = () => {
		this.setState((prevState) => ({
			...prevState,
			isEdit: true,
		}));
	};

	render() {
		const { class10, class12, college, isEdit } = this.state;
		const basic = {
			backgroundColor: '#ffe8d6',
			padding: '2rem',
		};
		const editableSection = (
			<form className='form' onSubmit={this.handleFormSave}>
				{/* <div>
					<label>
						School name
						<input
							type='text'
							placeholder='enter the school name'
							name='schoolName'
							value={class10.schoolName}
							onChange={this.handleChange}
							className='class10'
						/>
					</label>
					<label>
						Passing Year
						<input
							type='text'
							placeholder='enter the passing year'
							name='passingYear'
							value={class10.passingYear}
							onChange={this.handleChange}
							className='class10'
						/>
					</label>
					<label>
						Result
						<input
							type='text'
							placeholder='enter the final result '
							name='result'
							value={class10.result}
							onChange={this.handleChange}
							className='class10'
						/>
					</label>
				</div>
				<div>
					<label>
						School name
						<input
							type='text'
							placeholder='enter the school name'
							name='schoolName'
							value={class12.schoolName}
							onChange={this.handleChange}
							className='class12'
						/>
					</label>
					<label>
						Passing Year
						<input
							type='text'
							placeholder='enter the passing year'
							name='passingYear'
							value={class12.passingYear}
							onChange={this.handleChange}
							className='class12'
						/>
					</label>
					<label>
						Result
						<input
							type='text'
							placeholder='enter the final result '
							name='result'
							value={class12.result}
							onChange={this.handleChange}
							className='class12'
						/>
					</label>
				</div> */}
				<div>
					<label>
						College name
						<input
							type='text'
							placeholder='enter the school name'
							name='collegeName'
							value={college.collegeName}
							onChange={this.handleChange}
							className='college'
						/>
					</label>
					<label>
						Passing Year
						<input
							type='text'
							placeholder='enter the passing year'
							name='passingYear'
							value={college.passingYear}
							onChange={this.handleChange}
							className='college'
						/>
					</label>
					<label>
						Course Name
						<input
							type='text'
							placeholder='enter the passing year'
							name='courseName'
							value={college.courseName}
							onChange={this.handleChange}
							className='college'
						/>
					</label>
					<label>
						Result
						<input
							type='text'
							placeholder='enter the final result '
							name='result'
							value={college.result}
							onChange={this.handleChange}
							className='college'
						/>
					</label>
				</div>
				<button>Save</button>
			</form>
		);
		const displaySection = (
			<div>
				<div>
					<div>School Name : {class10.schoolName}</div>
					<div>Passing Year : {class10.passingYear}</div>
					<div>CGPA : {class10.result}</div>
				</div>
				<div>
					<div>School Name : {class12.schoolName}</div>
					<div>Passing Year : {class12.passingYear}</div>
					<div>CGPA : {class12.result}</div>
				</div>
				<div>
					<div>College Name : {college.collegeName}</div>
					<div>Passing Year : {college.passingYear}</div>
					<div>Course Name : {college.courseName}</div>
					<div>CGPA : {college.result}</div>
				</div>
				<button onClick={this.handleEdit}>Edit</button>
			</div>
		);
		return <div style={basic}>{isEdit ? editableSection : displaySection}</div>;
	}
}

export default Education;

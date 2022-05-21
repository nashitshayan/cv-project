// import React, { Component } from 'react';

// class Education extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			class10: {
// 				schoolName: '',
// 				passingYear: '',
// 				result: '',
// 			},
// 			class12: {
// 				schoolName: '',
// 				passingYear: '',
// 				result: '',
// 			},
// 			college: {
// 				collegeName: '',
// 				courseName: '',
// 				passingYear: '',
// 				result: '',
// 			},
// 			isEdit: true,
// 		};
// 	}

// 	handleChange = (e) => {
// 		const { name, value, className } = e.target;

// 		this.setState((prevState) => ({
// 			...prevState,
// 			[className]: {
// 				...prevState[className],
// 				[name]: value,
// 			},
// 		}));
// 	};
// 	handleFormSave = (e) => {
// 		e.preventDefault();
// 		this.setState((prevState) => ({
// 			...prevState,
// 			isEdit: false,
// 		}));
// 	};
// 	handleEdit = () => {
// 		this.setState((prevState) => ({
// 			...prevState,
// 			isEdit: true,
// 		}));
// 	};

// 	render() {
// 		const { class10, class12, college, isEdit } = this.state;
// 		// const basic = {
// 		// 	backgroundColor: '#ffe8d6',
// 		// 	padding: '2rem',
// 		// };
// 		const editableSection = (
// 			<form className='form' onSubmit={this.handleFormSave}>
// 				{/* <div>
// 					<label>
// 						School name
// 						<input
// 							type='text'
// 							placeholder='enter the school name'
// 							name='schoolName'
// 							value={class10.schoolName}
// 							onChange={this.handleChange}
// 							className='class10'
// 						/>
// 					</label>
// 					<label>
// 						Passing Year
// 						<input
// 							type='text'
// 							placeholder='enter the passing year'
// 							name='passingYear'
// 							value={class10.passingYear}
// 							onChange={this.handleChange}
// 							className='class10'
// 						/>
// 					</label>
// 					<label>
// 						Result
// 						<input
// 							type='text'
// 							placeholder='enter the final result '
// 							name='result'
// 							value={class10.result}
// 							onChange={this.handleChange}
// 							className='class10'
// 						/>
// 					</label>
// 				</div>
// 				<div>
// 					<label>
// 						School name
// 						<input
// 							type='text'
// 							placeholder='enter the school name'
// 							name='schoolName'
// 							value={class12.schoolName}
// 							onChange={this.handleChange}
// 							className='class12'
// 						/>
// 					</label>
// 					<label>
// 						Passing Year
// 						<input
// 							type='text'
// 							placeholder='enter the passing year'
// 							name='passingYear'
// 							value={class12.passingYear}
// 							onChange={this.handleChange}
// 							className='class12'
// 						/>
// 					</label>
// 					<label>
// 						Result
// 						<input
// 							type='text'
// 							placeholder='enter the final result '
// 							name='result'
// 							value={class12.result}
// 							onChange={this.handleChange}
// 							className='class12'
// 						/>
// 					</label>
// 				</div> */}
// 				{/* <div> */}
// 				<label>
// 					College :
// 					<input
// 						type='text'
// 						placeholder='enter the school name'
// 						name='collegeName'
// 						value={college.collegeName}
// 						onChange={this.handleChange}
// 						className='college'
// 						required
// 					/>
// 				</label>
// 				<label>
// 					Graduated :
// 					<input
// 						type='month'
// 						placeholder='enter the passing year'
// 						name='passingYear'
// 						value={college.passingYear}
// 						onChange={this.handleChange}
// 						className='college'
// 						required
// 					/>
// 				</label>
// 				<label>
// 					Course :
// 					<input
// 						type='text'
// 						placeholder='enter the course name'
// 						name='courseName'
// 						value={college.courseName}
// 						onChange={this.handleChange}
// 						className='college'
// 						required
// 					/>
// 				</label>
// 				<label>
// 					Result :
// 					<input
// 						type='text'
// 						placeholder='enter the final result '
// 						name='result'
// 						value={college.result}
// 						onChange={this.handleChange}
// 						className='college'
// 						required
// 					/>
// 				</label>
// 				{/* </div> */}
// 				<button>Save</button>
// 			</form>
// 		);
// 		const displaySection = (
// 			<div className='displaySection'>
// 				{/* <div>
// 					<div>School Name : {class10.schoolName}</div>
// 					<div>Passing Year : {class10.passingYear}</div>
// 					<div>CGPA : {class10.result}</div>
// 				</div>
// 				<div>
// 					<div>School Name : {class12.schoolName}</div>
// 					<div>Passing Year : {class12.passingYear}</div>
// 					<div>CGPA : {class12.result}</div>
// 				</div> */}
// 				<div>
// 					<div className='displaySection--items'>
// 						<div>College :</div> <div>{college.collegeName}</div>
// 					</div>
// 					<div className='displaySection--items'>
// 						<div>Graduated :</div> <div>{college.passingYear}</div>
// 					</div>
// 					<div className='displaySection--items'>
// 						<div>Course :</div> <div>{college.courseName}</div>
// 					</div>
// 					<div className='displaySection--items'>
// 						<div>CGPA :</div> <div>{college.result}</div>
// 					</div>
// 				</div>
// 				<button onClick={this.handleEdit}>Edit</button>
// 			</div>
// 		);
// 		return (
// 			<div>
// 				<h2 className='sectionTitle'>Education</h2>
// 				{isEdit ? editableSection : displaySection}
// 			</div>
// 		);
// 	}
// }

// export default Education;
import React from 'react';

function Education({
	educationData,
	changeHandler,
	addEducation,
	deleteEducation,
}) {
	return (
		<div className='educationData section'>
			<h3>EDUCATION :</h3>
			{educationData.map((educationItem, educationIndex) => {
				return (
					<div className='educationData-input' key={educationIndex}>
						<span
							className='btn-cancel-education icon-cancel'
							onClick={(e) => deleteEducation(e, educationIndex)}></span>
						<div className='education-input input-row'>
							<label htmlFor='educationlData--input-institute'>
								Institute :
							</label>
							<input
								type='text'
								id='educationlData--input-institute'
								placeholder='eg:  MANIT, Bhopal'
								name='institute'
								value={educationItem.institute}
								onChange={(e) => changeHandler(e, educationIndex)}
							/>
						</div>
						<div className='education-input input-row'>
							<label htmlFor='educationlData--input-course'>Course :</label>
							<input
								type='text'
								id='educationlData--input-course'
								placeholder='eg: Computer Science and Engineering'
								name='course'
								value={educationItem.course}
								onChange={(e) => changeHandler(e, educationIndex)}
							/>
						</div>
						<div className='educationData--input-dates'>
							<div className='education-input input-row'>
								<label htmlFor='educationlData--input-startDate'>
									Start Date :
								</label>
								<input
									type='date'
									id='educationlData--input-startDate'
									name='startDate'
									value={educationItem.startDate}
									onChange={(e) => changeHandler(e, educationIndex)}
								/>
							</div>
							<div className='education-input input-row'>
								<label htmlFor='educationlData--input-endDate'>
									End Date :
								</label>
								<input
									type='date'
									id='educationlData--input-endDate'
									name='endDate'
									value={educationItem.endDate}
									onChange={(e) => changeHandler(e, educationIndex)}
								/>
							</div>
						</div>
						<div className='education-input input-row'>
							<label htmlFor='educationlData--input-result'>Result :</label>
							<input
								type='text'
								id='educationlData--input-result'
								placeholder='eg: 8.5 CGPA'
								name='result'
								value={educationItem.result}
								onChange={(e) => changeHandler(e, educationIndex)}
							/>
						</div>
					</div>
				);
			})}
			<button onClick={addEducation} className='btn-addSkillCategory'>
				Add Education
			</button>
		</div>
	);
}

export default Education;

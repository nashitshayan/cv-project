import React, { Component } from 'react';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Objective from './Objective';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import WorkExperience from './WorkExperience';

function EditableCV({ data, changeHandler, submitHandler, editHandler }) {
	return (
		<>
			<div className='outer-wrapper'>
				<Header
					name={data.header.name}
					title={data.header.title}
					changeHandler={changeHandler}
				/>

				<aside>
					<PersonalInfo
						personalData={data.personalInfo}
						changeHandler={changeHandler}
					/>
					<Skills skillsData={data.skills} changeHandler={changeHandler} />
				</aside>
				<main>
					<Objective
						objectiveData={data.objective}
						changeHandler={changeHandler}
					/>
					<Education
						educationData={data.education}
						changeHandler={changeHandler}
					/>
					<Experience
						experienceData={data.experience}
						changeHandler={changeHandler}
					/>
				</main>
			</div>
		</>
	);
}

export default EditableCV;

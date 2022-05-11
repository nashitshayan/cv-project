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
			<Header
				name={data.header.name}
				title={data.header.title}
				onChangeHandler={changeHandler}
			/>
			<div className='outer-wrapper'>
				<aside>
					<PersonalInfo personalData={data.personalInfo} />
					<Skills />
				</aside>
				<main>
					<Objective />
					<Education />
					<Experience />
				</main>
			</div>
		</>
	);
}

export default EditableCV;

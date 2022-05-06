import React, { Component } from 'react';

class GeneralInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			phoneNum: '',
			isEdit: true,
		};
	}

	handleFormSave = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			isEdit: false,
		}));
	};

	handleFormEdit = () => {
		this.setState((prevState) => ({
			...prevState,
			isEdit: true,
		}));
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	render() {
		const { name, email, phoneNum, isEdit } = this.state;
		const editableSection = (
			<form onSubmit={this.handleFormSave} className='form'>
				<label>
					Name :
					<input
						name='name'
						type='text'
						placeholder='Enter your full name'
						value={name}
						onChange={this.handleChange}
						className='form-name'
						required
					/>
				</label>
				<label>
					Email :
					<input
						name='email'
						type='email'
						placeholder='Enter your email address'
						value={email}
						onChange={this.handleChange}
						className='form-email'
						required
					/>
				</label>
				<label>
					Phone Number :
					<input
						name='phoneNum'
						type='text'
						placeholder='Enter your phone number (add country code; eg: +91-xxx-xxx-xxxx)'
						value={phoneNum}
						onChange={this.handleChange}
						className='form-phone'
						required
					/>
				</label>
				<button type='Submit' className='form-btn'>
					Save
				</button>
			</form>
		);

		const displaySection = (
			<div className='generalInfo displaySection'>
				<div className='displaySection--items'>
					<div>Name :</div> <div>{name}</div>
				</div>
				<div className='displaySection--items'>
					<div>Email :</div> <div>{email}</div>
				</div>
				<div className='displaySection--items'>
					<div>Phone :</div> <div>{phoneNum}</div>
				</div>
				<button onClick={this.handleFormEdit}>Edit</button>
			</div>
		);

		return <div>{isEdit ? editableSection : displaySection}</div>;
	}
}

export default GeneralInfo;

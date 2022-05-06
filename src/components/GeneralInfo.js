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
		const basic = {
			backgroundColor: '#ddbea9',
			padding: '2rem',
		};

		const { name, email, phoneNum, isEdit } = this.state;
		const editableSection = (
			<form onSubmit={this.handleFormSave} className='form'>
				<label>
					Name
					<input
						name='name'
						type='text'
						placeholder='Enter your full name'
						value={name}
						onChange={this.handleChange}
						className='form-name'
					/>
				</label>
				<label>
					Email
					<input
						name='email'
						type='email'
						placeholder='Enter your email address'
						value={email}
						onChange={this.handleChange}
						className='form-email'
					/>
				</label>
				<label>
					Phone Number
					<input
						name='phoneNum'
						type='text'
						placeholder='Enter your phone number'
						value={phoneNum}
						onChange={this.handleChange}
						className='form-phone'
					/>
				</label>
				<button type='Submit' className='form-btn'>
					Save
				</button>
			</form>
		);

		const displaySection = (
			<div className='generalInfo displaySection'>
				<div className='generalInfo--name'>{name}</div>
				<div className='generalInfo--email'>{email}</div>
				<div className='generalInfo--phone'>{phoneNum}</div>
				<button onClick={this.handleFormEdit}>Edit</button>
			</div>
		);

		return <div>{isEdit ? editableSection : displaySection}</div>;
	}
}

export default GeneralInfo;

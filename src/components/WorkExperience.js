import React, { Component } from 'react';

class WorkExperience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			companyName: '',
			positionTitle: '',
			dateFrom: '',
			dateTo: '',
			summary: '',
			isEdit: true,
		};
	}
	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState((prevState) => ({
			...prevState,
			[name]: value,
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
		const { companyName, positionTitle, dateFrom, dateTo, summary, isEdit } =
			this.state;

		const editableSection = (
			<form className='form' onSubmit={this.handleFormSave}>
				<label>
					Company Name :
					<input
						type='text'
						placeholder='enter the company name'
						name='companyName'
						value={companyName}
						onChange={this.handleChange}
						required
					/>
				</label>
				<label>
					Position Title :
					<input
						type='text'
						placeholder='enter the position title'
						name='positionTitle'
						value={positionTitle}
						onChange={this.handleChange}
						required
					/>
				</label>
				<label>
					Worked From :
					<input
						type='date'
						name='dateFrom'
						value={dateFrom}
						onChange={this.handleChange}
						required
					/>
				</label>
				<label>
					Untill :
					<input
						type='date'
						name='dateTo'
						value={dateTo}
						onChange={this.handleChange}
						required
					/>
				</label>

				<label>
					Summary :
					<textarea
						placeholder='enter the summary'
						name='summary'
						value={summary}
						onChange={this.handleChange}
						required
					/>
				</label>
				<button>Save</button>
			</form>
		);
		const displaySection = (
			<div className='displaySection'>
				<div className='displaySection--items'>
					<div>Company :</div> <div>{companyName}</div>
				</div>
				<div className='displaySection--items'>
					<div>Position :</div> <div>{positionTitle}</div>
				</div>
				<div className='displaySection--items'>
					<div>Worked From :</div> <div>{dateFrom}</div>
				</div>
				<div className='displaySection--items'>
					<div>Untill :</div> <div>{dateTo}</div>
				</div>
				<div className='displaySection--items'>
					<div>Summary :</div> <div>{summary}</div>
				</div>
				<button onClick={this.handleEdit}>Edit</button>
			</div>
		);

		return (
			<div>
				<h2 className='sectionTitle'>Work Experience</h2>
				{isEdit ? editableSection : displaySection}
			</div>
		);
	}
}

export default WorkExperience;

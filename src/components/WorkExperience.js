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
			<form onSubmit={this.handleFormSave}>
				<label>
					Company Name
					<input
						type='text'
						placeholder='enter the company name'
						name='companyName'
						value={companyName}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Position Title
					<input
						type='text'
						placeholder='enter the Position Title'
						name='positionTitle'
						value={positionTitle}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Worked From
					<input
						type='date'
						name='dateFrom'
						value={dateFrom}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Untill
					<input
						type='date'
						name='dateTo'
						value={dateTo}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Summary
					<textarea
						placeholder='enter the Summary'
						name='summary'
						value={summary}
						onChange={this.handleChange}
					/>
				</label>
				<button>Save</button>
			</form>
		);
		const displaySection = (
			<div>
				<div>Company Name: {companyName}</div>
				<div>Position Title : {positionTitle}</div>
				<div>Worked From : {dateFrom}</div>
				<div>Untill : {dateTo} </div>
				<div>Summary: {summary}</div>
				<button onClick={this.handleEdit}>Edit</button>
			</div>
		);
		const basic = {
			backgroundColor: '#b7b7a4',
			padding: '2rem',
		};
		return <div style={basic}>{isEdit ? editableSection : displaySection}</div>;
	}
}

export default WorkExperience;

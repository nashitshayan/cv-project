function Project({ projectData, changeHandler, addProject, deleteProject }) {
	return (
		<div className='projectData section'>
			<h3 className='bold-700'>PROJECTS :</h3>
			{projectData.map((projectItem, projectIndex) => {
				return (
					<div className='projectData-input' key={projectIndex}>
						<span
							className='btn-cancel-project icon-cancel'
							onClick={(e) => deleteProject(e, projectIndex)}></span>
						<div className='project-input input-row'>
							<label htmlFor='projectlData--input-company'>Title :</label>
							<input
								type='text'
								id='projectlData--input-title'
								placeholder='eg: CV-Maker App'
								name='title'
								value={projectItem.title}
								onChange={(e) => changeHandler(e, projectIndex)}
							/>
						</div>
						<div className='projectData--input-dates'>
							<div className='project-input input-row'>
								<label htmlFor='projectlData--input-startDate'>
									Start Date :
								</label>
								<input
									type='month'
									id='projectlData--input-startDate'
									name='startDate'
									value={projectItem.startDate}
									onChange={(e) => changeHandler(e, projectIndex)}
								/>
							</div>
							<div className='project-input input-row'>
								<label htmlFor='projectlData--input-endDate'>End Date :</label>
								<input
									type='month'
									id='projectlData--input-endDate'
									name='endDate'
									value={projectItem.endDate}
									onChange={(e) => changeHandler(e, projectIndex)}
								/>
							</div>
						</div>
						<div className='project-input input-row'>
							<label htmlFor='projectlData--input-summary'>Summary :</label>
							<textarea
								id='projectlData--input-summary'
								placeholder='eg: A webapp made with React that allows users to create their own CV'
								name='summary'
								value={projectItem.summary}
								onChange={(e) => changeHandler(e, projectIndex)}
							/>
						</div>
					</div>
				);
			})}
			<button onClick={addProject} className='btn-add-section'>
				Add project
			</button>
		</div>
	);
}

export default Project;

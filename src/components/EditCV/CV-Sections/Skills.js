import React from 'react';
function Skills({
	skillsData,
	changeHandler,
	addSkillCategory,
	deleteSkillCategory,
	addSkill,
	deleteSkill,
}) {
	return (
		<div className=' skillsData section'>
			<h3 className='skillsData-label bold-700'>SKILLS</h3>
			{skillsData.map((skillCategory, skillCategoryIndex) => {
				return (
					<div className='skillsData-input' key={skillCategoryIndex}>
						<div className='input-row'>
							<label htmlFor='skill-category-input'>
								<div>Category :</div>
							</label>
							<input
								type='text'
								id='skill-category-input'
								placeholder='skill category'
								name='title'
								value={skillCategory.title}
								onChange={(e) => changeHandler(e, skillCategoryIndex)}
							/>
							<span
								className='btn-cancel-skill-category icon-cancel'
								onClick={(e) =>
									deleteSkillCategory(e, skillCategoryIndex)
								}></span>
						</div>
						<div className='skills-input input-row'>
							<div className='skills-input-label'>Skill :</div>
							{skillCategory.skills.map((skill, skillIndex) => {
								return (
									<span key={skillIndex} className='skills-input-container'>
										<input
											type='text'
											id='skillname-input'
											placeholder='skill name'
											className='skills'
											name='skillName'
											value={skill.skillName}
											onChange={(e) =>
												changeHandler(e, skillCategoryIndex, skillIndex)
											}
										/>
										<span
											className='btn-cancel-skill-name icon-cancel'
											onClick={(e) =>
												deleteSkill(e, skillCategoryIndex, skillIndex)
											}></span>
									</span>
								);
							})}
							<span
								className='btn-add-skill'
								onClick={(e) => addSkill(e, skillCategoryIndex)}>
								<i className='icon-plus'></i>
							</span>
						</div>
					</div>
				);
			})}

			<button onClick={addSkillCategory} className='btn-add-section'>
				Add Skill Category
			</button>
		</div>
	);
}

export default Skills;

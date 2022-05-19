import React from 'react';
import SkillForm from '../SkillForm';
function Skills({ skillsData, changeHandler, addSkill, addSkillName }) {
	//console.log(skillsData);
	const handleAddSkill = () => addSkill();
	return (
		<div className=' skills asideSection'>
			<h3>SKILLS</h3>
			{skillsData.map((skillItem) => {
				//console.log(skillItem);
				const { idT } = skillItem;
				return (
					<div className='skill-input' key={idT}>
						<div className='input-row'>
							<label htmlFor='skills--input-skill-title'>Skill Title </label>
							<input
								type='text'
								id='skills--input-dob'
								name='skillTitle'
								value={skillItem.skillTitle}
								onChange={(e) => changeHandler(e, idT, 0)}
							/>
						</div>
						{/* {skillItem.skillNames.map((item) => console.log('inside names'))} */}
						{skillItem.skillNames.map((skillNameItem) => {
							const { idS } = skillNameItem;
							return (
								<div className='skillNames-input' key={idS}>
									<div className='input-row'>
										<label htmlFor='skills--input-skill-name'>Skill Name</label>
										<input
											type='text'
											id='skills--input-dob'
											className='skillNames'
											name='skillName'
											value={skillNameItem.skillName}
											onChange={(e) => changeHandler(e, idT, idS)}
										/>
									</div>
								</div>
							);
						})}
						<button
							className='addSkillBtn'
							onClick={(e) => addSkillName(e, idT)}>
							New
						</button>
						{/* skilltitle: {skillItem.skillTitle}
						<br></br>
						skillnames :
						{skillItem.skillNames.map((skillNameItem) => (
							<p>{skillNameItem.skillName}</p>
						))} */}
					</div>
				);
			})}

			<button onClick={handleAddSkill}>Add Skill</button>
		</div>
	);
}

export default Skills;

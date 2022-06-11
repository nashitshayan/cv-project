export default function SkillsDisplay({ skillsData }) {
	return (
		<div className='skillsDisplay'>
			<h3 className='bold-700'>SKILLS</h3>

			{skillsData.map((skillCategoryItem, skillCategoryIndex) => {
				return (
					<div key={skillCategoryIndex}>
						<li>
							{skillCategoryItem.title || (
								<span className='greytext'>Add Skill Category</span>
							)}
						</li>
						<ul>
							{skillCategoryItem.skills.map((skill, skillIndex) => (
								<li key={skillIndex}>
									{skill.skillName || (
										<span className='greytext'>Add Skill</span>
									)}
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
}

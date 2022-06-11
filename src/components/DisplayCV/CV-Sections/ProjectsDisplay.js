import { convertDate } from '../../../convertDate';
export default function ProjectsDisplay({ projectData }) {
	return (
		<div className='projectDisplay displaySection'>
			<h3 className='bold-700'>PROJECTS</h3>
			{projectData.map((projectItem, projectIndex) => {
				return (
					<div key={projectIndex} className='projectItem'>
						<div className='projectItem--title-and-duration-wrapper'>
							<li className='projectItem--title bold'>
								{projectItem.title || (
									<span className='greytext'>Add Company Name</span>
								)}
							</li>

							<div className='projectItem--duration'>
								{<span>{convertDate(projectItem.startDate)}</span> || (
									<span className='greytext'>Add Start Date</span>
								)}
								-
								{<span>{convertDate(projectItem.endDate)}</span> || (
									<span className='greytext'>Add End Date</span>
								)}
							</div>
						</div>
						<div className='projectItem--result'>
							-{' '}
							{projectItem.summary || (
								<span className='greytext'>Add Summary</span>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

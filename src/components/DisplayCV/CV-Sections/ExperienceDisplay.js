import { convertDate } from '../../../convertDate';
export default function ExperienceDisplay({ experienceData }) {
	return (
		<div className='experienceDisplay displaySection'>
			<h3 className='bold-700'>EXPERIENCE</h3>
			{experienceData.map((experienceItem, experienceIndex) => {
				return (
					<div key={experienceIndex} className='experienceItem'>
						<li className='experienceItem--company bold'>
							{experienceItem.company || (
								<span className='greytext'>Add Company Name</span>
							)}
						</li>
						<div className='experienceItem--title-and-duration-wrapper'>
							<div className='experienceItem--course greytext'>
								Title:{' '}
								{experienceItem.title || (
									<span className='greytext'>Add Job Title</span>
								)}
							</div>
							<div className='experienceItem--duration'>
								{<span>{convertDate(experienceItem.startDate)}</span> || (
									<span className='greytext'>Add Start Date</span>
								)}
								-
								{(
									<span>
										{experienceItem.isCurrentlyWorking
											? 'Present'
											: convertDate(experienceItem.endDate)}
									</span>
								) || <span className='greytext'>Add End Date</span>}
							</div>
						</div>
						<div className='experienceItem--result'>
							-
							{experienceItem.summary || (
								<span className='greytext'>Add Summary</span>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

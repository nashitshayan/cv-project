import { convertDate } from '../../../convertDate';
export default function EducationDisplay({ educationData }) {
	return (
		<div className='educationDisplay displaySection'>
			<h3 className='bold-700'>EDUCATION</h3>
			{educationData.map((educationItem, educationIndex) => {
				return (
					<div key={educationIndex} className='educationItem'>
						<li className='educationItem--institute bold'>
							{educationItem.institute || (
								<span className='greytext'>Add Insitute Name</span>
							)}
						</li>
						<div className='educationItem--course-and-duration-wrapper'>
							<div className='educationItem--course greytext'>
								Course:{' '}
								{educationItem.course || (
									<span className='greytext'>Add Course Name</span>
								)}
							</div>
							<div className='educationItem--duration'>
								{<span>{convertDate(educationItem.startDate)}</span> || (
									<span className='greytext'>Add Start Date</span>
								)}
								-
								{(
									<span>
										{educationItem.isCurrentlyStudying
											? 'Present'
											: convertDate(educationItem.endDate)}
									</span>
								) || <span className='greytext'>Add End Date</span>}
							</div>
						</div>
						<div className='educationItem--result'>
							- GPA:
							{educationItem.result || (
								<span className='greytext'>Add Result</span>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

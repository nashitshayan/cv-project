import React from 'react';

function PreviewCV({ data, changeHandler, submitHandler, editHandler }) {
	return (
		<>
			{/* <Header
			name={data.header.name}
			title={data.header.title}
			onChangeHandler={changeHandler}
		/> */}
			<header>
				<h1>{data.header.name}</h1>
				<h2>{data.header.title}</h2>
			</header>
			<div className='outer-wrapper'>
				<aside>
					{/* <PersonalInfo personalData={data.personalInfo} />
				<Skills /> */}
				</aside>
				<main>
					{/* <Objective />
				<Education />
				<Experience /> */}
				</main>
			</div>
		</>
	);
}

export default PreviewCV;

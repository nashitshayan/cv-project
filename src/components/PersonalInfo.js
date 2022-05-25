import React from 'react';

function PersonalInfo({ personalData, changeHandler }) {
	return (
		<div className='personalData section'>
			<div className='input-row'>
				<label htmlFor='personalData--input-gender'>Gender : </label>
				<select
					value={personalData.gender}
					onChange={changeHandler}
					id='personalData--input-gender'
					className='personalInfo'
					name='gender'>
					<option value=''>--select gender--</option>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Other'>Other</option>
				</select>
			</div>
			<div className='input-row'>
				<label htmlFor='personalData--input-dob'>D.O.B : </label>
				<input
					type='date'
					id='personalData--input-dob'
					className='personalInfo'
					name='dateOfBirth'
					value={personalData.dateOfBirth}
					onChange={changeHandler}
				/>
			</div>
			<div className='input-row'>
				<label htmlFor='personalData--input-phone'>Mob : </label>
				<input
					type='text'
					placeholder='mobile number'
					id='personalData--input-phone'
					className='personalInfo'
					name='phone'
					value={personalData.phone}
					onChange={changeHandler}
				/>
			</div>
			<div className='input-row'>
				<label htmlFor='personalData--input-email'>Email : </label>
				<input
					type='email'
					placeholder='email address'
					id='personalData--input-email'
					className='personalInfo'
					name='email'
					value={personalData.email}
					onChange={changeHandler}
				/>
			</div>
			<div className='input-row'>
				<label htmlFor='personalData--input-website'>Website : </label>
				<input
					type='text'
					placeholder='portfolio url'
					id='personalData--input-website'
					className='personalInfo'
					name='website'
					value={personalData.website}
					onChange={changeHandler}
				/>
			</div>
			<div className='input-row'>
				<label htmlFor='personalData--input-location'>Location : </label>
				<input
					type='text'
					placeholder='city and country'
					id='personalData--input-location'
					className='personalInfo'
					name='location'
					value={personalData.location}
					onChange={changeHandler}
				/>
			</div>
		</div>
	);
}

export default PersonalInfo;

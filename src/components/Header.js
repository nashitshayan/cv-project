import React from 'react';

function Header({ name, title, onChangeHandler }) {
	// console.log(changeHandler);
	return (
		<header>
			<div className='header--row'>
				<label htmlFor='header--input-name'>Name:</label>
				<input
					type='text'
					placeholder='enter your name'
					className='header' //header because this is used to update the state and the property name there is 'header'
					id='header--input-name'
					name='name'
					value={name}
					onChange={onChangeHandler}
					required
				/>
			</div>
			<div className='header--row'>
				<label htmlFor='header--input-title'>Title:</label>
				<input
					type='text'
					placeholder='enter your job title'
					className='header'
					id='header--input-title'
					name='title'
					value={title}
					onChange={onChangeHandler}
					required
				/>
			</div>
		</header>
	);
}

export default Header;

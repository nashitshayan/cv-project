export default function Header({ name, title, changeHandler }) {
	return (
		<header>
			<div className='input-row'>
				<label htmlFor='header--input-name'>Name:</label>
				<input
					type='text'
					placeholder='enter your name'
					className='header' //header because this is used to update the state and the property name there is 'header'
					id='header--input-name'
					name='name'
					value={name}
					onChange={changeHandler}
					required
				/>
			</div>
			<div className='input-row'>
				<label htmlFor='header--input-title'>Title:</label>
				<input
					type='text'
					placeholder='enter your job title'
					className='header'
					id='header--input-title'
					name='title'
					value={title}
					onChange={changeHandler}
					required
				/>
			</div>
		</header>
	);
}

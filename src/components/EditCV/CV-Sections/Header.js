export default function Header({ name, title, changeHandler }) {
	//console.log('name: ', name, 'title: ', title);
	return (
		<header>
			<div className='input-row'>
				<label htmlFor='header--input-name'>Name:</label>
				<input
					type='text'
					placeholder='enter your name'
					className='headerData'
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
					className='headerData'
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

import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { Form, Button, Alert } from 'react-bootstrap';
function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { signUp } = useUserAuth();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signUp(email, password);
			navigate('/cv-project/');
		} catch (err) {
			setError(err.message);
		}
	};
	return (
		<div className='auth-wrapper'>
			<div className='p-4 box'>
				<h2 className='mb-3 text-center'>Sign-Up</h2>
				{error && <Alert variant='danger'>{error}</Alert>}
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Control
							type='email'
							placeholder='Email address'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</Form.Group>
					<div className='d-grid gap-2'>
						<Button variant='primary' type='submit'>
							Sign Up
						</Button>
					</div>
				</Form>
			</div>
			<hr />
			<div className='p-4 box mt-3 text-center'>
				Already have an account? <Link to='/cv-project/'>Log In</Link>
			</div>
		</div>
	);
}

export default SignUp;

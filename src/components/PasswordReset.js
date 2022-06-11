import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { Form, Button, Alert } from 'react-bootstrap';

function PasswordReset() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [passwordResetStatus, setPasswordResetStatus] = useState(false);
	const { sendPasswordReset } = useUserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await sendPasswordReset(email);
			setPasswordResetStatus(true);
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className='auth-wrapper'>
			{passwordResetStatus ? (
				<div className='p-5 box text-center'>
					<h5>Password reset mail sent!</h5>
					<small>(Check in your spam folder if you don't find it.)</small>
					<div className=' mt-3'>
						<Link to='/cv-project/'>Proceed to Log In</Link>
					</div>
				</div>
			) : (
				<>
					<div className='p-4 box '>
						<h2 className='mb-3 text-center'>Login</h2>
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
							<div className='d-grid gap-2'>
								<Button variant='primary' type='submit'>
									Reset Password
								</Button>
							</div>
						</Form>
						<hr />
					</div>
					<div className='p-4 box mt-3 text-center'>
						Don't have an account? <Link to='/cv-project/signup'>Sign Up</Link>
					</div>
				</>
			)}
		</div>
	);
}

export default PasswordReset;

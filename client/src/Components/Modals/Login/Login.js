import React, { useState, useEffect } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Modal, Alert } from 'react-bootstrap';
import axios from 'axios';

import './Login.css';

const LoginForm = (props) => {
	const [ show, setShow ] = useState(false);
	const [ showAlert, setAlert ] = useState(false);

	useEffect(
		() => {
			setShow(props.showState);
		},
		[ props ]
	);

	return (
		<div>
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
				className="modal-login"
				centered
			>
				<Form
					size="large"
					onSubmit={(event) => {
						var formData = new FormData(event.target);
						var admin = {
							username: '',
							password: ''
						};

						for (var name of formData.keys()) {
							if (name === 'username') {
								admin.username = formData.get(name);
							}
							if (name === 'password') {
								admin.password = formData.get(name);
							}
						}

						axios
							.post('/api/login', admin)
							.then((res) => {
								if (res.data === 'Logged In') {
									window.location.href = '/admin';
								} else {
									setAlert(true);
									setTimeout(() => {
										setAlert(false);
									}, 1000);
								}
							})
							.catch((err) => {
								console.error(err);
							});
					}}
				>
					<Segment>
						<Alert variant="danger" show={showAlert} className="alert">
							Wrong Admin Credentials
						</Alert>
						<Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Admin ID" />
						<Form.Input
							fluid
							name="password"
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
						/>
						<Button color="teal" fluid size="large" type="submit">
							Login
						</Button>
					</Segment>
				</Form>
			</Modal>
		</div>
	);
};

export default LoginForm;

import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { Form, Modal, Alert, Popover, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';

import './Modals.css';
import DisplayData from '../../DisplayData/DisplayData';
import FormGroup from './Form/FormGroup';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const RegisterForm = (props) => {
	const [ showForm, setShowForm ] = useState(false);
	const [ showData, setShowData ] = useState(false);
	const [ showRefModal, setShowRefModal ] = useState(false);
	const [ loading, setLoading ] = useState(false);

	const [ formData, setFormData ] = useState({});
	const [ refID, setRefID ] = useState('');

	const toggleForm = () => {
		setShowForm(true);
	};

	const handleSubmitForm = (event) => {
		event.preventDefault();
		var formData = new FormData(event.target);

		axios
			.post('/api/form', formData)
			.then((res) => {
				setFormData(res.data);
				setShowForm(false);
				setTimeout(() => {
					setShowData(true);
				}, 500);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const handleConfirm = () => {
		setShowData(false);
		setShowForm(false);
		setTimeout(() => {
			setLoading(true);
		}, 500);
		axios
			.post('/api/dataHandler', formData)
			.then((res) => {
				setLoading(false);

				setRefID('TEM' + res.data.id.toString());

				setShowRefModal(true);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const confirmPopover = (
		<Popover id="popover-basic">
			<Popover.Title as="h4">Are You Sure</Popover.Title>
			<Popover.Content>
				<Button className="button-popover" variant="success" size="small" onClick={handleConfirm}>
					Yes
				</Button>
			</Popover.Content>
		</Popover>
	);

	useEffect(() => {
		props.generateRef.current = toggleForm;

		return () => {
			props.generateRef.current = null;
		};
	});

	return (
		<div>
			{/*Registration Form Modal */}
			<div className="register-form">
				<Modal
					show={showForm}
					onHide={() => {
						setShowForm(false);
					}}
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title>Registration Form</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Alert variant="primary">
							<Alert.Heading>Welcome to Tempustio Event Registration.</Alert.Heading>

							<p>Kindly fill in your details and we will contact your shortly!!!</p>
						</Alert>
						<Form encType="multipart/form-data" onSubmit={handleSubmitForm}>
							<FormGroup />
						</Form>
					</Modal.Body>
				</Modal>
			</div>

			{/*Registration Data Modal*/}
			<div className="show-form">
				<Modal show={showData} centered>
					<Modal.Header>
						<Modal.Title>Registration Form Data</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<DisplayData data={formData} />
						<OverlayTrigger trigger="click" placement="right" overlay={confirmPopover}>
							<Button variant="success">Submit</Button>
						</OverlayTrigger>
					</Modal.Body>
				</Modal>
			</div>

			{/*Reference Id Modal */}
			{loading ? (
				<LoadingSpinner className="loader" />
			) : (
				<div className="ref-modal">
					<Modal
						show={showRefModal}
						onHide={() => {
							setShowRefModal(false);
						}}
						centered
					>
						<Modal.Body>
							<Alert>
								<Alert.Heading>Your Reference ID is {refID}</Alert.Heading>
								<hr />
								<h5>An Email with the details have been sent. We will contact you shortly!!!</h5>
							</Alert>
						</Modal.Body>
					</Modal>
				</div>
			)}
		</div>
	);
};

export default RegisterForm;

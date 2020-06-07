import React from 'react';
import { Button } from 'semantic-ui-react';
import { Form, Col } from 'react-bootstrap';

const FormGroup = () => {
	return (
		<div>
			<Form.Group controlId="formName">
				<Form.Row>
					<Col>
						<Form.Control type="text" placeholder="First name" name="firstname" required />
					</Col>
					<Col>
						<Form.Control type="text" placeholder="Last name" name="lastname" required />
					</Col>
				</Form.Row>
			</Form.Group>

			<Form.Group controlId="formMobile">
				<Form.Row>
					<Col>
						<Form.Control type="text" placeholder="Mobile No." name="mobile" required />
					</Col>
					<Col>
						<Form.Control type="email" placeholder="Email" name="email" required />
					</Col>
				</Form.Row>
			</Form.Group>
			<Form.Group controlId="formUpload">
				<Form.File
					id="custom-file"
					label="Upload ID Card (JPEG or PNG)"
					accept="image/png, image/jpeg"
					name="idcard"
					required
					custom
				/>
			</Form.Group>
			<Form.Group>
				<Form.Row>
					<Col sm={8}>
						<Form.Control as="select" placeholder="Registration Type" name="regType" required>
							<option>Self</option>
							<option>Group</option>
							<option>Corporate</option>
							<option>Others</option>
						</Form.Control>
					</Col>
					<Col sm={4}>
						<Form.Control
							type="number"
							placeholder="No. of Tickets"
							name="tickets"
							defaultValue={1}
							required
						/>
					</Col>
				</Form.Row>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</div>
	);
};

export default FormGroup;

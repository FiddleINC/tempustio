import React, { useState } from 'react';
import { Container, Table } from 'semantic-ui-react';
import { Modal } from 'react-bootstrap';

import DataShow from '../DataShow/DataShow';

const RegistrationTable = (props) => {
	const [ show, setShow ] = useState(false);
	const [ dataIndex, setDataIndex ] = useState();
	return (
		<Container>
			<Table striped padded stackable className="table-scroll">
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>ID</Table.HeaderCell>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Date</Table.HeaderCell>
						<Table.HeaderCell>Mobile</Table.HeaderCell>
						<Table.HeaderCell>E-mail</Table.HeaderCell>
						<Table.HeaderCell>Type</Table.HeaderCell>
						<Table.HeaderCell>Tickets</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{props.data.map((data, index) => {
						return (
							<Table.Row key={index}>
								<Table.Cell
									selectable
									onClick={() => {
										setShow(true);
										setDataIndex(index);
									}}
									verticalAlign="middle"
								>
									{data.id}
								</Table.Cell>
								<Table.Cell>{data.name}</Table.Cell>
								<Table.Cell>{new Date(data.id).toString()}</Table.Cell>
								<Table.Cell>{data.mobile}</Table.Cell>
								<Table.Cell>{data.email}</Table.Cell>
								<Table.Cell>{data.type}</Table.Cell>
								<Table.Cell>{data.tickets}</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
				centered
			>
				<Modal.Header>
					<h4>Registration Data</h4>
				</Modal.Header>
				<DataShow data={props.data[dataIndex]} />
			</Modal>
		</Container>
	);
};

export default RegistrationTable;

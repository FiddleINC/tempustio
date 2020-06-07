import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader, Container, Button } from 'semantic-ui-react';
import { Modal } from 'react-bootstrap';
import domtoimage from 'dom-to-image';
import fileDownload from 'js-file-download';

import './Admin.css';
import RegistrationTable from './Table/Table';
import RegistrationChart from './Chart/Chart';

const Admin = () => {
	const [ registrationData, setRegistrationData ] = useState([]);
	const [ showChart, setShowChart ] = useState(false);

	const getRegistrationData = () => {
		axios.get('/api/dataHandler').then((res) => {
			setRegistrationData(res.data);
		});
	};

	const handleSaveClick = () => {
		domtoimage.toBlob(document.getElementById('node-chart')).then(function(blob) {
			fileDownload(blob, 'type-chart.png');
		});
	};

	const deleteAllData = () => {
		axios
			.delete('/api/dataHandler')
			.then((res) => {
				getRegistrationData();
				alert(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		getRegistrationData();
	}, []);

	return (
		<div className="grid-container">
			<Container>
				<div className="navbar justify-content-end">
					<Button
						onClick={() => {
							setShowChart(!showChart);
						}}
					>
						Type Visualization
					</Button>
					<Button
						onClick={() => {
							deleteAllData();
							console.log('Clicked');
						}}
					>
						Delete All
					</Button>
					<Button
						onClick={() => {
							window.location.href = '/';
						}}
					>
						Logout
					</Button>
				</div>

				<Container>
					<div className="data-table">
						<RegistrationTable data={registrationData} />
					</div>
				</Container>
			</Container>

			<div className="data-chart">
				{registrationData.length !== 0 ? (
					<Modal
						show={showChart}
						size="lg"
						centered
						onHide={() => {
							setShowChart(false);
						}}
					>
						<Modal.Body>
							<div className="chart" id="node-chart">
								<RegistrationChart data={registrationData} />
							</div>
							<Button
								className="export-button"
								onClick={() => {
									handleSaveClick();
								}}
							>
								Export Chart
							</Button>
						</Modal.Body>
					</Modal>
				) : (
					<Loader content="Loading" />
				)}
			</div>
		</div>
	);
};

export default Admin;

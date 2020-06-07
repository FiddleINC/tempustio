import React, { useState, useRef } from 'react';
import { Container, Button, Icon, Header } from 'semantic-ui-react';

import './Intro.css';
import Modals from '../Modals/Registration/Modals';
import LoginForm from '../Modals/Login/Login';

const Intro = () => {
	var ref = useRef();
	const [ showLoginForm, setShowLoginForm ] = useState(false);
	return (
		<div className="Intro bgimg">
			<Container>
				<div className="admin-button">
					<Button
						color="teal"
						icon
						labelPosition="left"
						onClick={() => {
							setShowLoginForm(!showLoginForm);
						}}
					>
						<Icon name="adn" />
						Admin
					</Button>
				</div>

				<div className="display-middle center">
					<Header size="huge" className="jumbo" dividing>
						<span>Tempustio</span>
					</Header>
					<Button
						size="large"
						icon
						labelPosition="left"
						onClick={() => {
							ref.current();
						}}
					>
						<Icon name="add user" />Register Here!
					</Button>
					<Modals generateRef={ref} />
					<LoginForm showState={showLoginForm} />
				</div>
			</Container>
		</div>
	);
};

export default Intro;

import React, { useState } from 'react';
import { Segment, Menu, Sticky } from 'semantic-ui-react';

import './Header.css';

const Header = () => {
	const [ active, setActive ] = useState(true);

	const handleItemClick = () => {
		setActive(!active);
	};

	return (
		<div className="appbar">
			<Sticky>
				<Segment inverted raised>
					<Menu inverted secondary>
						<Menu.Header>Tempustio - Event Registration</Menu.Header>
						<Menu.Menu position="right">
							<Menu.Item name="register" active={active} onClick={handleItemClick} />
							<Menu.Item name="admin" active={!active} onClick={handleItemClick} />
						</Menu.Menu>
					</Menu>
				</Segment>
			</Sticky>
		</div>
	);
};

export default Header;

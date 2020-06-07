import React from 'react';
import { Grid, Image, Header, Card, Segment } from 'semantic-ui-react';

import './DataShow.css';

const capital_letter = (str) => {
	str = str.split(' ');

	for (var i = 0, x = str.length; i < x; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	}

	return str.join(' ');
};

const DataShow = (props) => {
	return (
		<Segment>
			<Grid centered>
				<Grid.Row>
					<Grid.Column>
						<Image size="large" src={props.data.image.path} className="data-image" centered />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Card centered className="data-content">
							<div>
								<Header className="card-top">{capital_letter(props.data.name)}</Header>
								<div className="card-bottom">
									<Card.Description>
										<div className="description">
											{props.data.email}, {props.data.mobile}
										</div>
									</Card.Description>
									<Card.Meta>
										{props.data.type}, {props.data.tickets} Tickets
									</Card.Meta>
								</div>
							</div>
						</Card>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default DataShow;

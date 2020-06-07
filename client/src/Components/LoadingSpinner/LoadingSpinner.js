import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingSpinner = () => {
	return (
		<Dimmer page active>
			<Loader content="Generating ID" />
		</Dimmer>
	);
};

export default LoadingSpinner;

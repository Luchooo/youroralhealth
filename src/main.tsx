import React from 'react';
import ReactDOM from 'react-dom/client';
import TagManager from 'react-gtm-module';
import App from './App';
import './index.css';

const tagManagerArgs = {
	gtmId: 'AW-11457519495',
};
TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

import React from 'react';
import { render } from 'react-dom';

// import CSS (webpack puts it in index.html)
import css from './styles/style.styl';

//import components
import Main from './components/main';
import Single from './components/single';
import PhotoGrid from './components/photoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			{/* These are the children */}
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
)


render(router, document.getElementById('root'));




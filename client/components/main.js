import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Katduxstagram</Link>
				</h1>
			{/* React router will populate this.props.children */}
				{ React.cloneElement(this.props.children, this.props) }
			</div>
		)
	}
});

export default Main;

// reducers take the urrent state and the action

function posts(state = [], action) {
	console.log('The posts will change');
	console.log(state, action);
	return state;
}

export default posts;

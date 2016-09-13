// reducers take the urrent state and the action

function comments(state = [], action) {
	console.log('The comments will change')
	console.log(state, action);
	return state;
}

export default comments;

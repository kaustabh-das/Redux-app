const initialState = 1;

const changeThePage = (state = initialState, { type, payload }) => {
	switch (type) {
		case "CHANGE_PAGE": return state=payload;
		default: return state;
	}	
}

export default changeThePage;
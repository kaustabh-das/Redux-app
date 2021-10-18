const initialState = 0;

const changeTheSearchValue = (state = initialState, { type, payload }) => {
	switch (type) {
		case "CHANGE_VALUE": return state=payload;
		default: return state;
	}	
}

export default changeTheSearchValue;
const ROOT_URL = 'http://expertimmo.cubesolutions.tn:5002/api/v1/users';
export async function loginUser(dispatch, loginPayload) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let response = await fetch(`${ROOT_URL}/login`, requestOptions);
		let data = await response.json();
         console.log(data,"eeeeeeeeeeee")
		if (data.data.user) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('currentUser', JSON.stringify(data));
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: data.message });
		console.log(data);
		return error;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}

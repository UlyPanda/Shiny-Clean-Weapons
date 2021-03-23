import cookie from 'cookie';

export const signup = (user) => {
    return (dispatch) => {
        fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
            const action = {
                type: "SIGN_UP",
                value: data
            }
            dispatch(action)
        })
        .catch((error) => {
            console.log("Error:", error)
        });
    }
};

export const getAllWeapons = () => {
    return (dispatch) => {
        fetch('/weapons')
        .then(response => response.json())
        .then(data => {
            const action = {
                type: "GET_WEAPONS",
                value: data
            }
            dispatch(action)
        })
        .catch((error) => {
            console.log('Error:', error)
        });
    }
}

export const getSingleWeapon = () => {
    return (dispatch) => {
        fetch('/breakdown')
        .then(response => response.json())
        .then(data => {
            const action = {
                type: "GET_WEAPON",
                value: data
            }
            dispatch(action)
        })
        .catch((error) => {
            console.log('Error:', error)
        });
    }
}

const getToken = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['token']
};

export const logIn = (user) => {
    return (dispatch) => {
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': getToken()
            },
            body: JSON.stringify(user),
        })
        .then(response => console.log(response.json()))
        .then(data => {
            const action = {
                type: 'LOG_IN',
                value: data
            }
            dispatch(action)
        })
        .catch((error) => {
            console.log('Error:', error)
        });
    }
};

export const logOut = () => {
    return {
         type: 'LOG_OUT'
    }
};
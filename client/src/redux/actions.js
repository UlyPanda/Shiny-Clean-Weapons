import cookie from 'cookie';

const cookies = cookie.parse(document.cookie);
const headerToken = cookies["token"];

export const signUp = (user) => {
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
          console.log(data);
        const action = {
          type: "SIGN_UP",
          value: data
        }
        dispatch(action)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
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
        fetch('/breakdown', {
            headers: {
                'authorization': 'Bearer ' + headerToken
            }
        })
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

export const logIn = () => {
    return {
        type: "LOG_IN"
    };
};

export const logOut = () => {
    return {
         type: 'LOG_OUT'
    };
};
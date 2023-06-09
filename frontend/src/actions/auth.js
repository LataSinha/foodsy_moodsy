import axios from 'axios';
import Cookies from 'js-cookie';
import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    LOGOUT
} from './types'

export const googleAuthenticate = (state, code) => async dispatch => {
    if(state && code && !localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        const details = {
            'state': state,
            'code': code
        };

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`,config);
            dispatch({
                type: GOOGLE_AUTH_SUCCESS,
                payload: res.data
            });

            dispatch(load_user());
        } catch (err) {
            dispatch({
                type: GOOGLE_AUTH_FAIL
            });
        }
    }
};
export const checkAuthenticated = () => async dispatch => {
    if(localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ token: localStorage.getItem('access')});

        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,body,config)
            if(res.data.code!=='token_not_valid'){
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else{
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }

        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    }else{
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }

};

export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };
        
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`,config);
    
            dispatch({
                type:USER_LOADED_SUCCESS,
                payload:res.data
            })
        }catch(err) {
            dispatch({
                type: USER_LOADED_FAIL
            })
        }
    }else{
        dispatch({
            type: USER_LOADED_FAIL
        });
    }

};

export const login = (email,password) => async dispatch => {
    console.log(email,password);
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({email,password});

    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login/`,body,config);

        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });
        // dispatch(load_user());
    }catch(err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
    // return email;
};

export const signup = (firstName, lastName,age,gender, email, phoneNumber, password, password2) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({firstName, lastName,age, gender, email, phoneNumber, password, password2});
    var res;
    try{
        res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/register/`,body,config);

        dispatch({
            type:SIGNUP_SUCCESS,
            payload:res.data
        });
    }catch(err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
    console.log(res);
    // return res;
};

export const signup2 = (name, email, phoneNumber, address) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({name,email,phoneNumber,address});

    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/org/`,body,config);

        dispatch({
            type:SIGNUP_SUCCESS,
            payload:res.data
        });
    }catch(err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }

};

export const verify = (userid,usertoken) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({userid,usertoken});

    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`,body,config);
        console.log(res);

        dispatch({
            type:ACTIVATION_SUCCESS,
        });
    }catch(err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }

};

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }  
    };
    const body = JSON.stringify({email});

    try{
        await axios.post(`${process.env.REACT_APP_API_URL}/api/user/send-reset-password-email/`,body,config);

        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL
        });
    }
}

export const reset_password_confirm = (uid,token,new_password,re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({new_password,re_new_password});

    try{
        await axios.post(`${process.env.REACT_APP_API_URL}/api/user/reset-password/<${uid}>/<${token}>`,body,config);

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};
export const logout = () => dispatch =>{
    dispatch({
        type: LOGOUT
    })
}
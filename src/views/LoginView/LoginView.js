import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {authOperations} from 'redux/auth';
import s from './LoginView.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function LoginView() {
    const [user, setUser] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
    const { name, value } = target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn(user));
        reset();
    };

    const reset = () => {
        setUser(INITIAL_STATE);
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.form__label}>Email
                <input
                    className={s.form__input}
                    type='email'
                    name='email'
                    value={user.email}
                    required
                    onChange={handleChange}>
                </input>
            </label>
            <label className={s.form__label}>Password
                <input
                    className={s.form__input}
                    type='password'
                    name='password'
                    value={user.password}
                    required
                    onChange={handleChange}>                    
                </input>
            </label>
            <button className={s.form__button} type="submit">LogIn</button>
        </form>
    );
}

LoginView.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }),
};

export default LoginView;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {authOperations} from 'redux/auth';
import s from './RegisterView.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

function RegisterView() {
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
        dispatch(authOperations.register(user));
        reset();

    };

    const reset = () => {
        setUser(INITIAL_STATE);
    };

    return (        
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.form__label}>Name
                <input
                    className={s.form__input}
                    type='text'
                    name='name'
                    value={user.name}
                    required
                    onChange={handleChange}>
                </input>
            </label>
            <label className={s.form__label}>Email
                <input
                    className={s.form__input}
                    type='email'
                    name='email'
                    value={user.email}
                    required
                    autoComplete="username"
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
                    autoComplete="current-password"
                    onChange={handleChange}>                    
                </input>
            </label>
            <button className={s.form__button} type="submit">Register</button>
        </form>        
    );
}

RegisterView.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }),
};

export default RegisterView;
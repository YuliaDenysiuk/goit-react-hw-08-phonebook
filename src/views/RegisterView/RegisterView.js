import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {register} from '../../redux/auth/auth-operations';
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
        dispatch(register(user));
    };

    return (        
        <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
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
            <button className={s.form__button} type="submit">Register</button>
        </form>        
    );
}

export default RegisterView;
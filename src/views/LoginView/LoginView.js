import s from './LoginView.module.css';

function LoginView() {
    return (
        <form className={s.form} autoComplete="off">
            <label className={s.form__label}>Email
                <input className={s.form__input} type='email' name='email' value='' required></input>
            </label>
            <label className={s.form__label}>Password
                <input className={s.form__input} type='password' name='password' value='' required></input>
            </label>
            <button className={s.form__button} type="submit">Enter</button>
        </form>
    );
}

export default LoginView;
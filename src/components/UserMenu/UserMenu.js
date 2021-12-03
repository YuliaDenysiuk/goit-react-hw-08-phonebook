import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { authOperations, authSelectors } from 'redux/auth';
import s from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const submitHandler = () => {
    dispatch(authOperations.logOut());
  }

    return (
    <div>
      <span className={s.user}>Welcome, {name} </span>
      <button className={s.user__button} type="button" onClick={submitHandler}>Logout</button>
    </div>
  );
}

UserMenu.propTypes = {
  logOut: PropTypes.func,
};

export default UserMenu;
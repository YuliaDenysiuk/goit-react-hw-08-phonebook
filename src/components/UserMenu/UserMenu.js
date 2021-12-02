import s from './UserMenu.module.css';

function UserMenu() {
    return (
    <div>
      <span className={s.user}>Welcome, </span>
      <button className={s.user__button} type="button">Logout</button>
    </div>
  );
}

export default UserMenu;
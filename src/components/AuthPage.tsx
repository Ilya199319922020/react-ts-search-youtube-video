import React from 'react';
import styles from '../styles/AuthPage.module.scss';
import logo from '../assets/icon/sibdev_logo.png';

const AuthPage = () => {
	return (
		<div className={styles.auth}>
			<div className={styles.auth__logo}>
				<img src={logo} />
			</div>
			<div className={styles.auth__text}>
				Вход
			</div>
			<form className={styles.auth__form}>
				<div className={styles.auth__form_loginText}>
					Логин
				</div>
				<input
					className={styles.auth__form_loginInput} type="text"
				/>
				<div className={styles.auth__form_passwordText}>
					Пароль
				</div>
				<input
					className={styles.auth__form_passwordInput} type="password"
				/>
				<button
					className={styles.auth__form_btn} type='submit'
				>
					Войти
				</button>
			</form>
		</div>
	)
};

export default AuthPage;

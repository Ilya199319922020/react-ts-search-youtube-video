import React, { useEffect, useState } from 'react';
import styles from '../styles/AuthPage.module.scss';
import logo from '../assets/icon/sibdev_logo.png';
import { IUser } from '../models/User';
import users from '../assets/users/users.json';
import axios from 'axios';
import { createToken } from '../assets/secondaryFunctions/createToken';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setAuth } from '../store/reducers/ActionCreatotrs';
import { Navigate } from 'react-router-dom';

const AuthPage = () => {
	const dispatch = useAppDispatch();
	const { isAuth, error } = useAppSelector(state => state.authReducer);
	const [loginPayload, setLoginPayload] = useState<IUser>({ login: '', password: '' });
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value } = e.target;
		setLoginPayload(prevState => ({ ...prevState, [name]: value }))
	};

	const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsSubmit(true);
	};

	useEffect(() => {
		if (isSubmit && Object.keys(loginPayload).length !== 0) {
			if (loginPayload.login === users.login && loginPayload.password === users.password) {
				const tokenCreate = createToken();
				localStorage.setItem("token", tokenCreate);
				dispatch(setAuth())
				setIsSubmit(false)
			} else {
				dispatch(setAuth('Вееден неверный логин или парооль'))
				setIsSubmit(false)
			}
		}
	}, [isSubmit]);
	
	const token = localStorage.getItem("token");
	if (token && isAuth) {
		return <Navigate to='/search' />
	}

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
					className={styles.auth__form_loginInput}
					type="text"
					name="login"
					value={loginPayload.login}
					onChange={handleChange}
				/>
				<div className={styles.auth__form_passwordText}>
					Пароль
				</div>
				<input
					className={styles.auth__form_passwordInput}
					type="password"
					name="password"
					value={loginPayload.password}
					onChange={handleChange}
				/>
				<button
					onClick={handleSubmit}
					className={styles.auth__form_btn}
				>
					Войти
				</button>
			</form>
		</div>
	)
};

export default AuthPage;

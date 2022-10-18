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
import { favoritesSlice } from '../store/reducers/favoritesSlice';

const AuthPage = () => {
	const dispatch = useAppDispatch();
	const { isAuth, error } = useAppSelector(state => state.authReducer);
	const { favorites } = useAppSelector(state => state.favoritesSlice);
	const [loginPayload, setLoginPayload] = useState<IUser>({
		login: '', password: ''
	});
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
	const token = localStorage.getItem("token");
	const tokenLogin: any = localStorage.getItem("loginToken");
	
	useEffect(() => {
		if (isSubmit && Object.keys(loginPayload).length !== 0) {
			if (loginPayload.login === users.login && loginPayload.password === users.password) {
				const tokenCreate = createToken();
				localStorage.setItem("token", tokenCreate);
				localStorage.setItem('loginToken', JSON.stringify({ key: loginPayload.login, isUser: true, stateFavorite: [] }))
				dispatch(setAuth())
				setIsSubmit(false)
			} else {
				dispatch(setAuth('Вееден неверный логин или парооль'))
				setIsSubmit(false)
			}
		}
		if (tokenLogin && tokenLogin.key === loginPayload.login) {
			dispatch(favoritesSlice.actions.addStoreSaveLocal(tokenLogin.stateFavorite))
		}
	}, [isSubmit]);

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

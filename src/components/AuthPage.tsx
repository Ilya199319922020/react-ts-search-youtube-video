import React, { useEffect, useState } from 'react';
import styles from '../styles/AuthPage.module.scss';
import logo from '../assets/icon/sibdev_logo.png';
import { IUser } from '../models/User';
import users from '../assets/users/users.json';
import { createToken } from '../assets/secondaryFunctions/createToken';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addNameToken, addStoreLocalData, setAuth } from '../store/reducers/ActionCreatotrs';
import { Navigate } from 'react-router-dom';

const AuthPage = () => {
	const dispatch = useAppDispatch();
	const { isAuth, error, nameToken } = useAppSelector(state => state.authReducer);
	const [loginPayload, setLoginPayload] = useState<IUser>({
		login: '', password: ''
	});
	const [sateToken, setSateToken] = useState<any>()
	const [isSubmit, setIsSubmit] = useState(false);
	const [isActivePass, setIsActivePass] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value } = e.target;
		setLoginPayload(prevState => ({ ...prevState, [name]: value }));
	};
	const onIsActivePass = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsActivePass(!isActivePass);
	}
	const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		if (loginPayload.login) {
			dispatch(addNameToken(loginPayload.login));
		}
		setIsSubmit(true);
	};

	const token = localStorage.getItem("token");

	const verification = users
		.some(u => u.login === loginPayload.login && u.password === loginPayload.password
		);

	useEffect(() => {
		if (isSubmit && Object.keys(loginPayload).length !== 0) {
			if (verification) {
				const tokenCreate = createToken();
				localStorage.setItem("token", tokenCreate);
				dispatch(setAuth());
				setIsSubmit(false);
			} else {
				dispatch(setAuth('Введен неверный логин или пароль'));
				setIsSubmit(false);
			}
		}
	}, [isSubmit]);

	useEffect(() => {
		const tokenLogin: any = localStorage.getItem(`${nameToken}`)

		if (isAuth && typeof tokenLogin !== 'undefined' && tokenLogin !== null) {
			const objLoginToken = JSON.parse(tokenLogin);
			if (objLoginToken.nameToken === loginPayload.login) {
				dispatch(addStoreLocalData(objLoginToken.favorites));
			}
		}
	}, [isAuth]);

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
				{
					error &&
					<div
					className={styles.error__auth}
					>
						{
							error
						}
					</div>
				}
				<div className={styles.auth__form_passwordText}>
					Пароль
					<button
						onClick={onIsActivePass}
						className={styles.auth__form_passwordTextBtn}
					>
						{
							isActivePass && <span className={styles.auth__form_passwordTextBtnActive}></span>
						}
					</button>
				</div>
				<input
					className={styles.auth__form_passwordInput}
					type={!isActivePass ? "password" : "text"}
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

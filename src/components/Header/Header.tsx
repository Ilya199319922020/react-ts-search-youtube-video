import React, { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.scss';
import logo from '../../assets/icon/sibdev_logo.png';
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import { removeAuth, removeState, removeStateVideoList } from '../../store/reducers/ActionCreatotrs';
import { useAppDispatch } from '../../hooks/redux';

const Header = ({ }) => {
	const dispatch = useAppDispatch();
	const [isActiceBtn, setIsActiceBtn] = useState(true);
	const location = useLocation();

	const removeOnToken = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		localStorage.removeItem('token');
		dispatch(removeAuth());
		dispatch(removeState());
		dispatch(removeStateVideoList());
	};

	useEffect(() => {
		location.pathname === '/favorites'
			? setIsActiceBtn(false)
			: setIsActiceBtn(true);
	}, [location.pathname]);

	return (
		<div
			className={styles.wrapper}
		>
			<header
				className={styles.container__header}
			>
				<div
					className={styles.container__header_left}
				>
					<div
						className={styles.container__header_leftLogo}
					>
						<img src={logo} width={'19.54px'} />
					</div>
					<NavLink
						to='/search'
						className={isActiceBtn ? styles.container__header_linkAactive : styles.container__header_link}
					>
						<button
							className={
								isActiceBtn
									? styles.container__header_leftBtnaAactive
									: styles.container__header_leftBtn
							}
							onClick={() => setIsActiceBtn(true)}
						>
							Поиск
						</button>
					</NavLink>
					<NavLink
						to='/favorites'
						className={!isActiceBtn
							? styles.container__header_linkAactive
							: styles.container__header_link
						}
					>
						<button
							className={
								!isActiceBtn
									? styles.container__header_rightBtnaAactive
									: styles.container__header_rightBtn
							}
							onClick={() => setIsActiceBtn(false)}
						>
							Избранное
						</button>
					</NavLink>
				</div>
				<button
					className={styles.container__header_exitBtn}
					onClick={removeOnToken}
				>
					<NavLink to='/login' style={{ color: '#1390E5' }}>
						Выйти
					</NavLink>
				</button>
			</header>
			<Outlet />
		</div>
	);
};

export default Header;
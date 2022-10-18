import React from 'react';
import styles from '../../styles/Container.module.scss';
import logo from '../../assets/icon/sibdev_logo.png';
import { HeaderProps } from '../../TypeProps/TypeProps';
import { Link, Outlet } from 'react-router-dom';
import { removeAuth } from '../../store/reducers/ActionCreatotrs';
import { useAppDispatch } from '../../hooks/redux';

const Header = ({ }) => {
	const dispatch = useAppDispatch()

	const removeOnToken = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const tokenLogin: any = localStorage.getItem('loginToken');
		const objLoginToken = JSON.parse(tokenLogin)
		if (tokenLogin && objLoginToken.isUser) {
			localStorage.setItem('loginToken', JSON.stringify({ key: objLoginToken.key, isUser: false, stateFavorite: [] }))
		}
		dispatch(removeAuth())
	};
	return (
		<>
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
					<button
						className={styles.container__header_leftBtn}>
						<Link to='/search'>
							Поиск
						</Link>
					</button>
					<button
						className={styles.container__header_leftBtn}>
						<Link to='/favorites'>
							Избранное
						</Link>
					</button>
				</div>
				<button
					className={styles.container__header_exitBtn}
					onClick={removeOnToken}
				>
					<Link to='/login'>
						Выйти
					</Link>
				</button>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
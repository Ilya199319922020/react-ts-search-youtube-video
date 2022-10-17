import React from 'react';
import styles from '../../styles/Container.module.scss';
import logo from '../../assets/icon/sibdev_logo.png';
import { HeaderProps } from '../../TypeProps/TypeProps';
import { Link, Outlet } from 'react-router-dom';

const Header = ({ }) => {

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
				>
					Выйти
				</button>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
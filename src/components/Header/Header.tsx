import React from 'react';
import styles from '../../styles/Container.module.scss';
import logo from '../../assets/icon/sibdev_logo.png';
import { HeaderProps } from '../../TypeProps/TypeProps';

const Header: React.FC<HeaderProps> = ({ setIsSearchPage, isSearchPage }) => {
	const handleIsPage = () => {
		setIsSearchPage(!isSearchPage)
	}
	return (
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
					className={
						isSearchPage
							? styles.container__header_leftActiveBtn
							: styles.container__header_leftBtn
					}
					onClick={handleIsPage}
				>
					Поиск
				</button>
				<button
									className={
						!isSearchPage
							? styles.container__header_leftActiveBtn
							: styles.container__header_leftBtn
					}
					onClick={handleIsPage}
									>
					Избранное
				</button>
			</div>
			<button
				className={styles.container__header_exitBtn}
			>
				Выйти
			</button>
		</header>
	);
};

export default Header;
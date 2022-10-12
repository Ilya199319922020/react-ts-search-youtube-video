import React from 'react';
import styles from '../../styles/Container.module.scss';
import logo from '../../assets/icon/sibdev_logo.png';

const Header = () => {
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
			<img  src={logo} width={'19.54px'}/>
		</div>
		<button
			className={styles.container__header_leftActiveBtn}
		>
			Поиск
		</button>
		<button
			className={styles.container__header_leftBtn}
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
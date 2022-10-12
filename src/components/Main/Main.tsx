import React from 'react';
import styles from '../../styles/Main.module.scss';

const Main = () => {
	return (

		<main
			className={styles.main}
		>
			<h2
				className={styles.main__header}
			>
				Поиск видео
			</h2>
			<form
				className={styles.main__form}
			>
				<input
					className={styles.main__form_input}
					placeholder={'   Что хотите посмотреть?'}
					type={'text'}
				/>
				<label
					className={styles.main__form_label}
				>
					<button>
						Найти
					</button>
				</label>
			</form>
		</main>
	);
};

export default Main;
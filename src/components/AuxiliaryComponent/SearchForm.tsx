import React from 'react';
import { SearchFormProps } from '../../TypeProps/TypeProps';
import styles from '../../styles/Search.module.scss';
import stylesList from '../../styles/VideoList.module.scss';


export const SearchForm: React.FC<SearchFormProps> = ({
	children, searchField, videoList, onModalSave,
	handleChangeSearch, handleSubmitSearch
}) => {
	const style = videoList.length ? stylesList : styles;
	
	return (
		<form
			className={style.main__form}
		>
			<input
				className={style.main__form_input}
				placeholder={'   Что хотите посмотреть?'}
				type={'text'}
				value={searchField}
				onChange={handleChangeSearch}
			/>
			{
				videoList.length > 0
				&&
				<button
					className={style.main__form_iconBtn}
					onClick={onModalSave}
				>
					<svg
						width="24" height="22"
						viewBox="0 0 24 22" fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.8401 3.61012C20.3294 3.09912 19.7229 2.69376 19.0555 2.4172C18.388 2.14064 17.6726 1.99829 16.9501 1.99829C16.2276 1.99829 15.5122 2.14064 14.8448 2.4172C14.1773 2.69376 13.5709 3.09912 13.0601 3.61012L12.0001 4.67012L10.9401 3.61012C9.90843 2.57842 8.50915 1.99883 7.05012 1.99883C5.59109 1.99883 4.19181 2.57842 3.16012 3.61012C2.12843 4.64181 1.54883 6.04108 1.54883 7.50012C1.54883 8.95915 2.12843 10.3584 3.16012 11.3901L4.22012 12.4501L12.0001 20.2301L19.7801 12.4501L20.8401 11.3901C21.3511 10.8794 21.7565 10.2729 22.033 9.60547C22.3096 8.93801 22.4519 8.2226 22.4519 7.50012C22.4519 6.77763 22.3096 6.06222 22.033 5.39476C21.7565 4.7273 21.3511 4.12087 20.8401 3.61012Z" fill="#C5E4F9"
						/>
					</svg>
				</button>
			}
			<label
				className={style.main__form_label}
			>
				<button
					onClick={handleSubmitSearch}
				>
					{children}
				</button>
			</label>
		</form>
	);
};
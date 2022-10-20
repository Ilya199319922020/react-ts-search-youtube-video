import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IFavorites } from '../../models/Favorites';
import { addReqValueFavorites, openCloseModal, updateValueFavorites } from '../../store/reducers/ActionCreatotrs';
import styles from '../../styles/Modal.module.scss';
import { ModalFormProps } from '../../TypeProps/TypeProps';

const ModalForm: React.FC<ModalFormProps> = ({
	headerName, title, req, valueField,
	noBtnName, btnName, favorite, setIsModalSave
}) => {
	const { favorites } = useAppSelector(state => state.favoritesSlice)
	const dispatch = useAppDispatch();
	const [isActiveSave, setIsActiveSave] = useState(false);

	const currentId = favorites.length > 0
		?
		favorites[favorites.length - 1].id + 1
		:
		1;

	const [formState, setFormState] = useState<IFavorites>({
		id: favorite ? favorite.id : currentId,
		valueReq: valueField,
		valueName: '',
		maxAmount: 12,
	});

	const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value, } = e.target;
		setFormState(prevState => ({
			...prevState, [name]: value
		}))
	};

	const closeModal = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		dispatch(openCloseModal(false));
	}

	const handleSubmitForm = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setIsActiveSave(true);
		setIsModalSave(true);
	};

	useEffect(() => {
		if (formState.valueName && isActiveSave) {
			dispatch(
				btnName === 'Изменить'
					? updateValueFavorites(formState)
					: addReqValueFavorites(formState)
			);
			dispatch(openCloseModal(false));
		}
	}, [isActiveSave]);


	return (
		<>
			<h4
				className={styles.modal__block_title}
			>
				{headerName}
			</h4>
			<form
				className={styles.modal__block_form}
			>
				<div
					className={styles.modal__block_formTextRequest}
				>
					{req}
				</div>
				<input
					className={styles.modal__block_formInputRequest}
					type={'text'}
					name={'valueReq'}
					value={formState.valueReq}
					onChange={handleChangeForm}
					disabled={btnName === 'Изменить' ? false : true}
				/>
				<div
					className={styles.modal__block_formTextName}
				>
					{
						btnName !== 'Изменить' && <span style={{ color: 'red' }}>*</span>
					} {title}
				</div>
				<input
					className={styles.modal__block_formInputName}
					type={'text'}
					name={'valueName'}
					placeholder={'Укажите название'}
					value={formState.valueName}
					onChange={handleChangeForm}
				/>
				<div
					className={styles.modal__block_formTextSort}
				>
				</div>
				<input
					className={styles.modal__block_formInputSort}
					placeholder={'Не выбрано'}
					type={'text'}
					disabled={true}
				/>
				<div
					className={styles.modal__block_formRatingBlock}
				>
					<input
						className={styles.modal__block_formRatingInput}
						type="range"
						name={'maxAmount'}
						min={1}
						max={50}
						value={formState.maxAmount}
						onChange={handleChangeForm}
					/>

					<div
						className={styles.modal__block_formRatingCount}
					>
						{formState.maxAmount}
					</div>
				</div>

				<div
					className={styles.modal__block_formBtn}
				>
					<button
						className={styles.modal__block_formBtnNoSave}
						type='submit'
						onClick={closeModal}
					>
						{
							noBtnName
						}
					</button>
					<button
						className={styles.modal__block_formBtnSave}
						type='submit'
						onClick={handleSubmitForm}
					>
						{
							btnName
						}
					</button>
				</div>
			</form>
		</>
	);
};

export default ModalForm;
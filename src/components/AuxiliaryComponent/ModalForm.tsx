import React, { useState } from 'react';
import { IFormValue } from '../../models/FormValue';
import styles from '../../styles/Modal.module.scss';
import { ModalFormProps } from '../../TypeProps/TypeProps';

const ModalForm: React.FC<ModalFormProps> = ({
	headerName, title, req, valueField,
	sortName, value, noBtnName, btnName,
}) => {
	const [formState, setFormState] = useState<IFormValue>({
		valueReq: valueField,
		valueName: '',
		valueSort: '',
		valueRange: 12,
	});

	const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormState(prevState => ({ ...prevState, [name]: value }))
	};

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
					disabled={true}
				/>
				<div
					className={styles.modal__block_formTextName}
				>
					{title}
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
					{sortName}
				</div>
				<input
					className={styles.modal__block_formInputSort}
					type={'text'}
					name={'valueSort'}
					value={formState.valueSort}
					onChange={handleChangeForm}
				/>
				<div
					className={styles.modal__block_formRatingBlock}            >
					<input
						className={styles.modal__block_formRatingInput}
						type="range"
						name={'valueRange'}
						min={1}
						max={50}
						value={formState.valueRange}
						onChange={handleChangeForm}
					/>

					<div
						className={styles.modal__block_formRatingCount}
					>
						{formState.valueRange}
					</div>
				</div>

				<div
					className={styles.modal__block_formBtn}
				>
					<button
						className={styles.modal__block_formBtnNoSave}
						type='submit'
					>
						{noBtnName}
					</button>
					<button
						className={styles.modal__block_formBtnSave}
						type='submit'
					>
						{btnName}
					</button>
				</div>
			</form>
		</>
	);
};

export default ModalForm;
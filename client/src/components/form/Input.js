function Input(props) {
	const {
		field = 'input',
		type,
		name,
		required,
		placeholder,
		value,
		onChange,
		color,
		fontWeight,
		textAlign,
    fontSize,
		width = '100%',
		height = '100%',
		borderRadius = '2rem',
    margin = '0 0 1.6rem 0',
		padding = '2rem',
	} = props;

	const style = {
		width: `${width}`,
		height: `${height}`,
		padding: `${padding}`,
    margin: `${margin}`,

		border: 'none',
		borderRadius: `${borderRadius}`,
		outline: 'none',

		fontSize: `${fontSize}`,
		fontWeight: `${fontWeight}`,
		textAlign: `${textAlign}`,

		backgroundColor: 'rgba(0, 0, 0, .1)',
		color: `${color}`,

		resize: 'none',
	};

	const attributes = {
		style,
		type,
		name,
		required,
		placeholder,
		value,
		onChange,
	};

	return (
		<>
			{field === 'textarea' ? (
				<textarea {...attributes} />
			) : (
				<input {...attributes} />
			)}
		</>
	);
}

export default Input;

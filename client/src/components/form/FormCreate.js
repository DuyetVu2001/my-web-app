import Input from './Input';

const FormCreate = () => {
	return (
		<>
			<Input
				field="textarea"
				required={true}
				type="text"
				name="desc"
				height="16rem"
				placeholder="Description"
				// value={desc}
				// onChange={onChange}
			/>
			<Input
				required={true}
				type="text"
				name="genre"
				placeholder="Genre"
				// value={genre}
				// onChange={onChange}
			/>
			<Input
				required={true}
				type="number"
				name="time_read"
				placeholder="Time read (minute)"
				// value={time_read}
				// onChange={onChange}
			/>

			<Input
				field="textarea"
				required={true}
				height="100vh"
				type="text"
				name="content"
				placeholder="Content..."
				// value={content}
				// onChange={onChange}
			/>
			<Input
				type="submit"
				name="submit"
				value="Submit"
				borderRadius="1.6rem"
				width="10rem"
				textAlign="center"
				padding="1.2rem 2.4rem"
				color="#003d5b"
				fontWeight="700"
			/>
		</>
	);
};

export default FormCreate;

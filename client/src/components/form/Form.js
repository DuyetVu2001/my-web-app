const Form = ({ children }) => {
	const styles = {};

	const onSubmitForm = (e) => {
		e.preventDefault();

    alert('Hello');
	};

	return <form onSubmit={onSubmitForm}>{children}</form>;
};

export default Form;

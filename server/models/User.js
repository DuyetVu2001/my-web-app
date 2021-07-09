import mongoose from 'mongoose';
// mongoose.set('debug', true);

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		// security question when forget password
		security_question: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
);

export default mongoose.model('User', UserSchema);

import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

modules.export = mongoose.model('User', UserSchema);

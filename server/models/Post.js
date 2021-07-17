import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},

		img: {
			type: String,
			required: true,
		},

		desc: {
			type: String,
			required: true,
		},

		content: {
			type: String,
			required: true,
		},

		genre: {
			type: String,
			required: true,
		},

		time_read: {
			type: Number,
			required: true,
		},

		author: {
			type: String,
			required: true,
			default: 'Anonymous',
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Post', PostSchema);

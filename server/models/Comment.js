import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
	{
		comment: String,
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		post: {
			type: Schema.Types.ObjectId,
			ref: 'Post',
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Comment', CommentSchema);

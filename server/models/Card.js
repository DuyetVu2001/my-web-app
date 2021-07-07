import mongoose, { Schema } from 'mongoose';

const CardSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
        like_count: {
            type: Number,
            default: 0,
        },
        img_url: String,
		user: {
			type: Schema.ObjectId,
            ref: 'User'
		},
	},
	{ timestamps: true }
);

modules.export = mongoose.model('Card', cardSchema);

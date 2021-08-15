import User from '../models/User.js';
import Post from '../models/Post.js';
import Comment from '../models/Comment.js';

//@ Post -> /comments/upload -> upload comment -> private
export const uploadComment = async (req, res) => {
	try {
		// Create new comment and save
		const newComment = new Comment(req.body);
		await newComment.save();

		res.status(201).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

//@ Get -> /comments -> get all comment for each difference post -> public
export const getComments = async (req, res) => {
	try {
		const comments = await Comment.find({ post: req.body.post_id }, '-post')
			.sort({ createdAt: -1 })
			.populate('user', 'username avatar -_id');

		res.status(200).json({ success: true, comments });
	} catch (error) {
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

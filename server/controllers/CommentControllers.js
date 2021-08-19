import Comment from '../models/Comment.js';

//@ Post -> /comments/ -> upload comment -> private
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
		const comments = await Comment.find({ post: req.params.id }, '-post')
			.sort({ createdAt: -1 })
			.populate('user', 'username avatar');

		res.status(200).json({ success: true, comments });
	} catch (error) {
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

//@ Put -> /comments/:id -> update comment -> private
export const updateComment = async (req, res) => {
	try {
		await Comment.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{
				new: true,
			}
		);

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

//@ Delete -> /comments/:id -> delete comment -> private
export const deleteComment = async (req, res) => {
	try {
		await Comment.findByIdAndRemove(req.params.id);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

//@ Delete -> /comments/delete-all -> delete all comments (deployment) -> SOS
export const deleteAllComments = async (req, res) => {
	try {
		await Comment.remove();
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

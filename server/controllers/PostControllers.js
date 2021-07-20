import Post from '../models/Post.js';

//@ Get -> posts/ -> get posts data -> public
export const readPost = async (req, res) => {
	try {
		// Get all post data
		const data = await Post.find();

		// Return post data to client
		res.json({ success: true, data });
	} catch (error) {
		res.json({ success: false, error });
	}
};

//@ Get -> posts/create -> create post -> private
export const createPost = async (req, res) => {
	try {
		// Get post data from client
		const data = req.body;

		// Create a new Post model and save to DB
		const newPost = new Post(data);
		await newPost.save();

		// Return notification to client
		res.json({ success: true });
	} catch (error) {
		res.json({ success: false, error });
	}
};

//@ PUT -> posts/update -> update post -> private
export const updatePost = async (req, res) => {
	try {
		// Get update post data from client submission
		const data = req.body;

		// Create a Post model
		const newPost = new Post(data);

		// Update db
		await Post.findByIdAndUpdate(data._id, newPost, { new: true });

		// Return notification to client
		res.json({ success: true });
	} catch (error) {
		res.json({ success: false, error });
	}
};

//@ DELETE -> posts/delete -> delete post -> private
export const deletePost = async (req, res) => {
	try {
		// Get post id from client
		const post_id = req.body._id;

		// Delete
		await Post.findOneAndDelete(post_id);

		// Return notification to client
		res.json({ success: true });
	} catch (error) {
		res.json({ success: false, error });
	}
};

const Blog = require('../model/blogmodel');

//-----------------------------create blog----------------------------------

exports.createBlog = async (req, res) => {
    try {
        const { title, content, metatitle, metadescription } = req.body;
const image = req.file.filename;
const author = req.user.id;

        // Validate incoming data
        if (!title || !content || !image) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Create a new blog post
        const blog = new Blog({
            title,
            content,
            metatitle,
            metadescription,
            image,
            author
        });

        // Save the blog to the database
        await blog.save();

     return   res.status(201).json({
            message: 'Blog post created successfully!',
            blog
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create blog post', error: error.message });
    }
}



//-----------------------------get all blogs----------------------------------

exports.getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find().populate('author','username');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


//-----------------------------get single blog by slug----------------------------------

exports.getBlogBySlug = async (req, res) => {
    try {
        const slug=req.params.id;
        console.log(slug)
        const blog = await Blog.findOne({ slug}).populate('author','username');
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve blog', error: error.message });
    }
};


//-----------------------------update blog----------------------------------

exports.updateBlog=async(req,res)=>{

const slug=req.params.id;
const { title, content, metatitle, metadescription } = req.body;
const image=req.file.filename;

const blog=await Blog.findOne({slug});


if(!blog){
    return res.status(404).json({message: 'Blog not found'});
}


}
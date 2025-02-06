const express = require('express');
const router = express.Router();
const {createBlog, getAllBlogs,getBlogBySlug
}=require('../controller/blogcontroller');
const upload = require('../middleware/multer');
const { authorizationUser,
    authorizationRoles } = require('../middleware/authToken');


    //-------------------------routes-------------------

    router.route('/create-blog').post(authorizationUser,authorizationRoles('admin'), upload.single('image'), createBlog);
    router.route('/blogs').get(getAllBlogs);
    router.route('/single-blog/:id').get(getBlogBySlug)


    module.exports = router;


// This is how you can use this router in your app.js file:
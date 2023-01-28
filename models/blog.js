const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {type:String, required:true},
    snippet:{type:String, required:true},
    body:{type:String, required:true}
},{timestamps:true}) //automatically create time stamp

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;
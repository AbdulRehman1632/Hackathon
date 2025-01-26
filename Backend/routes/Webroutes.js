// import express from "express";
// import Listing from "../models/Models.js";
// import { enums } from "../enum/enum.js";
// import uploads from "../helpers/Cloudinary.js"
// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from "dotenv"
import express from "express"
import uploads from "../helpers/Cloudinary.js"
import { AddController, DeleteController, GetController } from "../otherController/otherController.js"







export const ListingRoutes = express.Router()

ListingRoutes.get("/" , GetController)

ListingRoutes.post("/add", uploads.single('CNICImage') , AddController)

ListingRoutes.delete("/delete/:id", DeleteController)

// ListingRoutes.put("/edit/:id", uploads.single('CNICImage') , EditController)





















// const ListingRoutes = express.Router();

// dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
// });


// ListingRoutes.get("/", async (req, res) => {
//   try {
//     const GetAllListing = await Listing.find();
//     res
//       .status(200)
//       .send({ status: 200, message: enums.SUCCESS, data: GetAllListing });
//   } catch (error) {
//     res.status(400).send({ status: 404, message: enums.ERRORS });
//   }
// });



// ListingRoutes.post("/add", uploads.single('BlogImage') , async (req, res) => {
//   const { BlogTitle, BlogAuthor, BlogDescription , BlogCategory } = req.body;
//   const BlogImage = req.file?.path;
//   const BlogImageId = req.file?.filename
//   console.log = (BlogImageId)


//   try {
//     const newBlog = {
//         BlogTitle,
//         BlogAuthor,
//         BlogCategory,
//         BlogDescription,
//         BlogImage,
//         BlogImageId
//      }

//      await Listing.create(newBlog);

//      res.status(200).send({ status: 200, message: enums.ADD,newBlog });
 

//   } 
//   catch (error) {
//     res.status(400).send({ status: 404, message: enums.ERRORS });
//   }
// });




// // ListingRoutes.delete("/delete-all", async (req, res) => {
// //   try {
// //     await Listing.deleteMany({});
// //     res.status(200).send({ message: "All Books Blogs successfully" });
// //   } catch (error) {
// //     res.status(500).send({ message: error.message });
// //   }
// // });


// ListingRoutes.delete("/delete/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await Listing.findByIdAndDelete(id);

//     if(response.BlogImageId){
//       await cloudinary.uploader.destroy(response.BlogImageId)
      
//     }
//     res
//       .status(200)
//       .send({ status: 200, message: enums.DELETE, data: response });
//   } catch (error) {
//     res.status(400).send({ status: 404, message: enums.ERRORS });
//   }
// });



// ListingRoutes.put("/edit/:id", uploads.single('BlogImage') , async (req, res) => {

//   const {id} = req.params
//   const { BlogTitle, BlogAuthor, BlogDescription , BlogCategory } = req.body;
//   const NewBlogImage = req.file?.path;
//   const NewBlogImageId = req.file?.filename;
//   console.log("Uploaded New Image:", NewBlogImage);  // Log uploaded image
//   console.log("Uploaded New Image ID:", NewBlogImageId);
  


//   try {

//     const response = await Listing.findById(id)
    

//     if (NewBlogImage && response.BlogImageId) {
//       await cloudinary.uploader.destroy(response.BlogImageId);
//     }


//     const UpdatedBlog = await Listing.findByIdAndUpdate(
//       id,
//       { 
//         BlogTitle: BlogTitle || response.BlogTitle,
//         BlogDescription: BlogDescription || response.BlogDescription,
//         BlogCategory: BlogCategory || response.BlogCategory,
//         BlogAuthor: BlogAuthor || response.BlogAuthor,
//         BlogImage: NewBlogImage || response.BlogImage,
//         BlogImageId: NewBlogImageId || response.BlogImageId,

//       },
//       { new: true }
//     );

//      res.status(200).send({ status: 200, message: enums.UPDATE,UpdatedBlog });
 

//   } 
//   catch (error) {
//     res.status(400).send({ status: 404, message: enums.ERRORS });
//   }
// });


// export default ListingRoutes;

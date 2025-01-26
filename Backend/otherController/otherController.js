import express from "express";
import Listing from "../models/Models.js";
import { enums } from "../enum/enum.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const GetController = async (req, res) => {
  try {
    const GetAllListing = await Listing.find();
    res
      .status(200)
      .send({ status: 200, message: enums.SUCCESS, data: GetAllListing });
  } catch (error) {
    res.status(400).send({ status: 404, message: enums.ERRORS });
  }
};

const AddController = async (req, res) => {
  const {
    Username,
    FatherName,
    CNIC,
    Address,
    Purpose,
    BankAccount,
    AccountNumber,
    GuarantedName1,
    GuarantedAddress1,
    GuarantedCnic1,
    GuarantedName2,
    GuarantedAddress2,
    GuarantedCnic2,
  } = req.body;
  const CNICImage = req.file?.path;
  const CNICImageId = req.file?.filename;
  console.log = CNICImageId;

  try {
    const newUser = {
      Username,
      FatherName,
      CNIC,
      Address,
      Purpose,
      CNICImage,
      CNICImageId,
      BankAccount,
      AccountNumber,
      GuarantedName1,
      GuarantedAddress1,
      GuarantedCnic1,
      GuarantedName2,
      GuarantedAddress2,
      GuarantedCnic2,
    };

    await Listing.create(newUser);

    res.status(200).send({ status: 200, message: enums.ADD, newUser });
  } catch (error) {
    res.status(400).send({ status: 404, message: enums.ERRORS });
  }
};

const DeleteAllController = async (req, res) => {
  try {
    await Listing.deleteMany({});
    res.status(200).send({ message: "All Users are deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const DeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Listing.findByIdAndDelete(id);

    if (response.CNICImageId) {
      await cloudinary.uploader.destroy(response.CNICImageId);
    }
    res
      .status(200)
      .send({ status: 200, message: enums.DELETE, data: response });
  } catch (error) {
    res.status(400).send({ status: 404, message: enums.ERRORS });
  }
};

// const EditController = async (req, res) => {
//   const { id } = req.params;
//   const { Username, FatherName, CNIC, Address, Purpose } = req.body;
//   const NewCNICImageID = req.file?.path;
//   const NewCNICImage = req.file?.filename;

//   try {
//     const response = await Listing.findById(id);

//     if (NewCNICImage && response.CNICImageId) {
//       await cloudinary.uploader.destroy(response.CNICImageId);
//     }

//     const UpdatedUser = await Listing.findByIdAndUpdate(
//       id,
//       {
//         Username: Username || response.Username,
//         CNIC: CNIC || response.CNIC,
//         FatherName: FatherName || response.FatherName,
//         Address: Address || response.Address,
//         Purpose: Purpose || response.Purpose,
//         CNICImage: NewCNICImage || response.CNICImage,
//         CNICImageId: NewCNICImageID || response.CNICImageId,
//       },
//       { new: true }
//     );

//     res.status(200).send({ status: 200, message: enums.UPDATE, UpdatedUser });
//   } catch (error) {
//     res.status(400).send({ status: 404, message: enums.ERRORS });
//   }
// };

export {
  GetController,
  AddController,
  DeleteAllController,
  DeleteController,
  // EditController,
};

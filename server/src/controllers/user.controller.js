import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/apiError.js'
import { ApiResponse } from '../utils/apiResponse.js'
import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'

const registerUser = asyncHandler(async (req, res) => {

    const { username, email, fullname, avatar, password } = req.body;

    if ([username, email, fullname, avatar, password]?.some((field) => {
        field?.trim() === ""
    })) {
        throw new ApiError(400, 'All fields are required')
    }

    const alreadyRegisteredUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (alreadyRegisteredUser) {
        throw new ApiError(409, 'Email or Username is already in use')
    }

    const avatarPath = req.files?.avatar[0]?.path
    if (!avatarPath) {
        throw new ApiError(400, 'User profile picture required')
    }

    const avatarLink = await uploadOnCloudinary(avatarPath)
    if (!avatarLink) {
        throw new ApiError(400, 'User profile picture required')
    }

    const user = await User.create({
        username: username.toLoverCase(),
        email,
        fullname,
        password,
        avatar: avatarLink?.url
    })

    const createdUser = await User.findById(user?._id).select("-password -refreshtoken")

    if (!createdUser) {
        throw new ApiError(500, 'Someting went wrong file registering user')
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, 'User registered Succesfully')
    )

})

export { registerUser }


import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/apiError.js'
import { ApiResponse } from '../utils/apiResponse.js'
import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'

const generateAccessRefreshTokenWithUserDetails = async (userId) => {
    try {
        const user = await User.findById(userId)
        const refreshToken = user.generateRefreshToken()
        const accessToken = user.generateAccessToken()

        user.refreshtoken = refreshToken;
        await user.save({ validateBeforeSave: false })

        const loggedInUserDetails = user.select('-password -refreshtoken')
        console.log('check', loggedInUserDetails)

        return { accessToken, refreshToken, loggedInUserDetails }
    }
    catch (err) {
        throw new Api(500, "Some thing went wrong while generating refresh or access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {

    const { username, email, fullname, password } = req.body;

    if (
        [username, email, fullname, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const alreadyRegisteredUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (alreadyRegisteredUser) {
        throw new ApiError(409, 'Email or Username is already in use')
    }

    const avatarPath = req.file?.path
    if (!avatarPath) {
        throw new ApiError(400, 'User profile picture required')
    }

    const avatarLink = await uploadOnCloudinary(avatarPath)

    if (!avatarLink) {
        throw new ApiError(400, 'Cloudinary profile picture saving failed')
    }

    const user = await User.create({
        username: username.toLowerCase(),
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

const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email) {
        throw new ApiError(400, "Username or Email required")
    }

    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        throw ApiError(404, "User doesn't exist")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Password doesn't match with email or username")
    }

    const { accessToken, refreshToken, loggedInUserDetails } = await generateAccessRefreshTokenWithUserDetails(user._id)

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie('accesToken', accessToken, options)
        .cookie('refreshToken', refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUserDetails, accessToken, refreshToken
                },
                'User Logged In Succesfully'
            )
        )
})

const logoutUser = asyncHandler(async (req, res) => {

})

export { registerUser, loginUser }


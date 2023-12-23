import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        google: {
            id: {
                type: String,
            },
            name: {
                type: String,
            },
            email: {
                type: String,
            },
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", userSchema);

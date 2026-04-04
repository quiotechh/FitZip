import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    createdAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: {type: String, trim: true},
        email: {type: String, trim: true, unique: true, required: [true, "Email is required"], lowercase: true},
    },{timestamps: true}
)

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
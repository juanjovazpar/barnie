import mongoose, { Schema, Model, CallbackError } from 'mongoose';

import { ICoreUser } from '@barnie/interfaces';
import { isValidEmail, getHashedToken } from '@barnie/helpers';

const schema: Schema<ICoreUser> = new Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, 'Email is required'],
      validate: {
        validator: isValidEmail,
        message: (props) => `${props.value} is not a valid email format`,
      },
    },
    password: {
      type: String,
      required: [true, 'User is required'],
    },
    name: {
      type: String,
      default: 'Unknown',
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationToken: {
      type: String,
      unique: true,
    },
    resetPasswordToken: {
      type: String,
    },
    last_login: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

schema.pre<ICoreUser>('save', async function (next) {
  try {
    if (this.isNew) {
      const hashedVerificationToken = await getHashedToken();
      this.verificationToken = hashedVerificationToken;
    }

    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

const User: Model<ICoreUser> = mongoose.model<ICoreUser>('User', schema);

export default User;

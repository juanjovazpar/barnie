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
      required: [true, 'Password is required'],
    },
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationToken: {
      type: String,
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

schema.methods.toJSON = function () {
  const obj = this.toObject();
  return {
    name: obj.name,
    email: obj.email,
    last_login: obj.last_login,
    updatedAt: obj.updatedAt,
    createdAt: obj.createdAt,
  };
};

const User: Model<ICoreUser> = mongoose.model<ICoreUser>('User', schema);

export default User;

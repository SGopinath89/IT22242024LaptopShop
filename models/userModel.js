import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => {
          // Regular expression for email format validation
          const emailRegex =
            /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|co\.uk|io)$/;
          return emailRegex.test(value);
        },
        message: "Invalid email format",
      },
    },
    photo: {
      type: String,
      validate: {
        validator: (value) => {
          // Regular expression to check file extensions (PNG, JPG, GIF)
          const fileExtensionRegex = /\.(png|jpg|jpeg|gif)$/i;
          return fileExtensionRegex.test(value);
        },
        message: "Invalid file format. Only PNG, JPG, and GIF are allowed.",
      },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          // Regular expression for phone number format validation (only digits)
          const phoneRegex = /^\d+$/;
          return phoneRegex.test(value);
        },
        message: "Invalid phone number format (only digits allowed)",
      },
    },
    address: {
      type: {},
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Minimum password length
      validate: {
        validator: (value) => {
          // Regular expression for password complexity validation
          const passwordRegex =
            /^(?=.*[a-z].*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&^])[A-Za-z\d@$!%*?&^]{8,}$|^.{8,}$/;
          return passwordRegex.test(value);
        },
        message:
          "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special symbol",
      },
    },

    role: {
      type: Number,
      default: 0,
      validate: {
        validator: (value) => {
          // Validates role value within a specific range (e.g., 0-2)
          return value >= 0 && value <= 2;
        },
        message: "Invalid role value (must be between 0 and 2)",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);

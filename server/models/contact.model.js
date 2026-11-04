import mongoose from 'mongoose';

// Contact messages from the portfolio contact form.
const contactSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    contactNumber: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
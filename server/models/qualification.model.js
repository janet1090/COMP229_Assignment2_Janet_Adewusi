import mongoose from 'mongoose';

// Education and professional qualifications for the portfolio.
const qualificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    completion: { type: Date, required: true },
    description: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model('Qualification', qualificationSchema);
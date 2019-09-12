import mongoose from 'mongoose'

const scenesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    description: String
  },
  { timestamps: true }
)

export const Scenes = mongoose.model('scenes', scenesSchema)

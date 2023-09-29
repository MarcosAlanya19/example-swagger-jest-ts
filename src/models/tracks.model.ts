import mongoose from 'mongoose';

const TrackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: () => {
          return true;
        },
        message: 'ERROR_URL',
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: Number,
      end: Number,
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export type TrackEntity = mongoose.InferSchemaType<typeof TrackSchema>;
export const Track: mongoose.Model<TrackEntity> = mongoose.model<TrackEntity>('Track', TrackSchema);

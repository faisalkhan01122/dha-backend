import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
    {
        images: [String],
        videos: [String],
        description: {
            type: String,
            required: [true, "Please provide a description."],
        },
        bannerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Banner",
        },
        title: {
            type: String,
            required: [true, "Please provide a title."],
        },
        slug: {
            type: String,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

// Automatically create/update slug
activitySchema.pre("save", function (next) {
    this.slug = this.title.toLowerCase().replace(/ /g, "-");
    next();
});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
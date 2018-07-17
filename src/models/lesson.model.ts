import * as mongoose from 'mongoose';
import constant from '../constant';

export interface ILesson {
    title: String,
    name: String,
    content: String,
    createBy: String,
    date: Date,
    place: String
}

export interface ILessonModel  extends ILesson, mongoose.Document {}

const lessonSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    createBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
    },
    place: {
        type: String,
    },
    date: {
        type: Date,
        require: true
    },
    poster: {
        type: String
    },
    idResource: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"resource"
    }
});

export const LessonModel = mongoose.model<ILessonModel>('lesson', lessonSchema);
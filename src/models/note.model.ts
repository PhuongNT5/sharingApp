import * as mongoose from 'mongoose';
import constant from '../constant';

export interface INote {
    title: String,
    location: String,
    startTime: String,
    startDate: String,
    endDate: String,
    endTime: String,
    repeat: String
}
export interface INoteModel extends INote, mongoose.Document {}

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    location: {
        type: String,
    },
    startTime: {
        type: String
    },
    startDate : {
        type: String
    },
    endDate: {
        type: String
    },
    endTime:{
        type: String
    },
    repeat: {
        type: String
    },
    createdBy: {
        type: String
    },
    modified: {
        type: Date
    },
    modifiedBy: {
        type: String
    },
});
export const NoteModel = mongoose.model<INoteModel>('note', noteSchema);
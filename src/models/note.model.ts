import * as mongoose from 'mongoose';
import constant from '../constant';

export interface INote {
    title: String,
    location: String,
    startTime: Date,
    startDate: Date,
    endDate: Date,
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
        type: Date
    },
    startDate : {
        type: Date
    },
    endDate: {
        type: Date
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
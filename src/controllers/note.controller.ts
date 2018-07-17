import { INote } from '../models';
import { NoteRepository} from '../repositories';
import { NoteServiceInstance} from '../services/note.service';

const noteService = NoteServiceInstance;

const getNotes = () => {
    return noteService.getNotes().then(res => Promise.resolve(res)
            .catch(err => Promise.reject(err))
)}

const createNote = (req) => {
    return noteService.createNote(req).then(res => Promise.resolve(res))
            .catch(err => Promise.reject(err))
}

const findById = (req) => {
    return noteService.findById(req).then(res => { Promise.resolve(res)})
            .catch(err => Promise.reject(err));
}

export const NoteController ={
    getNotes: getNotes,
    createNote: createNote,
    findById: findById
}
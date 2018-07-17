import { INote, IError, RemoveObject} from '../models';
import { DBContextSingleton} from '../repositories';
import { INoteRepository} from '../IRepositories';
import { INoteService } from '../IServices/INoteService';


class NoteService implements INoteService  {
    private static instance: NoteService;
    private noteRepository : INoteRepository;
    private constructor() {
        this.noteRepository = DBContextSingleton.getNote();
    }
    public static getInstance() {
        if (!NoteService.instance) {
            NoteService.instance = new NoteService();
        }
        return NoteService.instance;
    }

    getNotes(): Promise <INote[] | IError> {
        return this.noteRepository.findAll()
        .then((notes) => Promise.resolve(notes))
        .catch((err) => Promise.reject(err))
    }
    createNote(newNote) : Promise <INote> {
        return this.noteRepository.insert(newNote)
        .then((note) => Promise.resolve(note))
        .catch((err)=> Promise.reject(err))
    }
    findById( noteId: string) : Promise<INote> {
        return this.noteRepository.findById(noteId)
        .then( (note) => Promise.resolve(note))
        .catch((err) => Promise.reject(err));
    }
}

export const NoteServiceInstance = NoteService.getInstance();
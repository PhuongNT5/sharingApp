import { INoteRepository } from '../IRepositories';
import { INote, INoteModel,NoteModel, IError, RemoveObject} from '../models';


export class NoteRepository implements INoteRepository {
    findAll(): Promise <INote[] | IError> {
        return NoteModel.find().then((notes: INoteModel[]) => {
            return Promise.resolve(notes.map((note) => note.toObject() as INote));
        }).catch(err => {
            return Promise.reject({
                statusCode: 400,
                message: 'sorry. error'
            });
        });
    }
    findOne( note: any): Promise <INote> {
        return NoteModel.findOne(note).then(note => {
            if (note) {
                return Promise.resolve(note.toObject() as INote);
            }else{
                return Promise.reject('Note does not exist');
            }
        }).catch( err => {
            return Promise.reject(err);
        });
    }
    findById (noteId: String): Promise <INote> {
        return NoteModel.findById ({ _id: noteId}).then(note => {
            if (note) {
                return Promise.resolve( note.toObject() as INote);
            }else {
                return Promise.reject ('This note does not exist');
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    }
    delete (noteId: string): Promise <RemoveObject> {
        return NoteModel.findOne({_id: noteId}).then(note => {
            if (!note) {
                return Promise.reject('Note does not exist');
            }else {
                return NoteModel.remove({_id: note}).then((result: any) => {
                    return Promise.resolve(result as RemoveObject);
                }).catch(err => {
                    return Promise.resolve(err);
                });
            }
        });
    }

    update (newNote: INote): Promise<INote> {
        return NoteModel.findOne({startDate: newNote.startDate}).then((note: INoteModel) => {
            if (note) {

                return note.save().then( noteUpdate => {
                    return Promise.resolve( noteUpdate.toObject() as INote);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }else {
                return Promise.reject('Note already exist');
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    }

    insert ( createNote: INote): Promise <INote> {
        // return NoteModel.findOne({
        //     title: createNote.title,
        //     location: createNote.location,
        //     startTime: createNote.startTime,
        //     startDate: createNote.startDate,
        //     endDate: createNote.endDate,
        //     endTime: createNote.endTime,
        //     repeat: createNote.repeat
        //  }).then(note =>{
        //      if ( note) {
        //          return Promise.reject('note already exist');
        //      }else{
                 const note = new NoteModel({
                    title: createNote.title,
                    location: createNote.location,
                    startTime: createNote.startTime,
                    startDate: createNote.startDate,
                    endDate: createNote.endDate,
                    endTime: createNote.endTime,
                    repeat: createNote.repeat
                 });
                 return note.save().then( newNote =>{
                     return Promise.resolve(newNote.toObject() as INote)
            //      })
            //  }
         }).catch(err => {
             return Promise.reject(err );
         });
    }


}
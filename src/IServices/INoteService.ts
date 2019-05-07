import { INote, INoteModel, RemoveObject, IError} from '../models';

export interface INoteService {
    getNotes (): Promise<INote[]|IError>;
    createNote (lesson: INote): Promise<INote>;
    findById (noteId: string): Promise <INote>;
}

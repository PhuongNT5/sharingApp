import { INote, IError, INoteModel, RemoveObject} from '../models';

export interface INoteRepository {
    findAll(): Promise <INote[] | IError>;
    
    findOne(note:INote): Promise <INote>;

    findById (noteId: string): Promise <INote>;

    insert(note: INote): Promise<INote>;

    update(note: INote, teamId: string): Promise <INote>;

    delete(note: string) : Promise<RemoveObject>;

}
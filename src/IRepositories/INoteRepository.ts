import { INote, IError, INoteModel, RemoveObject} from '../models';

export interface INoteRepository {
    findAll(): Promise <INote[] | IError>;
    
    findOne(lesson:INote): Promise <INote>;

    findById (lessonId: string): Promise <INote>;

    insert(lesson: INote): Promise<INote>;

    update(lesson: INote, teamId: string): Promise <INote>;

    delete(lesson: INote) : Promise<RemoveObject>;

}
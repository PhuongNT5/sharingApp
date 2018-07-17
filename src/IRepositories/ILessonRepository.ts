import { ILesson, IError, ILessonModel, RemoveObject} from '../models';

export interface ILessonRepository {
    findAll(): Promise <ILesson[] | IError>;
    
    findOne(lesson:ILesson): Promise <ILesson>;

    findById (lessonId: string): Promise <ILesson>;

    insert(lesson: ILesson): Promise<ILesson>;

    update(lesson: ILesson, teamId: string): Promise <ILesson>;

    delete(lesson: ILesson) : Promise<RemoveObject>;

}
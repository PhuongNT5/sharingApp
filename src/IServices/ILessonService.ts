import { ILesson, ILessonModel, IError, RemoveObject} from '../models';

export interface ILessonService {
    getLessons (): Promise<ILesson[]|IError>;
    createLesson (lesson: ILesson): Promise<ILesson>;
    findById (lessonId: string): Promise <ILesson>;
}
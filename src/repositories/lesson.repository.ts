import { ILessonRepository } from '../IRepositories';
import { ILesson, ILessonModel, LessonModel, IError, RemoveObject} from '../models';

export class LessonRepository implements ILessonRepository {
    findAll(): Promise<ILesson[] | IError> {
        return LessonModel.find().then((lessons: ILessonModel[]) => {
            return Promise.resolve(lessons.map((lesson) => lesson.toObject() as ILesson));
        }).catch(err => {
            return Promise.reject({
                statusCode: 400,
                message: 'sorry. error'
            });
        });
    }
    findOne( lesson: any): Promise <ILesson> {
        return LessonModel.findOne(lesson).then(lesson => {
            if (lesson) {
                return Promise.resolve(lesson.toObject() as ILesson);
            }else {
                return Promise.reject('Lesson does not exist');
            }
        }).catch( err => {
            return Promise.reject(err);
        });
    }

    insert ( newLesson: ILesson): Promise <ILesson> {
        return LessonModel.findOne({
            title: newLesson.title,
            name: newLesson.name,
            createBy: newLesson.createBy,
            content: newLesson.content,
            place: newLesson.createBy,
            date: newLesson.date
         }).then(lesson => {
             if (lesson) {
                 return Promise.reject('lesson already exist');
             }else {
                 const lesson = new LessonModel({
                    title: newLesson.title,
                    name: newLesson.name,
                    createBy: newLesson.createBy,
                    content: newLesson.content,
                    place: newLesson.content,
                    date: newLesson.date
                 });
                 return lesson.save().then( newLesson => {
                     return Promise.resolve(newLesson.toObject() as ILesson);
                 });
             }
         }).catch(err => {
             return Promise.reject(err );
         });
    }

    delete (lesson: ILesson): Promise <RemoveObject> {
        return LessonModel.findOne({ name: lesson.name}).then(lesson => {
            if (!lesson) {
                return Promise.reject('Lesson does not exist');
            }else {
                return LessonModel.remove({name: lesson.name}).then((result: any) => {
                    return Promise.resolve(result as RemoveObject);
                }).catch(err => {
                    return Promise.resolve(err);
                });
            }
        });
    }

    findById (lessonId: String): Promise <ILesson> {
        return LessonModel.findById ({ _id: lessonId}).then(lesson => {
            if (lesson) {
                return Promise.resolve( lesson.toObject() as ILesson);
            }else {
                return Promise.reject ('This lesson does not exist');
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    }

    update (newLesson: ILesson): Promise<ILesson> {
        return LessonModel.findOne({name: newLesson.name}).then((lesson: ILessonModel) => {
            if (lesson) {
                lesson.title = newLesson.title,
                lesson.name = newLesson.name,
                lesson.content = newLesson.content,
                lesson.createBy = newLesson.createBy,
                lesson.date = newLesson.date,
                lesson.place = newLesson.place;

                return lesson.save().then( lessonUpdate => {
                    return Promise.resolve( lessonUpdate.toObject() as ILesson)
                }).catch(err => {
                    return Promise.reject(err);
                });
            }else{
                return Promise.reject('Lesson already exist');
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    }
}
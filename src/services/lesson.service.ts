import { ILesson, IError, RemoveObject} from '../models';
import { DBContextSingleton} from '../repositories';
import { ILessonRepository} from '../IRepositories';
import { ILessonService} from '../IServices/ILessonService';


class LessonService implements ILessonService {
    private static instance: LessonService;
    private lessonRepository : ILessonRepository;
    private constructor() {
        this.lessonRepository = DBContextSingleton.getLesson();
    }
    public static getInstance() {
        if (!LessonService.instance) {
            LessonService.instance = new LessonService();
        }
        return LessonService.instance;
    }
    public getLessons(): Promise <ILesson[] | IError>{
        return this.lessonRepository.findAll()
            .then((response) => Promise.resolve(response))
            .catch((err) => Promise.reject(err));
    }
    public createLesson (lesson: ILesson): Promise<ILesson>{
         return this.lessonRepository.insert(lesson)
            .then(lesson => Promise.resolve(lesson))
            .catch(err => Promise.reject(err))
    }
    public findById( lessonId: string) : Promise<ILesson> {
        return this.lessonRepository.findById(lessonId)
        .then( lesson => Promise.resolve(lesson))
        .catch(err => Promise.reject(err))
    }

}
export const LessonServiceInstance = LessonService.getInstance();

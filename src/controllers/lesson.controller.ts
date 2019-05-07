import { ILesson } from '../models';
import { LessonRepository} from '../repositories';
import { LessonServiceInstance} from '../services/lesson.service';

const lessonService = LessonServiceInstance;

const getLessons = () => {
    return lessonService.getLessons().then(res => Promise.resolve(res)
            .catch(err => Promise.reject(err)));
};

const createLesson = (req) => {
    const newLesson: ILesson = req.body;
    return lessonService.createLesson(newLesson).then(res => Promise.resolve(res)
            .catch(err => Promise.reject(err)));
};

const findById = (req) => {
    const lessonId = req.params.id;
    return lessonService.findById(lessonId).then(res => Promise.resolve(res)
            .catch(err => Promise.reject(err)));
};

export const LessonController = {
    getLessons : getLessons,
    createLesson : createLesson,
    findById: findById
};

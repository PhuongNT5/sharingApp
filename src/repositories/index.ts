export * from '../repositories/user.repository';
export * from '../repositories/lesson.repository';
export * from '../repositories/note.repository';
import { IUserRepository, ILessonRepository, INoteRepository} from '../IRepositories'
import { UserRepository, LessonRepository, NoteRepository} from '../repositories';

class DBContext {
    private static instance: DBContext;
    private user: IUserRepository;
    private lesson : ILessonRepository;
    private note: INoteRepository
    constructor() {
        this.user = new UserRepository();
        this.lesson = new LessonRepository();
        this.note = new NoteRepository();
    }

    public static getInstance() {
        if (!DBContext.instance) {
            DBContext.instance = new DBContext();
        }
        return DBContext.instance;
    }
    public getUser() {
        return this.user;
    }
    public getLesson () {
        return this.lesson;
    }
    public getNote () {
        return this.note;
    }
}
export const DBContextSingleton = DBContext.getInstance();

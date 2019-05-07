export * from '../repositories/user.repository';
export * from '../repositories/lesson.repository';
export * from '../repositories/note.repository';
export * from '../repositories/resource.repository';
import { IUserRepository, ILessonRepository, INoteRepository, IResourceRepository} from '../IRepositories';
import { UserRepository, LessonRepository, NoteRepository, ResourceRepository} from '../repositories';

class DBContext {
    private static instance: DBContext;
    private user: IUserRepository;
    private lesson: ILessonRepository;
    private note: INoteRepository;
    private resource: IResourceRepository;
    constructor() {
        this.user = new UserRepository();
        this.lesson = new LessonRepository();
        this.note = new NoteRepository();
        this.resource = new ResourceRepository();
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
    public getResource() {
        return this.resource;
    }
}
export const DBContextSingleton = DBContext.getInstance();

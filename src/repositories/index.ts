export * from '../repositories/user.repository';
export * from '../repositories/lesson.repository';
import { IUserRepository, ILessonRepository} from '../IRepositories'
import { UserRepository, LessonRepository} from '../repositories';


class DBContext {
    private static instance: DBContext;
    private user: IUserRepository;
    private lesson : ILessonRepository;
    constructor() {
        this.user = new UserRepository();
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
}
export const DBContextSingleton = DBContext.getInstance();

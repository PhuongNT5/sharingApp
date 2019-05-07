import { IResource, IError, INoteModel, RemoveObject} from '../models';

export interface IResourceRepository {
    findAll(): Promise <IResource[] | IError>;
}

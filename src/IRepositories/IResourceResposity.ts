import { IResource, IError, IResourceModel, RemoveObject} from '../models'

export interface IResourceRepository {
    getResources (): Promise<IResource[]>;
    findById (): Promise<IResource>;
}
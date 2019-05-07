import {IResourceModel, IError, IResource} from '../models';
export interface IResourceService {
    getResources (): Promise <IResource[] | IError>;
    // createResource (resource: IResource): Promise<IResource>;
}

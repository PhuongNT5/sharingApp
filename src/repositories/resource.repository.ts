import { IResourceRepository } from '../IRepositories';
import { IResource, IResourceModel, ResourceModel, IError, RemoveObject} from '../models';

export class ResourceRepository implements IResourceRepository {
    findAll():  Promise<IResource[] | IError> {
        return ResourceModel.find().then((resoureces: IResource[]) => {
            return Promise.resolve(resoureces)
            .catch(err => {
                return Promise.reject(err);
            });
    });
    }
}


import { IResource } from '../models';
import { ResourceRepository } from '../repositories';
import { ResourceServiceInstance} from '../services/resource.service';

const resourceService = ResourceServiceInstance;

const getResources =  () => {
    return resourceService.getResources().then(res => Promise.resolve(res))
        .catch(err => Promise.reject(err));
};

export const resourceController = {
    getResources: getResources
};

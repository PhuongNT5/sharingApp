import { IResourceService} from '../IServices';
import { DBContextSingleton} from '../repositories';
import {IResourceRepository } from '../IRepositories';
import { IResource, IError} from 'models';

class ResourceService implements IResourceService {
    private static instance: ResourceService;
    private resourceRepository: IResourceRepository;
    private constructor() {
        this.resourceRepository = DBContextSingleton.getResource();
    }
    public static getInstance() {
        if (!ResourceService.instance) {
            ResourceService.instance = new ResourceService();
        }
        return ResourceService.instance;
    }
    public getResources(): Promise <IResource[] | IError> {
        return this.resourceRepository.findAll()
            .then((response) => Promise.resolve(response))
            .catch((err) => Promise.reject(err));
    }
 }
 export const ResourceServiceInstance = ResourceService.getInstance();

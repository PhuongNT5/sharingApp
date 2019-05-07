import * as express from 'express';
import { resourceController} from '../controllers';
import { Response, Request} from '@angular/http';
export const resourceRouter =  express.Router();

const getResource = (req, res, next) => {
    return resourceController.getResources().then(response => res.send(response))
        .catch(err =>  res.status(400).send(err));
};

resourceRouter.route('/').get(getResource);

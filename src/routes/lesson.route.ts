import * as express from 'express';
import { LessonController} from '../controllers';
import { Response, Request} from '@angular/http';
export const lessonRouter =  express.Router();

const getLessons = (req, res, next) => {
    LessonController.getLessons().then(response => res.send(response))
        .catch(err => res.status(400).send(err));
};

const createLesson = (req , res, next) => {
    LessonController.createLesson(req).then(response => res.send (response))
    .catch(err => res.status(400).send(err));
};

const findById = (req, res, next) => {
    LessonController.findById(req).then(response => res.send(response))
    .catch(err => res.status(400).send(err));
};
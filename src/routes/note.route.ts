import * as express from 'express';
import { NoteController} from '../controllers';
import { Response, Request} from '@angular/http';
export const noteRouter =  express.Router();

const getNotes = (req, res, next) => {
    NoteController.getNotes().then(response => res.send(response))
        .catch(err => res.status(400).send(err));
};

const createNote = (req , res, next) => {
    NoteController.createNote(req.body).then(response => res.send (response))
    .catch(err => res.status(400).send(err));
};

const findById = (req, res, next) => {
    NoteController.findById(req).then(response => res.send(response))
    .catch(err => res.status(400).send(err));
};
const deleteNote = (req, res, next) => {
    NoteController.deleteNote(req).then(response => res.send(response))
        .catch(err => res.status(400).send(err));
};

noteRouter.route('/').get(getNotes);
noteRouter.route('/').post(createNote);
noteRouter.route('/:id').get(findById);
noteRouter.route('/:id').delete(deleteNote);
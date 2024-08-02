import { Request, Response } from 'express';

import { CreateSpecificationService } from './CreateSpecificationService';

class CreateSpecificationController {
  private service: CreateSpecificationService;

  constructor(service: CreateSpecificationService) {
    this.service = service;
  }

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    this.service.execute({ name, description });
    return res
      .status(201)
      .json({ message: 'Created register', data: name, description });
  }
}

export default CreateSpecificationController;

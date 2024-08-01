import { Request, Response } from 'express';

import CreateCategoryService from './CreateCategoryService';

class CreateCategoryController {
  private service: CreateCategoryService;

  constructor(service: CreateCategoryService) {
    this.service = service;
  }

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.service.excute({ name, description });

    return res.status(201).json({
      message: 'Dados cadastrados com sucesso',
      data: name,
      description,
    });
  }
}

export default CreateCategoryController;

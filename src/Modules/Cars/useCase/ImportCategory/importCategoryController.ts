import { Request, Response } from 'express';

import importCategoryService from './importCategoryService';

class importCategoryController {
  private service: importCategoryService;

  constructor(service: importCategoryService) {
    this.service = service;
  }

  handle(req: Request, res: Response): Response {
    const { file } = req;
    this.service.execute(file);
    return res.send();
  }
}

export default importCategoryController;

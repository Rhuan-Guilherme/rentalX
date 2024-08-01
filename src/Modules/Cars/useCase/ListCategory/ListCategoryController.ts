import { Request, Response } from 'express';

import ListCategoryService from './ListCategoryService';

class ListCategoryController {
  private service: ListCategoryService;

  constructor(service: ListCategoryService) {
    this.service = service;
  }

  handle(req: Request, res: Response): Response {
    const list = this.service.execute();
    return res.status(200).json(list);
  }
}

export default ListCategoryController;

import { parse } from 'csv-parse';
import fs from 'fs';

import { ICategoryRepository } from '../../Repositories/ICategoryRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class importCategoryService {
  repository: ICategoryRepository;
  categoryArray: Array<IImportCategory>;

  constructor(repository: ICategoryRepository) {
    this.repository = repository;
    this.categoryArray = [];
  }

  loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', (line) => {
          const [name, description] = line;
          this.categoryArray.push({ name, description });
        })
        .on('end', () => {
          resolve(this.categoryArray);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);
    categories.forEach(({ name, description }) => {
      const findName = this.repository.findByName(name);
      if (!findName) {
        this.repository.create({ name, description });
      }
    });
  }
}

export default importCategoryService;

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import OrphanageView from '../views/OrphanagesView';
import * as Yup from 'yup';

import Orphanage from '../models/Orphanage';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage)

    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });

    return response.json(OrphanageView.renderMany(orphanages))
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = await orphanagesRepository.findOneOrFail(Number(id), {
      relations: ['images']
    });

    if (!orphanage) {
      return response.status(404).send();
    }

    return response.json(OrphanageView.render(orphanage));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image ) => {
      return {
        url: process.env.STORAGE_TYPE === "local"
        ? image.filename
        : image.key
        }
    })

    const data = {
      name,
      latitude: Number(latitude),
      longitude: Number(longitude),
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          url: Yup.string().required()
        })
      )
    })

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }
}

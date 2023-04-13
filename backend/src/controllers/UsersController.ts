import { Request, Response } from 'express';

import { prisma } from '../lib/prisma';

export class UsersController {
  public async list(request: Request, response: Response) {
    const users = await prisma.user.findMany();

    return response.status(200).json({
      users,
    });
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    const user = await prisma.user.findUnique({
      where: {id}
    });

    return response.status(200).json({
      user
    });
  }

  public async create(request: Request, response: Response) {
    const { id, name, email } = request.body;
    const users = await prisma.user.create({
      data: {
        id,
        name,
        email,
      },
    })

    return response.status(200).json({
      users,
    });
  }

  public async update(request: Request, response: Response) {
    const { name, email } = request.body;

    let data = {}
    if( name ) data = {...data , name};
    if( email ) data = {...data, email};

    const id = request.params.id;
    const user = await prisma.user.update({
      where: { id },
      data
    })

    return response.status(200).json({
      user
    });
  }

  public async delete(request: Request, response: Response) {
    const id = request.params.id;
    await prisma.user.delete({
      where: { id }
    })

    return response.status(204).json({
      message: 'Removed success'
    })
  }

}

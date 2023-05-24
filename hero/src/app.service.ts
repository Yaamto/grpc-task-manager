import { Injectable } from '@nestjs/common';
import { Hero } from './stubs/hero/v1alpha/hero';
import { PrismaService } from './prisma.service';
import { Prisma, Hero as PrismaHero } from '@prisma/client';

let Heros: Hero[] = [
  {
    id: 1,
    name: 'Bilal',
    power: 100,
    hp: 100,
  },
]
@Injectable()
export class AppService {

constructor(private prisma: PrismaService){}

async create(data: Prisma.HeroCreateInput): Promise<Hero> {
 const hero =  await this.prisma.hero.create({data})
  return hero
}

  getAll(): Promise<Hero[]> {
    return this.prisma.hero.findMany()
  }
  getOne(data: string | number): Promise<Hero>{
    if(typeof data === 'string'){
      return this.findByName(data)[0]
    }
    return this.findById(data)
  }

  findById(id: number): Promise<Hero> {
    return this.prisma.hero.findUnique({where: {id}})
  }

  findByName(name: string): Promise<Hero> {
    return this.prisma.hero.findUnique({where: {name}})
  }



  update(id: number, data: any): Promise<Hero> {
  return this.prisma.hero.update({where: {id}, data})
   
  }
  
  delete(id: number): Promise<Hero> {
   
    return this.prisma.hero.delete({where: {id}})
  }

}

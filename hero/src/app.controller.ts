import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { HERO_SERVICE_NAME,
  Hero,
  CreateHeroRequest,
  CreateHeroResponse, 
  GetAllHeroesResponse, 
  GetHeroRequest, 
  GetHeroResponse, 
  PutHeroRequest, 
  PutHeroResponse,
  AttackHeroRequest,
  AttackHeroResponse 

} from './stubs/hero/v1alpha/hero';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

interface DeleteHeroRequest {
  id: number
}
interface DeleteHeroResponse {
  message: string
}
let Heros: Hero[] = [
  {
    id: 1,
    name: 'Bilal',
    power: 100,
    hp: 100,
  },
  {
    id: 2,
    name: 'Basile',
    power: 50,
    hp: 300,
  },
  {
    id: 3,
    name: 'Fabien',
    power: 10,
    hp: 1000,
  }
]

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @GrpcMethod(HERO_SERVICE_NAME)
 GetHero(req: GetHeroRequest): GetHeroResponse {
  const id = req.id
  const result = Heros.find(hero => hero.id === id)
    return { hero: result};
  }
  @GrpcMethod(HERO_SERVICE_NAME)
  async GetAllHeros(): Promise<GetAllHeroesResponse> {
    const heroes = await this.appService.getAll()
    return  {heroes};
  }

  @GrpcMethod(HERO_SERVICE_NAME)
   async CreateHero(req: CreateHeroRequest): Promise<CreateHeroResponse> {
     const hero = await this.appService.create(req as any)
    return { hero: hero};
  }

  @GrpcMethod(HERO_SERVICE_NAME)
  async UpdateHero(req: PutHeroRequest): Promise<PutHeroResponse> {
   const id = req.id
   const hero = await this.appService.update(id, req)
   return {hero}
  }

  @GrpcMethod(HERO_SERVICE_NAME)
  DeleteHero(req: DeleteHeroRequest): DeleteHeroResponse {
    const id = req.id
    const index = Heros.findIndex(hero => hero.id === id)
    Heros.splice(index, 1)
    return { message: `Hero ${id} deleted`};
  }
// renvoyer le striker aussi 
// Gestion d'erreur grpc, si le striker à 0 hp alors on renvoie une erreur
  @GrpcMethod(HERO_SERVICE_NAME)
  async attackHero(req: AttackHeroRequest): Promise<AttackHeroResponse>  {
    const striker = await this.appService.getOne(req.strikerId)
    const defender = await this.appService.getOne(req.defenderId)

    if(striker.hp === 0){
      throw new RpcException({
        code: status.FAILED_PRECONDITION,
        details: 'Striker is dead and cannot attack',
      });
    }
    if(defender.hp === 0){
      throw new RpcException({
        code: status.FAILED_PRECONDITION,
        details: 'Defendere is dead and cannot be attacked',
      });
    }
    
    if(striker.power > defender.hp){
      defender.hp = 0
    }else{
      defender.hp -= striker.power
    }
    
    const updatedDefender = await this.appService.update(defender.id, defender)
    return { defender: updatedDefender, striker: striker}
  }
}

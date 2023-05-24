/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "hero.v1alpha";

export interface GetHeroRequest {
  id?: number;
}

export interface GetAllHeroesResponse {
  heroes?: Hero[];
}

export interface GetHeroResponse {
  hero?: Hero;
}

export interface CreateHeroRequest {
  name?: string;
  power?: number;
}

export interface Hero {
  id?: number;
  name?: string;
  power?: number;
  hp?: number;
}

export interface CreateHeroResponse {
  hero?: Hero;
}

export interface DelteHeroRequest {
  id?: number;
}

export interface DelteHeroResponse {
  message?: string;
}

export interface PutHeroRequest {
  id?: number;
  name?: string;
  power?: number;
  hp?: number;
}

export interface PutHeroResponse {
  hero?: Hero;
}

export interface AttackHeroRequest {
  strikerId?: number;
  defenderId?: number;
}

export interface AttackHeroResponse {
  defender?: Hero;
  striker?: Hero;
}

export const HERO_V1ALPHA_PACKAGE_NAME = "hero.v1alpha";

export interface HeroServiceClient {
  getHero(request: GetHeroRequest, metadata?: Metadata): Observable<GetHeroResponse>;

  createHero(request: CreateHeroRequest, metadata?: Metadata): Observable<CreateHeroResponse>;

  deleteHero(request: DelteHeroRequest, metadata?: Metadata): Observable<DelteHeroResponse>;

  putHero(request: PutHeroRequest, metadata?: Metadata): Observable<PutHeroResponse>;

  attackHero(request: AttackHeroRequest, metadata?: Metadata): Observable<AttackHeroResponse>;
}

export interface HeroServiceController {
  getHero(
    request: GetHeroRequest,
    metadata?: Metadata,
  ): Promise<GetHeroResponse> | Observable<GetHeroResponse> | GetHeroResponse;

  createHero(
    request: CreateHeroRequest,
    metadata?: Metadata,
  ): Promise<CreateHeroResponse> | Observable<CreateHeroResponse> | CreateHeroResponse;

  deleteHero(
    request: DelteHeroRequest,
    metadata?: Metadata,
  ): Promise<DelteHeroResponse> | Observable<DelteHeroResponse> | DelteHeroResponse;

  putHero(
    request: PutHeroRequest,
    metadata?: Metadata,
  ): Promise<PutHeroResponse> | Observable<PutHeroResponse> | PutHeroResponse;

  attackHero(
    request: AttackHeroRequest,
    metadata?: Metadata,
  ): Promise<AttackHeroResponse> | Observable<AttackHeroResponse> | AttackHeroResponse;
}

export function HeroServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getHero", "createHero", "deleteHero", "putHero", "attackHero"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("HeroService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("HeroService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const HERO_SERVICE_NAME = "HeroService";

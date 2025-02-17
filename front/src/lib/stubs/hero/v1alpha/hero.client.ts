// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "hero/v1alpha/hero.proto" (package "hero.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { HeroService } from "./hero";
import type { AttackHeroResponse } from "./hero";
import type { AttackHeroRequest } from "./hero";
import type { PutHeroResponse } from "./hero";
import type { PutHeroRequest } from "./hero";
import type { DelteHeroResponse } from "./hero";
import type { DelteHeroRequest } from "./hero";
import type { CreateHeroResponse } from "./hero";
import type { CreateHeroRequest } from "./hero";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetHeroResponse } from "./hero";
import type { GetHeroRequest } from "./hero";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service hero.v1alpha.HeroService
 */
export interface IHeroServiceClient {
    /**
     * @generated from protobuf rpc: GetHero(hero.v1alpha.GetHeroRequest) returns (hero.v1alpha.GetHeroResponse);
     */
    getHero(input: GetHeroRequest, options?: RpcOptions): UnaryCall<GetHeroRequest, GetHeroResponse>;
    /**
     * @generated from protobuf rpc: CreateHero(hero.v1alpha.CreateHeroRequest) returns (hero.v1alpha.CreateHeroResponse);
     */
    createHero(input: CreateHeroRequest, options?: RpcOptions): UnaryCall<CreateHeroRequest, CreateHeroResponse>;
    /**
     * @generated from protobuf rpc: DeleteHero(hero.v1alpha.DelteHeroRequest) returns (hero.v1alpha.DelteHeroResponse);
     */
    deleteHero(input: DelteHeroRequest, options?: RpcOptions): UnaryCall<DelteHeroRequest, DelteHeroResponse>;
    /**
     * @generated from protobuf rpc: PutHero(hero.v1alpha.PutHeroRequest) returns (hero.v1alpha.PutHeroResponse);
     */
    putHero(input: PutHeroRequest, options?: RpcOptions): UnaryCall<PutHeroRequest, PutHeroResponse>;
    /**
     * @generated from protobuf rpc: AttackHero(hero.v1alpha.AttackHeroRequest) returns (hero.v1alpha.AttackHeroResponse);
     */
    attackHero(input: AttackHeroRequest, options?: RpcOptions): UnaryCall<AttackHeroRequest, AttackHeroResponse>;
}
/**
 * @generated from protobuf service hero.v1alpha.HeroService
 */
export class HeroServiceClient implements IHeroServiceClient, ServiceInfo {
    typeName = HeroService.typeName;
    methods = HeroService.methods;
    options = HeroService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetHero(hero.v1alpha.GetHeroRequest) returns (hero.v1alpha.GetHeroResponse);
     */
    getHero(input: GetHeroRequest, options?: RpcOptions): UnaryCall<GetHeroRequest, GetHeroResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetHeroRequest, GetHeroResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateHero(hero.v1alpha.CreateHeroRequest) returns (hero.v1alpha.CreateHeroResponse);
     */
    createHero(input: CreateHeroRequest, options?: RpcOptions): UnaryCall<CreateHeroRequest, CreateHeroResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateHeroRequest, CreateHeroResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteHero(hero.v1alpha.DelteHeroRequest) returns (hero.v1alpha.DelteHeroResponse);
     */
    deleteHero(input: DelteHeroRequest, options?: RpcOptions): UnaryCall<DelteHeroRequest, DelteHeroResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<DelteHeroRequest, DelteHeroResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: PutHero(hero.v1alpha.PutHeroRequest) returns (hero.v1alpha.PutHeroResponse);
     */
    putHero(input: PutHeroRequest, options?: RpcOptions): UnaryCall<PutHeroRequest, PutHeroResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<PutHeroRequest, PutHeroResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AttackHero(hero.v1alpha.AttackHeroRequest) returns (hero.v1alpha.AttackHeroResponse);
     */
    attackHero(input: AttackHeroRequest, options?: RpcOptions): UnaryCall<AttackHeroRequest, AttackHeroResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<AttackHeroRequest, AttackHeroResponse>("unary", this._transport, method, opt, input);
    }
}

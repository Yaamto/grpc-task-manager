// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "user/v1alpha/service.proto" (package "user.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { UserService } from "./service";
import type { DeleteResponse } from "./message";
import type { DeleteRequest } from "./message";
import type { UpdatePasswordResponse } from "./message";
import type { UpdatePasswordRequest } from "./message";
import type { UpdateResponse } from "./message";
import type { UpdateRequest } from "./message";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { RegisterResponse } from "./message";
import type { RegisterRequest } from "./message";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service user.v1alpha.UserService
 */
export interface IUserServiceClient {
    /**
     * @generated from protobuf rpc: Register(user.v1alpha.RegisterRequest) returns (user.v1alpha.RegisterResponse);
     */
    register(input: RegisterRequest, options?: RpcOptions): UnaryCall<RegisterRequest, RegisterResponse>;
    /**
     * @generated from protobuf rpc: Update(user.v1alpha.UpdateRequest) returns (user.v1alpha.UpdateResponse);
     */
    update(input: UpdateRequest, options?: RpcOptions): UnaryCall<UpdateRequest, UpdateResponse>;
    /**
     * @generated from protobuf rpc: UpdatePassword(user.v1alpha.UpdatePasswordRequest) returns (user.v1alpha.UpdatePasswordResponse);
     */
    updatePassword(input: UpdatePasswordRequest, options?: RpcOptions): UnaryCall<UpdatePasswordRequest, UpdatePasswordResponse>;
    /**
     * @generated from protobuf rpc: Delete(user.v1alpha.DeleteRequest) returns (user.v1alpha.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse>;
}
/**
 * @generated from protobuf service user.v1alpha.UserService
 */
export class UserServiceClient implements IUserServiceClient, ServiceInfo {
    typeName = UserService.typeName;
    methods = UserService.methods;
    options = UserService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Register(user.v1alpha.RegisterRequest) returns (user.v1alpha.RegisterResponse);
     */
    register(input: RegisterRequest, options?: RpcOptions): UnaryCall<RegisterRequest, RegisterResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<RegisterRequest, RegisterResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(user.v1alpha.UpdateRequest) returns (user.v1alpha.UpdateResponse);
     */
    update(input: UpdateRequest, options?: RpcOptions): UnaryCall<UpdateRequest, UpdateResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateRequest, UpdateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePassword(user.v1alpha.UpdatePasswordRequest) returns (user.v1alpha.UpdatePasswordResponse);
     */
    updatePassword(input: UpdatePasswordRequest, options?: RpcOptions): UnaryCall<UpdatePasswordRequest, UpdatePasswordResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdatePasswordRequest, UpdatePasswordResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(user.v1alpha.DeleteRequest) returns (user.v1alpha.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteRequest, DeleteResponse>("unary", this._transport, method, opt, input);
    }
}

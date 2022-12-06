/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OrderItemService } from "../orderItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderItemCreateInput } from "./OrderItemCreateInput";
import { OrderItemWhereInput } from "./OrderItemWhereInput";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";
import { OrderItemFindManyArgs } from "./OrderItemFindManyArgs";
import { OrderItemUpdateInput } from "./OrderItemUpdateInput";
import { OrderItem } from "./OrderItem";
import { OrderItemLedgerFindManyArgs } from "../../orderItemLedger/base/OrderItemLedgerFindManyArgs";
import { OrderItemLedger } from "../../orderItemLedger/base/OrderItemLedger";
import { OrderItemLedgerWhereUniqueInput } from "../../orderItemLedger/base/OrderItemLedgerWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderItemControllerBase {
  constructor(
    protected readonly service: OrderItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrderItem })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: OrderItemCreateInput): Promise<OrderItem> {
    return await this.service.create({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        orderId: true,
        price: true,
        productId: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [OrderItem] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(OrderItemFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<OrderItem[]> {
    const args = plainToClass(OrderItemFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        orderId: true,
        price: true,
        productId: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItem | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        orderId: true,
        price: true,
        productId: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() data: OrderItemUpdateInput
  ): Promise<OrderItem | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          orderId: true,
          price: true,
          productId: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          orderId: true,
          price: true,
          productId: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OrderItemLedger",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/orderItemLedgers")
  @ApiNestedQuery(OrderItemLedgerFindManyArgs)
  async findManyOrderItemLedgers(
    @common.Req() request: Request,
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItemLedger[]> {
    const query = plainToClass(OrderItemLedgerFindManyArgs, request.query);
    const results = await this.service.findOrderItemLedgers(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        orderId: true,

        orderItem: {
          select: {
            id: true,
          },
        },

        price: true,
        productId: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/orderItemLedgers")
  async connectOrderItemLedgers(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemLedgerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemLedgers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/orderItemLedgers")
  async updateOrderItemLedgers(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemLedgerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemLedgers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/orderItemLedgers")
  async disconnectOrderItemLedgers(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() body: OrderItemLedgerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItemLedgers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderItemLedgerService } from "./orderItemLedger.service";
import { OrderItemLedgerControllerBase } from "./base/orderItemLedger.controller.base";

@swagger.ApiTags("orderItemLedgers")
@common.Controller("orderItemLedgers")
export class OrderItemLedgerController extends OrderItemLedgerControllerBase {
  constructor(
    protected readonly service: OrderItemLedgerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

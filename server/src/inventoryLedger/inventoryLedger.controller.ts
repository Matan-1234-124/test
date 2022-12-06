import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InventoryLedgerService } from "./inventoryLedger.service";
import { InventoryLedgerControllerBase } from "./base/inventoryLedger.controller.base";

@swagger.ApiTags("inventoryLedgers")
@common.Controller("inventoryLedgers")
export class InventoryLedgerController extends InventoryLedgerControllerBase {
  constructor(
    protected readonly service: InventoryLedgerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

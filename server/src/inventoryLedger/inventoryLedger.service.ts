import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InventoryLedgerServiceBase } from "./base/inventoryLedger.service.base";

@Injectable()
export class InventoryLedgerService extends InventoryLedgerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

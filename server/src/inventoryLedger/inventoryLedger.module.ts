import { Module } from "@nestjs/common";
import { InventoryLedgerModuleBase } from "./base/inventoryLedger.module.base";
import { InventoryLedgerService } from "./inventoryLedger.service";
import { InventoryLedgerController } from "./inventoryLedger.controller";

@Module({
  imports: [InventoryLedgerModuleBase],
  controllers: [InventoryLedgerController],
  providers: [InventoryLedgerService],
  exports: [InventoryLedgerService],
})
export class InventoryLedgerModule {}

import { Module } from "@nestjs/common";
import { InventoryModuleBase } from "./base/inventory.module.base";
import { InventoryService } from "./inventory.service";
import { InventoryController } from "./inventory.controller";

@Module({
  imports: [InventoryModuleBase],
  controllers: [InventoryController],
  providers: [InventoryService],
  exports: [InventoryService],
})
export class InventoryModule {}

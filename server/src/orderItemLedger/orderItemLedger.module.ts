import { Module } from "@nestjs/common";
import { OrderItemLedgerModuleBase } from "./base/orderItemLedger.module.base";
import { OrderItemLedgerService } from "./orderItemLedger.service";
import { OrderItemLedgerController } from "./orderItemLedger.controller";

@Module({
  imports: [OrderItemLedgerModuleBase],
  controllers: [OrderItemLedgerController],
  providers: [OrderItemLedgerService],
  exports: [OrderItemLedgerService],
})
export class OrderItemLedgerModule {}

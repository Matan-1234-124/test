import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OrderItemLedgerServiceBase } from "./base/orderItemLedger.service.base";

@Injectable()
export class OrderItemLedgerService extends OrderItemLedgerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

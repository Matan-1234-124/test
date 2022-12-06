/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, InventoryLedger, Inventory } from "@prisma/client";

export class InventoryLedgerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InventoryLedgerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryLedgerFindManyArgs>
  ): Promise<number> {
    return this.prisma.inventoryLedger.count(args);
  }

  async findMany<T extends Prisma.InventoryLedgerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryLedgerFindManyArgs>
  ): Promise<InventoryLedger[]> {
    return this.prisma.inventoryLedger.findMany(args);
  }
  async findOne<T extends Prisma.InventoryLedgerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryLedgerFindUniqueArgs>
  ): Promise<InventoryLedger | null> {
    return this.prisma.inventoryLedger.findUnique(args);
  }
  async create<T extends Prisma.InventoryLedgerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryLedgerCreateArgs>
  ): Promise<InventoryLedger> {
    return this.prisma.inventoryLedger.create<T>(args);
  }
  async update<T extends Prisma.InventoryLedgerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryLedgerUpdateArgs>
  ): Promise<InventoryLedger> {
    return this.prisma.inventoryLedger.update<T>(args);
  }
  async delete<T extends Prisma.InventoryLedgerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryLedgerDeleteArgs>
  ): Promise<InventoryLedger> {
    return this.prisma.inventoryLedger.delete(args);
  }

  async getInventory(parentId: string): Promise<Inventory | null> {
    return this.prisma.inventoryLedger
      .findUnique({
        where: { id: parentId },
      })
      .inventory();
  }
}

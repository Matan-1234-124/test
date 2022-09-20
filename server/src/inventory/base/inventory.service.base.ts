/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Inventory, InventoryLedger } from "@prisma/client";

export class InventoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InventoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryFindManyArgs>
  ): Promise<number> {
    return this.prisma.inventory.count(args);
  }

  async findMany<T extends Prisma.InventoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryFindManyArgs>
  ): Promise<Inventory[]> {
    return this.prisma.inventory.findMany(args);
  }
  async findOne<T extends Prisma.InventoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryFindUniqueArgs>
  ): Promise<Inventory | null> {
    return this.prisma.inventory.findUnique(args);
  }
  async create<T extends Prisma.InventoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryCreateArgs>
  ): Promise<Inventory> {
    return this.prisma.inventory.create<T>(args);
  }
  async update<T extends Prisma.InventoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryUpdateArgs>
  ): Promise<Inventory> {
    return this.prisma.inventory.update<T>(args);
  }
  async delete<T extends Prisma.InventoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryDeleteArgs>
  ): Promise<Inventory> {
    return this.prisma.inventory.delete(args);
  }

  async findInventoryLedgers(
    parentId: string,
    args: Prisma.InventoryLedgerFindManyArgs
  ): Promise<InventoryLedger[]> {
    return this.prisma.inventory
      .findUnique({
        where: { id: parentId },
      })
      .inventoryLedgers(args);
  }
}

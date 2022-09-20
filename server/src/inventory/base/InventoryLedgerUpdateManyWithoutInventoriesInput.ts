/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InventoryLedgerWhereUniqueInput } from "../../inventoryLedger/base/InventoryLedgerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class InventoryLedgerUpdateManyWithoutInventoriesInput {
  @Field(() => [InventoryLedgerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryLedgerWhereUniqueInput],
  })
  connect?: Array<InventoryLedgerWhereUniqueInput>;

  @Field(() => [InventoryLedgerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryLedgerWhereUniqueInput],
  })
  disconnect?: Array<InventoryLedgerWhereUniqueInput>;

  @Field(() => [InventoryLedgerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InventoryLedgerWhereUniqueInput],
  })
  set?: Array<InventoryLedgerWhereUniqueInput>;
}
export { InventoryLedgerUpdateManyWithoutInventoriesInput };

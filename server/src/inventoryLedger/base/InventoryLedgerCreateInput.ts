/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, ValidateNested, IsString } from "class-validator";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class InventoryLedgerCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  amount!: number;

  @ApiProperty({
    required: true,
    type: () => InventoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InventoryWhereUniqueInput)
  @Field(() => InventoryWhereUniqueInput)
  inventory!: InventoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  productId!: string;
}
export { InventoryLedgerCreateInput };

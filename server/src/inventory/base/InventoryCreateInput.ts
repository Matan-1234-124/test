/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { InventoryLedgerCreateNestedManyWithoutInventoriesInput } from "./InventoryLedgerCreateNestedManyWithoutInventoriesInput";
import { Type } from "class-transformer";
@InputType()
class InventoryCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => InventoryLedgerCreateNestedManyWithoutInventoriesInput,
  })
  @ValidateNested()
  @Type(() => InventoryLedgerCreateNestedManyWithoutInventoriesInput)
  @IsOptional()
  @Field(() => InventoryLedgerCreateNestedManyWithoutInventoriesInput, {
    nullable: true,
  })
  inventoryLedgers?: InventoryLedgerCreateNestedManyWithoutInventoriesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  productId!: string;
}
export { InventoryCreateInput };

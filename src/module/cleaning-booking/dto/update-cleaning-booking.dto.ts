import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinDate,
} from "class-validator";

export class UpdateCleaningBookingDto {
  @ApiProperty({
    required: false,
    description: "Date of the cleaning",
  })
  @IsOptional()
  @IsDate({ message: "Cleaning date must be a valid date" })
  @MinDate(new Date(), { message: "Cleaning date must be in the future" })
  cleaningDate?: Date;

  @ApiProperty({
    required: false,
    description: "Mark the booking as served",
  })
  @IsOptional()
  @IsBoolean({ message: "Must be a boolean" })
  markAsServed?: boolean;

  @ApiProperty({
    required: false,
    description: "Additional charges for the cleaning",
  })
  @IsOptional()
  @IsNumber({}, { message: "Additional charges must be a number" })
  @Min(0, { message: "Additional charges cannot be negative" })
  additionalCharges?: number;

  @ApiProperty({
    required: false,
    description: "Remarks or notes for the cleaning booking",
  })
  @IsOptional()
  @IsString({ message: "Remarks must be a string" })
  remarks?: string;
}

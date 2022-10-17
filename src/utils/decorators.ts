import { applyDecorators } from '@nestjs/common';
import { IsNotEmpty, IsString, Max, Min } from 'class-validator';
import assert from 'node:assert/strict';

export function IsNotEmptyString() {
  return applyDecorators(IsString(), IsNotEmpty());
}

export function IsBetween(min: number, max: number) {
  assert.equal(min < max, true, "'min' value not less than 'max'");
  return applyDecorators(Min(min), Max(max));
}

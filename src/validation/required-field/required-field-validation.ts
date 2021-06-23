import { FieldValidation } from "@/validation/protocols/field-validation";
import { RequiredFieldError } from "@/validation/errors";

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(fieldName: string): Error {
    return new RequiredFieldError();
  }
}

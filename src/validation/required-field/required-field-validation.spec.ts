import { RequiredFieldError } from "@/validation/errors";
import { RequiredFieldValidation } from "./required-field-validation";

describe("RequiredFieldValidation ", () => {
  test("Should return error if field is empty", () => {
    const sut = new RequiredFieldValidation("email");
    const error = sut.validate("email");
    expect(error).toEqual(new RequiredFieldError());
  });
});
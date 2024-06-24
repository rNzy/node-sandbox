import { findPhoneNumbersInText, parsePhoneNumber } from "libphonenumber-js";

function main() {
  const stringContainingPhoneNumber =
    "Yes you can reach me on my cellphone at +336 12 34 56 78";
  const basePhoneNumber = "+33612345678";
  const foundPhoneNumber = findPhoneNumbersInText(stringContainingPhoneNumber);

  const parsed = parsePhoneNumber(basePhoneNumber);
  const formatted = parsed.formatInternational();

  console.log({ foundPhoneNumber });
  console.log({ formatted });
}

main();

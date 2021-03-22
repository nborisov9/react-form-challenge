import { parsePhoneNumberFromString } from 'libphonenumber-js';

const normalizePhoneNumber = (value: string): string => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

export { normalizePhoneNumber };

import { RuleCallBack } from "../contracts";
import { CountryPhoneValidator } from "./phone/country-phone-validator";
/**
 * This callback validates the format of the phone number.
 * Note that this may contain errors given the diversity of existing telephone numbers.
 *
 * @param input
 * @param params
 * @example
 * ```html
 *  <input data-tr-rules="phone:US,FR,BJ" />
 * <!--valide phone globally--/>
 *   <input data-tr-rules="phone" />
 * ```
 */
export const phone: RuleCallBack = (input, params) => {
  return new CountryPhoneValidator(input, params).validPhoneNumber();
};

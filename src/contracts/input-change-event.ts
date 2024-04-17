import { Rule } from "./rule";

/**
 * tr.input.validated event details
 */
export type InputEventDetails = {
  rules: Rule[];
  element: HTMLInputElement | HTMLTextAreaElement;
  input: Record<string, string>;
};

/**
 * Input change event
 */
export interface InputChangeEvent {
  details: InputEventDetails;
}

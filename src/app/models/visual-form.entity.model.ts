import { FormOption } from "./form-value.model";
export interface VisualFormEntity {
  fieldOptions: Array<FormOption>;
  fieldFuncMap: Map<string, Array<FormOption>>;
}

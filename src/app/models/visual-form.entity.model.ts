import { FormOption } from "./form-value.model";
export interface VisualFormEntity {
  fieldOptions: Array<FormOption>;
  xFieldFuncMap: Map<string, Array<FormOption>>;
  yFieldFuncMap: Map<string, Array<FormOption>>;
}

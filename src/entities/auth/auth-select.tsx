import { forwardRef, HTMLProps } from "react";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Label } from "shared/ui";
type SelectProps = HTMLProps<HTMLSelectElement>;
type AuthSelectProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  label?: string;
  options: readonly TFieldValues[TName][];
  field: ControllerRenderProps<TFieldValues, TName>;
};

//<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
//: UISelectProps<TFieldValues, TName>
export const AuthSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  label,
  options,
  field,
}: AuthSelectProps<TFieldValues, TName>) => {
  return (
    <div>
      <Label>{label}</Label>
      <Select {...field} onValueChange={field.onChange} value={field.value}>
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

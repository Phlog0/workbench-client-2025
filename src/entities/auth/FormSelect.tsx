import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Field,
  FieldLabel,
} from "@/shared/ui";
import { SelectHTMLAttributes } from "react";
type AuthSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: string[];
};

//<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
//: UISelectProps<TFieldValues, TName>
export const FormSelect = ({ label, options }: AuthSelectProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name="projectType"
      control={control}
      rules={{ required: true }} // Add validation rules
      render={({ field }) => (
        <Field>
          <FieldLabel>{label}</FieldLabel>
          <Select
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
          >
            <SelectTrigger>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {options?.map(option => (
                <SelectItem
                  key={option}
                  value={option}
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      )}
    />
  );
};

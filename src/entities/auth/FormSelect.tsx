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
  name: string;
};
const hash = {
  projectType: {
    КТП: "КТП",
    ТП: "ТП",
    РП: "РП",
  },

  markerColor: {
    green: "Зеленый",
    blue: "Синий",
    red: "Красный",
  },
} as const;
const localeItems = <T extends keyof typeof hash>(name: T, key: keyof (typeof hash)[T]) => {
  return hash[name][key] || key;
};

export const FormSelect = ({ label, options, name }: AuthSelectProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Field>
          <FieldLabel>{label}</FieldLabel>
          <Select
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={localeItems(
                  name as keyof typeof hash,
                  options[0] as keyof (typeof hash)[keyof typeof hash]
                )}
              />
            </SelectTrigger>
            <SelectContent>
              {options?.map(option => (
                <SelectItem
                  key={option}
                  value={option}
                >
                  {localeItems(
                    name as keyof typeof hash,
                    option as keyof (typeof hash)[keyof typeof hash]
                  )}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      )}
    />
  );
};

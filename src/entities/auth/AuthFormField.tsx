import { FormControl, FormField, FormItem, FormLabel } from "@/shared/ui";
import { HTMLInputTypeAttribute } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { AuthInput } from "./AuthInput";
export type SignUpInputs = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
};
export type SignInInputs = {
  email: string;
  password: string;
};

interface GenericAuthFormfieldProps<T extends FieldValues> extends UseControllerProps<T> {
  formLabel: string;
  disabled?: boolean;
  inputType?: HTMLInputTypeAttribute;
  className?: string;
}

export function AuthFormField<T extends FieldValues>({
  control,
  name,
  formLabel,
  inputType = "text",
  className,
}: GenericAuthFormfieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="block h-4">{formLabel}</FormLabel>
          <FormControl>
            <AuthInput {...field} type={inputType} />
          </FormControl>
          {/* <FormDescription /> */}
          {/* <FormMessage className="min-h-5"> </FormMessage> */}
        </FormItem>
      )}
    />
  );
}

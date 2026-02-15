import { Field, FieldError, FieldLabel, Textarea } from "shared/ui";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { RequiredSymbol } from "./RequiredSymbol";
import { ClearButton } from "./ClearButton";
import { cn } from "@/shared/lib";
type AuthTextareaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
};
export const FormTextarea = ({ name, label, required, className, ...props }: AuthTextareaProps) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const value = watch(name);
  const errorText = errors[name]?.message;
  const onClickClear = () => {
    setValue(name, "", {
      shouldValidate: true,
    });
  };
  return (
    <Field className={cn("flex flex-col gap-0 justify-center", className)}>
      {label && (
        <FieldLabel htmlFor={name} className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </FieldLabel>
      )}

      <div className="relative">
        <Textarea
          {...register(name)}
          {...props}
          className={errorText && "outline-red-400 outline-1"}
          id={name}
        />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText ? (
        <FieldError errors={[{ message: String(errorText) }]} />
      ) : (
        // <ErrorText text={} className="mt-1" />
        <div className="h-5" />
      )}
    </Field>
  );
};

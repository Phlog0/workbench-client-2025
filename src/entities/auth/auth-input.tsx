import { Input, Label } from "shared/ui";
import { forwardRef } from "react";
import { InputProps } from "../../shared/ui/input";

export const AuthInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <Input {...props} ref={ref} />;
  },
);
AuthInput.displayName = "AuthInput";

import { Input, InputProps } from "shared/ui";
import { forwardRef } from "react";

export const AuthInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <Input {...props} ref={ref} className={className} autoComplete="on" />;
  },
);
AuthInput.displayName = "AuthInput";

import React, { useState } from "react";
import { Input, Label } from "shared/ui";
type TMyInput = {
  label: string;
  inputId: string;
  data: string;
  keyOne?: string;
  keyTwo?: string;
  inputType?: string;
};
export const MyInput = ({
  data,
  inputId,
  label,
  inputType = "text",
  keyOne,
  keyTwo,
}: TMyInput) => {
  const [text, setText] = useState("glad");
  return (
    <form>
      <Label htmlFor={inputId}>{label} </Label>
      <Input
        id={inputId}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type={inputType}
      />
      ;
    </form>
  );
};

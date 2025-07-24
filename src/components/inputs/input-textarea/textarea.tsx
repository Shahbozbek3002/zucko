/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TextareaProps } from "@mantine/core";
import { Controller, type Control } from "react-hook-form";
import { MantineTextArea } from "./style";

interface FormData {
  [key: string]: string;
}

interface IControl {
  control: Control<FormData | any>;
}

interface CustomTextAreaProps extends TextareaProps, IControl {
  name: string;
}

export const CustomTextArea = ({
  control,
  name,
  ...props
}: CustomTextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <MantineTextArea
          {...props}
          {...field}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          value={field.value ?? ""}
          error={errors[name] ? (errors[name]?.message as string) : props.error}
          styles={{
            input: errors[name] && {
              border: "1px solid #fa5252",
            },
            ...props.styles,
          }}
        />
      )}
    />
  );
};

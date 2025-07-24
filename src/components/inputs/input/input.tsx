import { Controller } from "react-hook-form";
import { MantineInput } from "./style";
import type { CustomInputProps } from "@/types/input";

export const Input = ({ control, error, ...props }: CustomInputProps) => (
  <Controller
    name={props.name}
    control={control}
    render={({ field, formState: { errors } }) => (
      <MantineInput
        {...props}
        {...field}
        onChange={(e) => {
          field.onChange(e);
        }}
        value={field.value ?? ""}
        error={
          error ||
          (errors[props.name] ? (errors[props.name]?.message as string) : "")
        }
        styles={{
          input: errors[props.name] && {
            border: "1px solid var(--red-500) !important",
          },
        }}
      />
    )}
  />
);

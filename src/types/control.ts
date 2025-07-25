/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Control } from "react-hook-form";

export type IControl = {
  name: string;
  control: Control<any>;
  ismulti?: boolean;
  disabled?: boolean;
};

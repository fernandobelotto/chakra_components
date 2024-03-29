import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  PinInput,
  Stack,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
} from "react-hook-form";

type Props<T extends Partial<FieldValues>> = PropsWithChildren<{
  control: Control<T>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  errors: any;
  direction?: "column" | "row";
}>;

export const AppPinInput = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  children,
  direction = "row",
}: Props<T>) => {
  return (
    <FormControl isInvalid={!!errors?.[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Stack direction={direction}>
              <PinInput {...field}> {children}</PinInput>
            </Stack>
          );
        }}
      />
      {!!errors?.[name] ? (
        <FormErrorMessage>{errors?.[name].message}</FormErrorMessage>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

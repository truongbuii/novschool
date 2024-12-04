import React, { useMemo } from 'react';
import { Form, Input as AntdInput, Typography } from 'antd';
import { Controller } from 'react-hook-form';
import type { Control, FieldError, Path, FieldValues } from 'react-hook-form';
import type { InputProps as AntdInputProps } from 'antd';

export interface InputFieldProps<Type extends FieldValues>
  extends Omit<AntdInputProps, 'label'> {
  control: Control<Type>;
  name: Path<Type>;
  layoutType?: 'vertical' | 'horizontal';
  errorField?: FieldError;
  label?: string | React.ReactNode;
}

const InputField = <T extends FieldValues>(props: InputFieldProps<T>) => {
  const { control, name, label, errorField, ...rest } = props;

  const isErrorField = useMemo(
    () => errorField?.message && errorField?.message?.length > 0,
    [errorField]
  );

  return (
    <Form.Item
      validateStatus={isErrorField ? 'error' : ''}
      help={
        isErrorField ? (
          <span className="text-xs italic text-red-500">
            {errorField?.message}
          </span>
        ) : null
      }
    >
      <Typography className="mb-[6px] text-sm text-gray-500">
        {label}
      </Typography>
      <Controller
        control={control}
        name={name}
        defaultValue={'' as any}
        render={({ field }) => (
          <AntdInput
            {...rest}
            {...field}
            className="p-2 rounded-md ring-1 ring-gray-300"
          />
        )}
      />
    </Form.Item>
  );
};

export default InputField;

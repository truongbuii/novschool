import { Input } from 'antd';
import type { InputRef } from 'antd';
import React, { FC } from 'react';

export interface IInputProps {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  id?: string;
  value?: string;
  className?: string;
}

const CustomInput: FC<IInputProps> = React.forwardRef<InputRef, IInputProps>(
  ({ wrapperProps, ...props }, ref) => {
    return (
      <div {...wrapperProps}>
        <Input ref={ref} {...props} />
      </div>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;

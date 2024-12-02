import { Button as AntdButton, ButtonProps } from 'antd';
import { FC } from 'react';

export enum TypeButton {
  'primary' = 'primary',
  'default' = 'default'
}

export enum SizeButton {
  'large' = 'large',
  'middle' = 'middle',
  'small' = 'small'
}

const backgroundByType = {
  [TypeButton.primary]: '#A6A4F1',
  [TypeButton.default]: '#F6F6F6'
};

const heightBySize = {
  [SizeButton.large]: '60px',
  [SizeButton.middle]: '48px',
  [SizeButton.small]: '32px'
};

const widthBySize = {
  [SizeButton.large]: '248px',
  [SizeButton.middle]: '160px',
  [SizeButton.small]: '124px'
};

const fontSizeBySize = {
  [SizeButton.large]: '18px',
  [SizeButton.middle]: '15px',
  [SizeButton.small]: '14px'
};

interface IButton extends Omit<ButtonProps, 'type'> {
  wrapperProps?: React.CSSProperties;
  htmlType: 'button' | 'submit' | 'reset';
  type: keyof typeof TypeButton;
  size: keyof typeof SizeButton;
  loading?: boolean;
}

const CustomButton: FC<IButton> = ({
  htmlType,
  type,
  size,
  wrapperProps,
  loading,
  children,
  ...props
}) => {
  return (
    <div style={wrapperProps}>
      <AntdButton
        type={type}
        size={size}
        htmlType={htmlType}
        loading={loading}
        style={{
          height: heightBySize[size],
          width: widthBySize[size],
          fontSize: fontSizeBySize[size],
          background: backgroundByType[type],
          fontWeight: 600,
          borderRadius: '29px',
          ...props.style
        }}
        {...props}
      >
        {children}
      </AntdButton>
    </div>
  );
};

export default CustomButton;

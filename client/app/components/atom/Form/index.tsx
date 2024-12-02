import { FC, FormHTMLAttributes } from 'react';

const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  ...props
}) => {
  return <form {...props}>{children}</form>;
};

export default Form;

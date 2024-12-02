'use client';

import { useForm } from 'react-hook-form';
import { SignInSchema, TSignInSchema } from './validSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from '@/components/atom/Form';
import InputField from '@/components/atom/Form/InputField';
import CustomButton from '@/components/atom/Button';

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TSignInSchema>({
    resolver: zodResolver(SignInSchema),
    mode: 'all'
  });

  const onSubmit = (data: TSignInSchema) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div>
        <InputField
          name="email"
          className="w-full"
          placeholder="Your email"
          control={control}
          label="E-mail"
          errorField={errors['email']}
        />
      </div>
      <div>
        <InputField
          name="password"
          className="w-full"
          placeholder="Your password"
          type="password"
          control={control}
          label="Password"
          errorField={errors['password']}
        />
      </div>
      <CustomButton
        loading={false}
        htmlType="submit"
        type="primary"
        size="middle"
        disabled={false}
        wrapperProps={{
          margin: '0px auto',
          marginTop: '0.5rem'
        }}
      >
        {' '}
        Login{' '}
      </CustomButton>
    </Form>
  );
};

export default LoginForm;

import { LoginForm } from '@/components/feature/Login';
import { IMAGE } from '@/constant';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-skyLight">
      <div className="min-w-[350px] bg-white p-12 rounded-md shadow-2xl flex flex-col gap-4">
        <h1 className="text-xl font-bold flex items-center justify-center gap-2 text-purple">
          <Image src={IMAGE.LOGO} alt="logo" width={24} height={24} />
          NovSchool
        </h1>
        <h2 className="text-gray-400 text-center">Sign in to your account</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

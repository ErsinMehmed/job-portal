"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className='flex items-center justify-center min-h-screen w-full bg-gray-50'>
      <div className='flex flex-col px-6 py-8 mx-auto lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow md:mt-0 xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-800'>
              Влезте в акаунта си
            </h1>

            <Input
              size={"sm"}
              type='email'
              label='Имейл'
            />

            <Input
              size={"sm"}
              label='Парола'
              endContent={
                <button
                  className='focus:outline-none'
                  type='button'
                  onClick={toggleVisibility}>
                  {isVisible ? (
                    <AiOutlineEye className='text-2xl text-default-400 pointer-events-none' />
                  ) : (
                    <AiOutlineEyeInvisible className='text-2xl text-default-400 pointer-events-none' />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />

            <div className='flex items-center justify-between space-x-32'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <Checkbox size='sm'>Запомни ме</Checkbox>
                </div>
              </div>

              <Link
                href='#'
                className='hover:underline text-blue-600'>
                Забравена парола?
              </Link>
            </div>

            <Button
              className='w-full'
              color='primary'>
              Вход
            </Button>

            <p className='text-sm font-light text-gray-500'>
              Нямате профил все още?{" "}
              <Link
                className='ml-1 hover:underline text-blue-500'
                href='/register'>
                Регистрация
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

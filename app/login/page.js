"use client";

import React from "react";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";

export default function Login() {
  return (
    <section class='flex items-center justify-center min-h-full h-screen w-full bg-gray-50'>
      <div class='flex flex-col px-6 py-8 mx-auto lg:py-0'>
        <div class='w-full bg-white rounded-lg shadow md:mt-0 xl:p-0'>
          <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-xl'>
              Влезте в акаунта си
            </h1>

            <Input
              size={"sm"}
              type='email'
              label='Имейл'
            />

            <Input
              size={"sm"}
              type='password'
              label='Парола'
            />

            <div class='flex items-center justify-between space-x-20'>
              <div class='flex items-start'>
                <div class='flex items-center h-5'>
                  <Checkbox size='sm'>Запомни ме</Checkbox>
                </div>
              </div>

              <Link
                href='#'
                size='sm'>
                Забравена парола?
              </Link>
            </div>

            <Button
              className='w-full'
              color='primary'>
              Вход
            </Button>

            <p class='text-sm font-light text-gray-500'>
              Нямате профил все още?{" "}
              <Link
                className='ml-1'
                href='#'
                size='sm'>
                Регистрация
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

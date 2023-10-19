"use client";

import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { authStore, commonStore } from "../../stores/useStore";
import Alert from "../../components/Alert";

const Login = () => {
  const { loginData, setLoginData, login } = authStore;
  const { errorFields, errorMessage, successMessage } = commonStore;
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <>
      <Alert />

      <section className="flex items-center justify-center min-h-screen w-full bg-gray-50">
        <div className="flex flex-col px-6 py-8 sm:mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0">
            <div className="p-6 space-y-5 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800">
                Влезте в акаунта си
              </h1>

              <Input
                size={"sm"}
                type="email"
                label="Имейл"
                name="email"
                isInvalid={errorFields.error ? true : false}
                onChange={handleInputChange}
              />

              <Input
                size={"sm"}
                label="Парола"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <AiOutlineEye
                        className={`text-2xl ${
                          errorFields.error
                            ? "text-red-400"
                            : "text-default-400"
                        } text-default-400`}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className={`text-2xl ${
                          errorFields.error
                            ? "text-red-400"
                            : "text-default-400"
                        } text-default-400`}
                      />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                name="password"
                isInvalid={errorFields.error ? true : false}
                onChange={handleInputChange}
              />

              <div className="flex items-center justify-between space-x-10 sm:space-x-28">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox size="sm">Запомни ме</Checkbox>
                  </div>
                </div>

                <Link
                  href="#"
                  className="hover:underline text-blue-600 text-sm"
                >
                  Забравена парола
                </Link>
              </div>

              <Button className="w-full" color="primary" onClick={login}>
                Вход
              </Button>

              <p className="text-sm font-light text-gray-500">
                Нямате профил все още?{" "}
                <Link
                  className="ml-1 hover:underline text-blue-500"
                  href="/register"
                >
                  Регистрация
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default observer(Login);

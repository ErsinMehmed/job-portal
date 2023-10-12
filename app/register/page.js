"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const faculties = [
    { name: "Информатика" },
    { name: "Маркетинг" },
    { name: "Математика" },
    { name: "Стопански" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleRep, setIsVisibleRep] = useState(false);
  const [user, setUser] = useState({
    name: "",
    faculty: "",
    email: "",
    password: "",
    passwordRep: "",
  });

  useEffect(() => {
    setUser({
      name: "",
      faculty: "",
      email: "",
      password: "",
      passwordRep: "",
    });
  }, [setUser]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleVisibilityRep = () => {
    setIsVisibleRep(!isVisibleRep);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const teacherExists = await fetch("api/teacher-exists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });

      const { teacher } = await teacherExists.json();

      if (teacher) {
        console.log("Потребителят вече съществува.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          faculty: user.faculty,
          email: user.email,
          password: user.password,
          passwordRep: user.passwordRep,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        // router.push("/");
      } else {
        console.log("Потребителят е създаден успешно");
      }
    } catch (error) {
      //console.log("Потребителят не е създаден: ", error);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800">
              Създайте акаунт
            </h1>

            <Input
              size={"sm"}
              type="text"
              label="Име и фамилия"
              value={user.name}
              name="name"
              onChange={handleInputChange}
            />

            <Select
              label="Факултет"
              className="w-full"
              size={"sm"}
              name="faculty"
              onChange={handleInputChange}
            >
              {faculties.map((faculty, key) => (
                <SelectItem key={key} value={user.faculty}>
                  {faculty.name}
                </SelectItem>
              ))}
            </Select>

            <Input
              size={"sm"}
              type="email"
              label="Имейл"
              value={user.email}
              name="email"
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
                    <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              value={user.password}
              name="password"
              onChange={handleInputChange}
            />

            <Input
              size={"sm"}
              label="Потвърди парола"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibilityRep}
                >
                  {isVisibleRep ? (
                    <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisibleRep ? "text" : "password"}
              value={user.passwordRep}
              name="passwordRep"
              onChange={handleInputChange}
            />

            <div className="flex items-start space-x-3">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox size="sm">Приемам</Checkbox>
                </div>
              </div>

              <Link href="#" className="hover:underline text-blue-600 text-sm">
                Правилата и условията
              </Link>
            </div>

            <Button className="w-full" color="primary" onClick={handleSubmit}>
              Регистрация
            </Button>

            <p className="text-sm font-light text-gray-500">
              Вече имате акаунт?{" "}
              <Link href="/login" className="hover:underline text-blue-500">
                Вход
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

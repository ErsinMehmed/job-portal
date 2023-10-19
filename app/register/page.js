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
import Select from "../../components/html/Select";

const Register = () => {
  const {
    faculties,
    teacherData,
    setTeacherData,
    createTeacherProfile,
    getFaculties,
  } = authStore;
  const { errorFields, errorMessage, successMessage } = commonStore;
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }

    getFaculties();
  }, [session, router, getFaculties]);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleRep, setIsVisibleRep] = useState(false);
  const [termsCheckbox, setTermsCheckbox] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleVisibilityRep = () => {
    setIsVisibleRep(!isVisibleRep);
  };

  const handleInputChange = (name, value) => {
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };

  const facultyIndex = faculties.findIndex(
    (faculty) => faculty._id === teacherData.faculty
  );

  return (
    <>
      <Alert />

      <section className="flex items-center justify-center min-h-screen w-full bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 w-full sm:mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800">
                Създайте акаунт
              </h1>

              <Input
                size={"sm"}
                type="text"
                label="Име и фамилия"
                value={teacherData.name}
                isInvalid={errorFields.name ? true : false}
                errorMessage={errorFields.name}
                name="name"
                onChange={handleInputChange}
              />

              {/* <Select
                items={faculties}
                label="Факултет"
                className="w-full"
                size={"sm"}
                name="faculty"
                onChange={handleInputChange}
                isInvalid={errorFields.faculty ? true : false}
                errorMessage={errorFields.faculty}
                selectedKeys={facultyIndex.toString()}
              >
                {faculties.map((faculty, key) => (
                  <SelectItem key={key} value={faculty._id}>
                    {faculty.name}
                  </SelectItem>
                ))}
              </Select> */}

              <Select
                items={faculties}
                label="Факултет"
                errorFields={errorFields.faculty}
                onChange={(value) => handleInputChange("faculty", value)}
              />

              <Input
                size={"sm"}
                type="email"
                label="Имейл"
                value={teacherData.email}
                isInvalid={errorFields.email ? true : false}
                errorMessage={errorFields.email}
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
                      <AiOutlineEye
                        className={`text-2xl ${
                          errorFields.password
                            ? "text-red-400"
                            : "text-default-400"
                        } text-default-400`}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className={`text-2xl ${
                          errorFields.password
                            ? "text-red-400"
                            : "text-default-400"
                        } text-default-400`}
                      />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                value={teacherData.password}
                isInvalid={errorFields.password ? true : false}
                errorMessage={errorFields.password}
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
                      <AiOutlineEye
                        className={`text-2xl ${
                          errorFields.password
                            ? "text-red-400"
                            : "text-default-400"
                        } text-default-400`}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className={`text-2xl ${
                          errorFields.password
                            ? "text-red-400"
                            : "text-default-400"
                        } text-default-400`}
                      />
                    )}
                  </button>
                }
                type={isVisibleRep ? "text" : "password"}
                value={teacherData.passwordRep}
                isInvalid={errorFields.passwordRep ? true : false}
                errorMessage={errorFields.passwordRep}
                name="passwordRep"
                onChange={handleInputChange}
              />

              <div className="flex items-start space-x-1.5">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox
                      isSelected={termsCheckbox}
                      onValueChange={() => {
                        setTermsCheckbox(termsCheckbox ? false : true);
                      }}
                      size="sm"
                    >
                      Приемам
                    </Checkbox>
                  </div>
                </div>

                <Link
                  href="#"
                  className="hover:underline text-blue-600 text-sm pr-10 sm:pr-36"
                >
                  условията
                </Link>
              </div>

              <Button
                className="w-full"
                color="primary"
                isDisabled={!termsCheckbox}
                onClick={createTeacherProfile}
              >
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
    </>
  );
};

export default observer(Register);

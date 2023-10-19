"use client";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button, Checkbox } from "@nextui-org/react";
import { authStore, commonStore } from "../../stores/useStore";
import Alert from "../../components/Alert";
import Select from "../../components/html/Select";
import Input from "../../components/html/Input";

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

  const [termsCheckbox, setTermsCheckbox] = useState(false);

  const handleInputChange = (name, value) => {
    setTeacherData({ ...teacherData, [name]: value });
  };

  // const facultyIndex = faculties.findIndex(
  //   (faculty) => faculty._id === teacherData.faculty
  // );

  console.log(errorFields);

  return (
    <>
      <Alert />

      <section className='flex items-center justify-center min-h-screen w-full bg-gray-50'>
        <div className='flex flex-col items-center justify-center px-6 py-8 w-full sm:mx-auto lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-800'>
                Създайте акаунт
              </h1>

              <Input
                type='text'
                label='Име и фамилия'
                value={teacherData.name}
                errorMessage={errorFields.name}
                onChange={(value) => handleInputChange("name", value)}
              />

              <Select
                items={faculties}
                label='Факултет'
                errorMessage={errorFields.faculty}
                onChange={(value) => handleInputChange("faculty", value)}
              />

              <Input
                type='email'
                label='Имейл'
                value={teacherData.email}
                errorMessage={errorFields.email}
                onChange={(value) => handleInputChange("email", value)}
              />

              <Input
                label='Парола'
                type={"password"}
                value={teacherData.password}
                errorMessage={errorFields.password}
                onChange={(value) => handleInputChange("password", value)}
              />

              <Input
                label='Потвърди парола'
                type={"password"}
                value={teacherData.passwordRep}
                errorMessage={errorFields.passwordRep}
                onChange={(value) => handleInputChange("passwordRep", value)}
              />

              <div className='flex items-start space-x-1.5'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <Checkbox
                      isSelected={termsCheckbox}
                      onValueChange={() => {
                        setTermsCheckbox(termsCheckbox ? false : true);
                      }}
                      size='sm'>
                      Приемам
                    </Checkbox>
                  </div>
                </div>

                <Link
                  href='#'
                  className='hover:underline text-blue-600 text-sm pr-10 sm:pr-36'>
                  условията
                </Link>
              </div>

              <Button
                className='w-full'
                color='primary'
                isDisabled={!termsCheckbox}
                onClick={createTeacherProfile}>
                Регистрация
              </Button>

              <p className='text-sm font-light text-gray-500'>
                Вече имате акаунт?{" "}
                <Link
                  href='/login'
                  className='hover:underline text-blue-500'>
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

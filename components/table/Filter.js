import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMiniXMark } from "react-icons/hi2";
import { statuses, fields, employmentTypes } from "@/app/data";
import Input from "@/components/html/Input";
import Select from "@/components/html/Select";
import Autocomplete from "@/components/html/Autocomplete";

function Filter(props) {
  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          className='bg-white rounded-lg shadow border border-gray-100 w-full'
          key='content'
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}>
          <div className='flex items-center justify-between border-b-2 text-slate-700'>
            <div className='p-4 text-lg font-semibold leading-tight'>
              Подробно търсене
            </div>

            <button
              onClick={props.close}
              className='m-4 transition-all active:scale-90 hover:text-slate-500'>
              <HiMiniXMark className='w-6 h-6 stroke-1' />
            </button>
          </div>

          <div className='sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-4 pb-6'>
            <div className='px-3 lg:px-4 col-span-2'>
              <div className='font-semibold ml-0.5'>Дата на добавяне</div>
              <div className='sm:flex space-y-4 sm:space-y-0 sm:space-x-3.5 mt-2'>
                <Input
                  type='date'
                  label='От'
                />

                <Input
                  type='date'
                  label='До'
                />
              </div>
            </div>

            <div className='px-3 lg:px-4 col-span-2 mt-4 md:mt-0'>
              <div className='font-semibold ml-0.5'>Заплата</div>
              <div className='sm:flex space-y-4 sm:space-y-0 sm:space-x-3.5 mt-2'>
                <Input
                  type='text'
                  label='От'
                />

                <Input
                  type='text'
                  label='До'
                />
              </div>
            </div>

            <div className='px-3 lg:px-4 col-span-1 mt-4 lg:mt-0'>
              <div className='font-semibold mb-2 ml-0.5'>Статус</div>

              <Select
                items={statuses}
                label='Избери статус'
              />
            </div>

            <div className='pl-3 lg:pl-4 pr-2 col-span-1 mt-4'>
              <div className='font-semibold mb-2 ml-0.5'>Обалст</div>

              <Autocomplete
                items={fields}
                label='Избери област'
              />
            </div>

            <div className='px-3 lg:px-4 col-span-1 mt-4'>
              <div className='font-semibold mb-2 ml-0.5'>Тип</div>

              <Select
                items={employmentTypes}
                label='Избери тип'
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Filter;

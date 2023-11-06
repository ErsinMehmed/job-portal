import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Button, Tooltip } from "@nextui-org/react";
import { perPageResult } from "../../app/data";
import Loader from "./Loader";
import Select from "./Select";

const Table = (props) => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="bg-white p-3.5 rounded-t-lg shadow">
          <h2 className="text-xl font-semibold leading-tight">{props.title}</h2>
        </div>

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pb-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-b-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              {props.isLoading ? (
                <Loader
                  numberOfRows={props.perPage}
                  cellCount={8}
                  numberOfColumn={props.columns.length + 2}
                />
              ) : (
                <>
                  <thead>
                    <tr>
                      {props.columns.map((column, index) => (
                        <th
                          className="px-4 py-3.5 border-b-2 border-[#ebf4ff] bg-[#ebf4ff] text-left text-sm font-bold text-slate-700 uppercase tracking-wider"
                          key={index}
                        >
                          {column}
                        </th>
                      ))}

                      <th
                        colSpan={2}
                        className="px-5 text-center py-3.5 border-b-2 border-[#ebf4ff] bg-[#ebf4ff] text-sm font-bold text-slate-800 uppercase tracking-wider"
                      >
                        Действия
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {props.data?.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {Object.entries(row).map(
                          ([key, value], cellIndex) =>
                            key !== "_id" && (
                              <td
                                className={`${
                                  cellIndex === 0
                                    ? "font-semibold text-slate-800"
                                    : "text-slate-600"
                                } px-4 py-4 border-b border-[#ebf4ff] text-sm`}
                                key={cellIndex}
                              >
                                {key === "creator"
                                  ? value.name
                                  : key === "salary"
                                  ? `${value} лв.`
                                  : value}
                              </td>
                            )
                        )}

                        <td className="pl-4 py-4 border-b border-[#ebf4ff]">
                          <Tooltip content="Редактирай обявата">
                            <button
                              type="button"
                              className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center transition-all"
                            >
                              <AiFillEdit className="w-4 h-4" />
                            </button>
                          </Tooltip>
                        </td>

                        <td className="pr-4 py-4 border-b border-[#ebf4ff]">
                          <Tooltip color="danger" content="Изтрий обявата">
                            <button
                              type="button"
                              className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center transition-all"
                            >
                              <AiFillDelete className="w-4 h-4" />
                            </button>
                          </Tooltip>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              )}
            </table>

            <div className="px-5 py-4 bg-white border-t flex  items-center justify-between">
              <div className="w-32 h-0 -mt-10">
                <Select
                  options={perPageResult}
                  value={props.perPage}
                  onChange={(event) => props.setPerPage(event)}
                />
              </div>

              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

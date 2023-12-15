import { BsTrash3 } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi2";

const EditableSection = (props) => {
  const data =
    props.adData?.ad?.[props.fieldName] ?? props.adDataCreate[props.fieldName];

  const addData = () => {
    if (props.adData?.ad) {
      props.setAdData((prevData) => {
        const newData = [...prevData.ad[props.fieldName], props.text];

        return {
          ...prevData,
          ad: {
            ...prevData.ad,
            [props.fieldName]: newData,
          },
        };
      });
    } else {
      const newData = [...props.adDataCreate[props.fieldName], props.text];

      props.setAdDataCreate({
        ...props.adDataCreate,
        [props.fieldName]: newData,
      });
    }

    props.removeArrayEmptyValue();
  };

  const removeData = (indexToRemove) => {
    if (props.adData?.ad) {
      props.setAdData((prevData) => {
        const newData = [...prevData.ad[props.fieldName]];
        newData.splice(indexToRemove, 1);

        return {
          ...prevData,
          ad: {
            ...prevData.ad,
            [props.fieldName]: newData,
          },
        };
      });
    } else {
      const newData = [...props.adDataCreate[props.fieldName]];
      newData.splice(indexToRemove, 1);

      props.setAdDataCreate({
        ...props.adDataCreate,
        [props.fieldName]: newData,
      });
    }

    props.removeArrayEmptyValue();
  };

  return (
    <ul
      className={`${
        data?.length > 1 ? "px-5 sm:px-11" : "px-10 sm:px-16"
      }  space-y-2 text-slate-600`}
    >
      {data &&
        data.map((item, index) =>
          props.activeElement === props.fieldName + index ? (
            props.renderInputElement(props.fieldName, index)
          ) : (
            <>
              <li
                key={index}
                className={`list-disc cursor-pointer ${
                  data.length > 1 && "flex items-center"
                }`}
              >
                {data.length > 1 && (
                  <span>
                    <button
                      className="rounded-full p-1.5 bg-white border hover:bg-slate-50 transition-all active:scale-95 mr-2"
                      onClick={() => removeData(index)}
                    >
                      <BsTrash3 />
                    </button>
                  </span>
                )}

                <span
                  onClick={() => {
                    props.handleElementClick(props.fieldName + index);
                  }}
                >
                  {item}
                </span>
              </li>

              {index === data.length - 1 && data.length < 10 && (
                <div className="flex justify-center mt-4 w-full">
                  <button
                    className="rounded-full p-1.5 bg-white border hover:bg-slate-50 transition-all active:scale-95"
                    onClick={() => addData()}
                  >
                    <HiOutlinePlus />
                  </button>
                </div>
              )}
            </>
          )
        )}
    </ul>
  );
};

export default EditableSection;

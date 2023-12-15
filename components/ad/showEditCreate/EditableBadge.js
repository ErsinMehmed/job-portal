import Autocomplete from "@/components/html/Autocomplete";
import Tooltip from "@/components/Tooltip";
import { adStore } from "@/stores/useStore";
import { FaCheck } from "react-icons/fa6";
import { badgeColors } from "@/app/data";
import { usePathname } from "next/navigation";

const EditableBadge = (props) => {
  const { adDataCreate, setAdDataCreate } = adStore;
  const pathname = usePathname();

  return props.editable ? (
    <Tooltip
      width="w-64"
      buttonChild={
        <div
          className={`rounded-xl px-3.5 py-0.5 ${props.badgeColor} text-white text-sm font-semibold`}
        >
          {props.editCreateValue}
        </div>
      }
      position="bottom"
    >
      <div className="text-slate-600 font-semibold mb-1.5">Избери тип:</div>

      <Autocomplete
        onChange={props.onChange}
        items={props.items}
        value={props.value}
        label={props.label}
      />

      <div className="text-slate-600 font-semibold mt-4">Избери цвят:</div>

      <div className="w-full grid grid-cols-4 gap-2 mt-1.5">
        {badgeColors.map((color, index) => (
          <div
            key={index}
            className={`h-10 w-10 rounded-full shodow-lg transition-all cursor-pointer ${color} flex items-center justify-center`}
            onClick={() => {
              if (pathname.includes("/edit")) {
                props.setAdData({
                  ...props.adData,
                  ad: {
                    ...props.adData.ad,
                    badge_color: color,
                  },
                });
              } else {
                setAdDataCreate({
                  ...adDataCreate,
                  badge_color: color,
                });
              }
            }}
          >
            {(props.adData?.ad ?? adDataCreate).badge_color === color && (
              <FaCheck className="w-5 h-5" />
            )}
          </div>
        ))}
      </div>
    </Tooltip>
  ) : (
    <div
      className={`rounded-xl px-3.5 py-0.5 ${props.badgeColor} text-white text-sm font-semibold`}
    >
      {props.text}
    </div>
  );
};

export default EditableBadge;

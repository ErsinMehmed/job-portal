import React from "react";

const Loader = (props) => {
  const skeletonRows = [];

  for (let i = 0; i < props.numberOfRows; i++) {
    const cells = [];

    for (let j = 0; j < props.cellCount; j++) {
      cells.push(
        <td
          key={j}
          className='px-4 py-[23px] border-b border-[#ebf4ff]'>
          <div className='h-1.5 bg-gray-200 rounded-full w-10/12 mb-2.5'></div>
          <div className='h-1.5 bg-gray-200 rounded-full'></div>
        </td>
      );
    }

    skeletonRows.push(<tr key={i}>{cells}</tr>);
  }

  return <>{skeletonRows}</>;
};

export default Loader;

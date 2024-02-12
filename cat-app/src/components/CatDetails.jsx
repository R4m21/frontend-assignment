import { useState } from "react";

const CatDetails = ({ catData }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div
      className={`flex flex-col gap-2 w-2/6 h-2/6 border border-cyan-400 rounded-2xl cursor-pointer ring-4 transition`}
      onClick={() => setIsToggle(!isToggle)}
    >
      <img
        className={`w-auto ${
          isToggle ? "rounded-ss-2xl rounded-se-2xl" : "rounded-2xl"
        }`}
        src={catData.url}
        alt={catData.name}
      />
      {!isToggle ? null : (
        <div className="p-4">
          <h2 className="font-bold pb-4">
            <span>Name :</span> {catData.name}
          </h2>
          <p className="">Description: {catData.description}</p>
        </div>
      )}
    </div>
  );
};

export default CatDetails;

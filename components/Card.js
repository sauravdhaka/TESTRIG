import React from "react";

function Card() {
  return (
    <div className="w-[20%] bg-black text-white min-h-[265px] m-2">
      <div className="px-2">
        <div className="flex justify-between my-2">
          <h4>Automation Testing</h4>
          <img src="https://www.testrigtechnologies.com/wp-content/uploads/2023/03/All-Roads-Lead-icn-01.svg" />
        </div>
        <p>
          With right choice of tools and experts to overcome challenges, we
          deliver QA automation testing services that guarantee quality & ROI.
        </p>
      </div>
    </div>
  );
}

export default Card;

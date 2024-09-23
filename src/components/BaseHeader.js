import { LOGO } from "../utils/constants";

const BaseHeader = ({ endElement }) => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-black">
      <div className="px-8 py-3 flex  ">
        <img className="w-44" src={LOGO} alt="Netflix-logo" />
      </div>
      <div>
      {endElement}
      </div>
    </div>
  );
};

export default BaseHeader;

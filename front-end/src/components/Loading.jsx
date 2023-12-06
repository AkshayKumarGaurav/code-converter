import React from "react";
import { RotatingSquare } from "react-loader-spinner";

const Loading = () => {
  return (
    <RotatingSquare
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="square-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loading;
import React, { Suspense, useState, useEffect, useCallback } from "react";
import { useMappedState } from "redux-react-hook";

const Demo2Page: React.FC = props => {
  const [result, setResult] = useState({ skill: "hook" });
  useEffect(() => {}, []);
	const { token } = useMappedState(
    useCallback(
      state => ({
        token: state.user.token
      }),
      []
    )
  );
  return (
		<Suspense fallback={<div>Loading...</div>}>
    <div className="demo-wrap">
      <div className="title"> {result.skill}</div>
      <div>{token}</div>
    </div>
		</Suspense>

  );
};
export default Demo2Page;

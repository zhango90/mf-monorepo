import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";
export default () => {
  const history = useHistory();
  const ref = useRef(null);
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log(" on contaioern on Navigate:>> ");
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      }
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};

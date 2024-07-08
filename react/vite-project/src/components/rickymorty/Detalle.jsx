import React from "react";
import { useRouter } from "@getshogun/frontend-hooks";

const MyComponent = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      {/* Simple usage */}
      <button onClick={() => router.push("/contact")}>
        Go to contact page
      </button>

      {/* Advanced usage */}
      <button
        onClick={() =>
          router.push("/profile", "/my-profile", {
            scroll: false,
            shallow: true,
            locale: "en",
          })
        }
      >
        Go to profile page
      </button>
    </React.Fragment>
  );
};

export default MyComponent;
replace;

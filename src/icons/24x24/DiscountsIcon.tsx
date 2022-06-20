import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const DiscountsIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.414 2.25c-.464 0-.91.184-1.237.513L4.97 10.97l-2.293 2.293a1.75 1.75 0 0 0 0 2.474l5.586 5.586a1.75 1.75 0 0 0 2.474 0l2.293-2.293 8.207-8.207a1.75 1.75 0 0 0 .513-1.237V5.914c0-.464-.184-.909-.513-1.237l-1.914-1.914a1.75 1.75 0 0 0-1.237-.513h-3.672Zm-.177 1.573a.25.25 0 0 1 .177-.073h3.672a.25.25 0 0 1 .177.073l1.914 1.914a.25.25 0 0 1 .073.177v3.672a.25.25 0 0 1-.073.177L12.5 17.439 6.56 11.5l7.677-7.677ZM5.5 12.561l5.94 5.939-1.763 1.763a.25.25 0 0 1-.354 0l-5.586-5.586a.25.25 0 0 1 0-.354L5.5 12.561ZM16 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          fill="currentColor"
        />
      </SvgIcon>
    );
  }
);

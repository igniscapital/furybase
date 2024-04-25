// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PauseSquareSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PauseSquareSvgrepoComsvgIcon(
  props: PauseSquareSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M14 8a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zm-4 0a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zM7.25 2.388C8.55 2.099 10.124 2 12 2s3.451.1 4.75.388c1.31.291 2.399.788 3.236 1.626.838.837 1.335 1.926 1.626 3.236.289 1.3.388 2.874.388 4.75s-.1 3.451-.388 4.75c-.291 1.31-.788 2.399-1.626 3.236-.837.838-1.926 1.335-3.236 1.626-1.299.289-2.874.388-4.75.388s-3.451-.1-4.75-.388c-1.31-.291-2.399-.788-3.236-1.626-.838-.837-1.335-1.926-1.626-3.236C2.099 15.45 2 13.876 2 12s.1-3.451.388-4.75c.291-1.31.788-2.399 1.626-3.236.837-.838 1.926-1.335 3.236-1.626z"
        }
        fill={"#323232"}
      ></path>
    </svg>
  );
}

export default PauseSquareSvgrepoComsvgIcon;
/* prettier-ignore-end */

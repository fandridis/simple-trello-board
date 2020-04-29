import React, { CSSProperties } from "react";
import styled from "styled-components";

const Icon = styled.svg<{ move: boolean; pointer: boolean; color: string }>`
  &:hover {
    transform: ${props => (props.move ? "translateY(2px)" : null)};
  }
  transition: 0.25s all;
  cursor: ${props => (props.pointer ? "pointer" : "default")};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  vertical-align: middle;
  fill: ${props => (props.color ? props.color : null)};
  z-index: 100;
`;
const defaultProps = {
  move: true,
  pointer: false,
  color: "inherit",
  style: {
    width: 30
  }
};

type IconProps = {
  name: IconTypes | string;
  move?: boolean;
  pointer?: boolean;
  color?: string;
  style?: CSSProperties;
} & typeof defaultProps;

export enum IconTypes {
  TYPOGRAPHY = "TYPOGRAPHY",
  REDUX = "REDUX",
  PICTURE = "PICTURE"
}

const MyIcon = ({ name, ...otherProps }: IconProps) => {
  switch (name) {
    case IconTypes.TYPOGRAPHY:
      return (
        <Icon
          {...otherProps}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 144 144"
        >
          <g>
            <path d="M32.5,78.3h17.4l-8.6-25.5L32.5,78.3z M35.3,76.3L41.2,59l5.9,17.3H35.3z" />
            <path d="M98.1,63.5c-3.3,0-6,1.1-8,3.3l0,0c-2,2.2-3,5.2-3,8.9c0,3.8,1,6.8,3,8.9c2,2.2,4.7,3.3,8,3.3c3.2,0,5.9-1.1,8-3.4   c2.1-2.2,3.1-5.2,3.1-8.8c0-3.7-1-6.7-3.1-8.9C104.1,64.6,101.4,63.5,98.1,63.5z M104.7,83.1c-1.7,1.8-3.8,2.7-6.6,2.7   c-2.8,0-4.9-0.9-6.6-2.6c-1.7-1.8-2.5-4.3-2.5-7.6c0-3.2,0.8-5.8,2.5-7.6c1.7-1.8,3.8-2.6,6.6-2.6c2.7,0,4.8,0.9,6.6,2.7   c1.7,1.8,2.6,4.3,2.6,7.5C107.3,78.8,106.4,81.3,104.7,83.1z" />
            <path d="M144,41.8v-2H34.5l3.4-9.3h66.8v-2H38.7L49.2,0.1L47.1,0L36.6,28.5H0v2h35.8L10.4,99.6h17L31,89h20.4L55,99.6h15l3.6,9.9H0   v2h74.4l8.3,22.6l1.9-0.7l-8.1-21.9h44.7V144h2v-32.5H144v-2h-20.7v-9.9V53.3v-1.6h-16v5.7c-1.1-1.4-2.5-2.7-4.1-3.7l0,0   c-2.7-1.7-5.9-2.5-9.6-2.5c-4,0-7.6,1-10.7,3c-3.1,2-5.6,4.9-7.4,8.6c-1.8,3.7-2.7,8-2.7,13c0,4.9,0.9,9.3,2.7,13   c1.8,3.7,4.3,6.6,7.4,8.6c3.1,2,6.7,3,10.7,3c3.7,0,6.9-0.9,9.6-2.5c1.6-1,3-2.2,4.1-3.7v5.7h14v9.9H75.8L66.4,84l0,0L50.8,41.8   H144z M109.3,97.6v-7.3l-1.9-0.4c-1.1,2.5-2.9,4.6-5.2,6.1c-2.4,1.5-5.2,2.2-8.5,2.2c-3.6,0-6.8-0.9-9.6-2.7   c-2.8-1.8-5.1-4.4-6.7-7.8c-1.7-3.4-2.5-7.5-2.5-12.1c0-4.7,0.8-8.7,2.5-12.1c1.6-3.4,3.9-6,6.7-7.7c2.8-1.8,6.1-2.7,9.6-2.7   c3.3,0,6.2,0.8,8.5,2.2c2.3,1.5,4.1,3.5,5.2,6.1l1.9-0.4v-7.3h12v44H109.3z M69,97l0.2,0.6H56.4L52.8,87H29.6l-3.6,10.6H13.3   l20.6-55.8h14.8L69,97z" />
          </g>
        </Icon>
      );

    case IconTypes.REDUX:
      return (
        <Icon {...otherProps} x="0px" y="0px" viewBox="0 0 100 100">
          <g transform="translate(0,-952.36218)">
            <path
              d="m 28.5625,962.42473 c -0.6903,0 -1.2813,0.59103 -1.2813,1.28125 l 0,34.21875 c -1.0541,0.0681 -2.0882,0.19411 -3.0937,0.40625 a 1.0856908,1.0856908 0 0 0 -0.8438,1.15625 c 0,0 0.095,1.27077 -0.031,2.59377 -0.063,0.6615 -0.1966,1.3153 -0.375,1.7812 -0.1783,0.4659 -0.3542,0.6536 -0.4376,0.6875 -0.084,0.034 -0.3596,0.053 -0.8124,-0.1562 -0.4528,-0.2089 -1.0244,-0.602 -1.5313,-1.0313 -1.0138,-0.8584 -1.8125,-1.8437 -1.8125,-1.8437 a 1.0856908,1.0856908 0 0 0 -1.4375,-0.2188 c -2.6995,1.712 -5.0056,3.9791 -6.75,6.6563 a 1.0856908,1.0856908 0 0 0 0.2187,1.4375 c 0,0 0.9666,0.819 1.8126,1.8437 0.423,0.5124 0.7968,1.0758 1,1.5313 0.2035,0.4555 0.1912,0.7294 0.1562,0.8125 -0.035,0.083 -0.2194,0.2648 -0.6875,0.4375 -0.4681,0.1726 -1.1191,0.2886 -1.7813,0.3437 -1.3244,0.1104 -2.5937,0 -2.5937,0 a 1.0856908,1.0856908 0 0 0 -1.1563,0.8438 c -0.3513,1.5689 -0.5312,3.2013 -0.5312,4.875 0,1.5789 0.1553,3.1379 0.4688,4.625 a 1.0856908,1.0856908 0 0 0 1.1562,0.8437 c 0,0 1.2704,-0.095 2.5938,0.031 0.6619,0.063 1.315,0.1967 1.7812,0.375 0.4662,0.1784 0.6535,0.354 0.6875,0.4375 0.034,0.084 0.021,0.3595 -0.1875,0.8125 -0.2089,0.453 -0.5707,1.0241 -1,1.5313 -0.8585,1.0144 -1.8438,1.8125 -1.8438,1.8125 a 1.0856908,1.0856908 0 0 0 -0.2187,1.4375 c 1.712,2.6992 3.98,4.9749 6.6563,6.7187 a 1.0856908,1.0856908 0 0 0 1.4062,-0.1875 c 0,0 0.8502,-0.9665 1.875,-1.8125 0.5124,-0.4229 1.0755,-0.7966 1.5312,-1 0.4556,-0.2033 0.6982,-0.1912 0.7813,-0.1562 0.083,0.035 0.2959,0.2194 0.4687,0.6875 0.1727,0.4681 0.2886,1.119 0.3438,1.7812 0.1103,1.3245 0,2.5938 0,2.5938 a 1.0856908,1.0856908 0 0 0 0.8438,1.1562 c 1.5676,0.3508 3.2001,0.5313 4.875,0.5313 1.5809,0 3.1068,-0.1551 4.5937,-0.4688 a 1.0856908,1.0856908 0 0 0 0.875,-1.1562 c 0,0 -0.095,-1.2708 0.031,-2.5938 0.063,-0.6615 0.1654,-1.3153 0.3437,-1.7812 0.1783,-0.4659 0.3853,-0.6536 0.4687,-0.6875 0.083,-0.034 0.3598,-0.021 0.8126,0.1875 0.4528,0.2089 0.993,0.5708 1.5,1 1.0138,0.8584 1.8437,1.8437 1.8437,1.8437 a 1.0856908,1.0856908 0 0 0 1.4063,0.2188 c 2.6992,-1.7119 5.006,-3.9791 6.75,-6.6563 a 1.0856908,1.0856908 0 0 0 -0.1876,-1.4375 c 0,0 -0.9664,-0.8189 -1.8124,-1.8437 -0.423,-0.5124 -0.828,-1.0758 -1.0313,-1.5313 -0.2033,-0.4555 -0.1915,-0.6981 -0.1563,-0.7812 0.035,-0.083 0.2194,-0.2961 0.6876,-0.4688 0.4682,-0.1726 1.1502,-0.2885 1.8124,-0.3437 1.3243,-0.1104 2.5938,0 2.5938,0 a 1.0856908,1.0856908 0 0 0 1.1562,-0.8438 c 0.1935,-0.865 0.3494,-1.7561 0.4376,-2.6562 l 41.1874,0 c 0.6903,0 1.2813,-0.591 1.2813,-1.2813 l 0,-57.31247 c 0,-0.69022 -0.5908,-1.28125 -1.2813,-1.28125 l -63.5624,0 z m 0.875,2.15625 61.7812,0 0,55.53122 -40.1875,0 c 0,-0.01 0,-0.021 0,-0.031 0,-1.5789 -0.155,-3.1064 -0.4687,-4.5937 a 1.0856908,1.0856908 0 0 0 -1.1563,-0.875 c 0,0 -1.27,0.095 -2.5937,-0.031 -0.6618,-0.063 -1.3151,-0.1967 -1.7813,-0.375 -0.4662,-0.1783 -0.6535,-0.354 -0.6875,-0.4375 -0.034,-0.084 -0.053,-0.3595 0.1562,-0.8125 0.2089,-0.453 0.602,-1.0241 1.0313,-1.5313 0.8586,-1.0144 1.8437,-1.8125 1.8437,-1.8125 a 1.0856908,1.0856908 0 0 0 0.2188,-1.4062 c -1.7121,-2.6992 -3.9796,-5.0062 -6.6562,-6.75 a 1.0856908,1.0856908 0 0 0 -1.4376,0.1875 c 0,0 -0.8189,0.9665 -1.8437,1.8125 -0.5124,0.423 -1.0759,0.8279 -1.5313,1.0312 -0.4556,0.2034 -0.7291,0.1913 -0.8124,0.1563 -0.083,-0.035 -0.2649,-0.2194 -0.4376,-0.6875 -0.1728,-0.4681 -0.2885,-1.1503 -0.3437,-1.8125 -0.1103,-1.3245 0,-2.59377 0,-2.59377 a 1.0856908,1.0856908 0 0 0 -0.8437,-1.15625 c -1.3725,-0.30711 -2.7949,-0.46068 -4.25,-0.5 l 0,-33.3125 z m 21.75,12.5625 c -0.7637,0 -1.4376,0.63089 -1.4376,1.40625 l 0,23.87497 c 0,0.7754 0.674,1.375 1.4376,1.375 l 2.75,0 0,2.375 c 0,0.7678 0.6384,1.4063 1.4062,1.4063 l 14.1875,0 c 0.7676,0 1.4063,-0.6385 1.4063,-1.4063 l 0,-23.87497 c 0,-0.76779 -0.6387,-1.40625 -1.4063,-1.40625 l -2.7813,0 0,-2.34375 c 0,-0.77536 -0.6426,-1.40625 -1.4062,-1.40625 l -14.1562,0 z m 0,1.34375 14.1562,0 c 0.054,0 0.062,0.0201 0.062,0.0625 l 0,2.34375 -10.0625,0 c -0.7768,0.0148 -1.3075,0.75438 -1.4062,1.40625 l 0,0.0312 0,20.15627 -2.75,0 c -0.055,0 -0.094,-0.02 -0.094,-0.062 l 0,-23.87502 c 0,-0.0426 0.039,-0.0625 0.094,-0.0625 z m 4.1562,3.75 14.1875,0 c 0.05,0 0.062,0.0122 0.062,0.0625 l 0,23.87497 c 0,0.05 -0.013,0.062 -0.062,0.062 l -14.1875,0 c -0.05,0 -0.062,-0.012 -0.062,-0.062 l 0,-2.375 0,-21.49997 c 0.01,-0.0415 0.03,-0.0595 0.062,-0.0625 z m -26.5312,17.78127 c 1.2228,0 2.4011,0.1966 3.5624,0.4062 -0.029,0.5448 -0.1152,0.9058 -0.031,1.9063 0.065,0.779 0.2172,1.6081 0.5,2.375 0.2828,0.7668 0.7336,1.5619 1.625,1.9375 0.8913,0.3756 1.7849,0.1456 2.5312,-0.1875 0.7463,-0.3331 1.4285,-0.8149 2.0313,-1.3125 0.777,-0.6414 1.0061,-0.9432 1.375,-1.3438 1.8765,1.3392 3.4941,2.983 4.8125,4.875 -0.4051,0.364 -0.693,0.6059 -1.3438,1.375 -0.5052,0.5967 -1.0014,1.2578 -1.3437,2 -0.3423,0.7423 -0.5523,1.6354 -0.1875,2.5313 0.3649,0.896 1.1427,1.3642 1.9062,1.6562 0.7636,0.2921 1.5966,0.4257 2.375,0.5 0.9998,0.095 1.3611,0.054 1.9063,0.031 0.1817,1.085 0.3437,2.1751 0.3437,3.3125 0,1.2228 -0.1966,2.4011 -0.4062,3.5625 -0.5448,-0.029 -0.9056,-0.083 -1.9062,0 -0.779,0.065 -1.608,0.186 -2.375,0.4688 -0.7669,0.2828 -1.5619,0.7649 -1.9376,1.6562 -0.3757,0.8913 -0.1456,1.785 0.1876,2.5313 0.3333,0.7463 0.8149,1.3972 1.3124,2 0.6414,0.7769 0.9432,1.0061 1.3438,1.375 -1.3445,1.8847 -3.0036,3.5219 -4.9062,4.8437 -0.3638,-0.405 -0.5751,-0.7241 -1.3438,-1.375 -0.5964,-0.505 -1.258,-1.0014 -2,-1.3437 -0.742,-0.3423 -1.6353,-0.5521 -2.5312,-0.1875 -0.8959,0.3646 -1.3642,1.1429 -1.6563,1.9062 -0.2921,0.7633 -0.4257,1.5969 -0.5,2.375 -0.095,0.9994 -0.053,1.3612 -0.031,1.9063 -1.0854,0.1825 -2.1749,0.3437 -3.3124,0.3437 -1.2219,0 -2.4005,-0.1958 -3.5626,-0.4062 0.029,-0.5448 0.083,-0.9058 0,-1.9063 -0.065,-0.779 -0.1859,-1.5769 -0.4687,-2.3437 -0.2828,-0.7669 -0.7649,-1.5619 -1.6563,-1.9375 -0.8913,-0.3756 -1.7849,-0.1769 -2.5312,0.1562 -0.7463,0.3332 -1.3972,0.8149 -2,1.3125 -0.777,0.6414 -1.0061,0.9432 -1.375,1.3438 -1.8781,-1.3396 -3.5247,-2.9817 -4.8438,-4.875 0.405,-0.364 0.7239,-0.5747 1.375,-1.3438 0.5051,-0.5967 1.0015,-1.289 1.3438,-2.0312 0.3423,-0.7423 0.5522,-1.6354 0.1875,-2.5313 -0.3649,-0.896 -1.1429,-1.3641 -1.9063,-1.6562 -0.7635,-0.2921 -1.5967,-0.4257 -2.375,-0.5 -0.9999,-0.095 -1.3609,-0.054 -1.9062,-0.031 -0.1817,-1.0844 -0.3438,-2.1751 -0.3438,-3.3125 0,-1.2228 0.1966,-2.4005 0.4063,-3.5625 0.5485,0.028 0.8909,0.082 1.875,0 0.7791,-0.065 1.6082,-0.1859 2.375,-0.4688 0.7668,-0.2828 1.5619,-0.7336 1.9375,-1.625 0.3756,-0.8913 0.1771,-1.8162 -0.1562,-2.5625 -0.3332,-0.7463 -0.8151,-1.3972 -1.3126,-2 -0.6414,-0.7769 -0.9431,-1.0061 -1.3437,-1.375 1.344,-1.8838 3.0053,-3.491 4.9063,-4.8125 0.368,0.4082 0.5614,0.7078 1.3124,1.3438 0.5962,0.505 1.2894,1.0014 2.0313,1.3437 0.7419,0.3424 1.6357,0.5521 2.5313,0.1875 0.8959,-0.3646 1.3641,-1.1429 1.6562,-1.9062 0.2921,-0.7633 0.4257,-1.5968 0.5,-2.375 0.095,-0.9994 0.053,-1.3612 0.031,-1.9063 1.0849,-0.1817 2.1742,-0.3437 3.3126,-0.3437 z m 0,7.4687 c -6.9419,0 -12.5938,5.652 -12.5938,12.5938 0,6.9418 5.652,12.5937 12.5938,12.5937 6.9418,0 12.5937,-5.6519 12.5937,-12.5937 0,-6.9418 -5.6519,-12.5938 -12.5937,-12.5938 z m 0,2.0938 c 5.8216,0 10.5312,4.6783 10.5312,10.5 0,5.8217 -4.7095,10.5312 -10.5312,10.5312 -5.8217,0 -10.5313,-4.7095 -10.5313,-10.5312 0,-5.8217 4.7096,-10.5 10.5313,-10.5 z m 0,0.9375 c -5.2698,0 -9.5626,4.2928 -9.5626,9.5625 0,5.2696 4.2929,9.5625 9.5626,9.5625 5.2697,0 9.5624,-4.2929 9.5624,-9.5625 0,-5.2697 -4.2928,-9.5625 -9.5624,-9.5625 z m 0,2.1875 c 4.0961,0 7.375,3.2787 7.375,7.375 0,4.0963 -3.2789,7.4062 -7.375,7.4062 -4.0962,0 -7.4063,-3.3099 -7.4063,-7.4062 0,-4.0963 3.3101,-7.375 7.4063,-7.375 z"
              stroke="none"
              visibility="visible"
              display="inline"
              overflow="visible"
            />
          </g>
        </Icon>
      );

    case IconTypes.PICTURE:
      return (
        <Icon
          {...otherProps}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          x="0px"
          y="0px"
        >
          <path d="M32.9248,22.40308,12.60236,28.44641a3.99982,3.99982,0,0,0-2.69366,4.97491l9.86859,33.16,2.08661-7.0116L13.74249,32.2804l17.81982-5.29907Z" />
          <path d="M15.6322,80.50946l2.08673-7.01166L3.86078,26.93213l30.40717-9.0423,1.36249-4.57819L2.72058,23.09814A3.99985,3.99985,0,0,0,.02692,28.073Z" />
          <path d="M81.57129,6.01044,86.1499,7.372,84.80713,2.86A3.99571,3.99571,0,0,0,79.83313.167L70.87708,2.83026l7.01648,2.08649L80.97327,4.001Z" />
          <path d="M127.37823,25.02759a3.99987,3.99987,0,0,0-2.37732-1.92944L47.88843.167A3.99571,3.99571,0,0,0,42.91443,2.86L14.02692,99.92694a3.99995,3.99995,0,0,0,2.69366,4.97491L93.83313,127.833a3.99571,3.99571,0,0,0,4.974-2.69305l28.88745-97.067A3.99971,3.99971,0,0,0,127.37823,25.02759ZM94.97327,123.999,17.86078,101.06787,46.74829,4.001l77.11249,22.93115Z" />
          <path d="M51.02631,38.49487l3.487,2.00531a.72828.72828,0,0,1,.09454,1.19574l-3.21429,2.61487a.72738.72738,0,0,0,.44629,1.29248.80448.80448,0,0,0,.09344-.00555l3.9884-.47113a.74674.74674,0,0,1,.08746-.00519.72574.72574,0,0,1,.6936.92535l-1.11017,3.91309a.72729.72729,0,0,0,.702.92865.70909.70909,0,0,0,.48157-.19189l3.03723-2.75549a.7234.7234,0,0,1,1.1676.28882l1.37006,3.77167a.70716.70716,0,0,0,.67786.47729.7155.7155,0,0,0,.71112-.568l.91724-4.05908a.72758.72758,0,0,1,.71039-.56848.71648.71648,0,0,1,.3938.11829l3.39337,2.21765a.71673.71673,0,0,0,.39514.12152.73153.73153,0,0,0,.66827-1.01923l-1.61859-3.78064a.72872.72872,0,0,1,.62311-1.0141l4.12744-.25647a.72827.72827,0,0,0,.3183-1.35712l-3.487-2.00531a.72828.72828,0,0,1-.09454-1.19574l3.21429-2.61487a.72743.72743,0,0,0-.44635-1.29254.79022.79022,0,0,0-.09338.00555l-3.9884.47119a.74674.74674,0,0,1-.08746.00519.72569.72569,0,0,1-.6936-.92535l1.11017-3.91309a.72732.72732,0,0,0-.70209-.92871.70919.70919,0,0,0-.48157.19189L64.88141,32.867a.72338.72338,0,0,1-1.1676-.28888l-1.37012-3.77161a.70714.70714,0,0,0-.6778-.47736.71545.71545,0,0,0-.71112.56805l-.91724,4.059a.72753.72753,0,0,1-.71039.56848.716.716,0,0,1-.3938-.11829L55.54,31.18878a.7171.7171,0,0,0-.39508-.12146.73149.73149,0,0,0-.66833,1.01917l1.61859,3.7807a.72866.72866,0,0,1-.62311,1.014l-4.1275.25647A.72831.72831,0,0,0,51.02631,38.49487Zm8.42474.13977a4.7182,4.7182,0,0,0,.5119-1.15179,4.70127,4.70127,0,0,0,2.27509-.9516,4.70906,4.70906,0,0,0,2.158.52441l.05878-.00037a4.67384,4.67384,0,0,0,1.44971,1.72107,4.7348,4.7348,0,0,0,.158,2.40314,4.719,4.719,0,0,0-1.33057,2.14575,4.7009,4.7009,0,0,0-2.27515.9516,4.7107,4.7107,0,0,0-2.15729-.52441h-.00073l-.05865.00037a4.67252,4.67252,0,0,0-1.44977-1.72107,4.73352,4.73352,0,0,0-.1579-2.4032A4.717,4.717,0,0,0,59.451,38.63464Z" />
          <path d="M28.18994,84.30115a4.00008,4.00008,0,0,0,2.37738,1.9295L92.44769,104.6322a3.99571,3.99571,0,0,0,4.974-2.69305l20.39117-68.51782a3.99995,3.99995,0,0,0-2.69366-4.97491L53.23883,10.04486a3.99571,3.99571,0,0,0-4.974,2.69305L27.87366,81.25574A3.99964,3.99964,0,0,0,28.18994,84.30115Zm23.90869-70.4223L113.97906,32.2804,99.66095,80.39172l-.97736-2.95447a2.0002,2.0002,0,0,0-2.92969-1.08594L92.3,78.4295l-6.0647-31.91266a2.00047,2.00047,0,0,0-3.26465-1.1474l-22.063,18.86493-2.68848-3.58685a1.99812,1.99812,0,0,0-2.79687-.40332L48.93811,65.085l-3.22229-5.76855a1.99988,1.99988,0,0,0-2.76074-.748l-5.039,2.96631ZM36.24121,67.16248l6.98-4.10876,3.33691,5.97351c.01123.02.0285.03387.04028.05341a1.04005,1.04005,0,0,0,.24933.33075c.023.02466.04382.05084.06787.07416a1.97855,1.97855,0,0,0,.84357.486c.02435.0069.04852.0119.07312.01788a1.99365,1.99365,0,0,0,.43652.05731c.01263.00024.02472.00488.03735.00488l.0177-.0022a1.97488,1.97488,0,0,0,.91565-.23578c.01294-.0069.027-.00873.03979-.01593.03009-.01678.054-.03979.08282-.05792.04547-.02863.09363-.04993.13739-.0827l6.71582-5.01355,2.65942,3.548,3.63745,7.39325a2.00006,2.00006,0,1,0,3.58936-1.76562l-3.03485-6.16754,19.88251-17.001,5.69714,29.97729L77.2793,87.46741a2.00018,2.00018,0,0,0,2.0625,3.42767l16.33008-9.826,1.7998,5.43842a1.98012,1.98012,0,0,0,.23132.46332l-4.11511,13.82745L31.70746,82.39667Z" />
        </Icon>
      );

    default:
      return <h3>Icon Not Found</h3>;
  }
};

MyIcon.defaultProps = defaultProps;
export default MyIcon;
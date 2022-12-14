import { keyframes } from "styled-components";

export const heartBeat = keyframes`
    from {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: center center;
              transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
              transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
              transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
              transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
`

export const virate = keyframes`
        0% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
    10% {
      -webkit-transform: translate(-2px, -2px);
              transform: translate(-2px, -2px);
    }
    20% {
      -webkit-transform: translate(2px, -2px);
              transform: translate(2px, -2px);
    }
    30% {
      -webkit-transform: translate(-2px, 2px);
              transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(2px, 2px);
              transform: translate(2px, 2px);
    }
    50% {
      -webkit-transform: translate(-2px, -2px);
              transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, -2px);
              transform: translate(2px, -2px);
    }
    70% {
      -webkit-transform: translate(-2px, 2px);
              transform: translate(-2px, 2px);
    }
    80% {
      -webkit-transform: translate(-2px, -2px);
              transform: translate(-2px, -2px);
    }
    90% {
      -webkit-transform: translate(2px, -2px);
              transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
`
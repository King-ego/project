import styled from "styled-components";

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 9px solid #dbdcef;
    border-right-color: #474bff;
    animation: spinner-d3wgkg 1s infinite linear;

  @keyframes spinner-d3wgkg {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const Pulse = styled.div`
  width: 22.4px;
  height: 22.4px;
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 50%;
  background: #474bff;
  box-shadow: 0 0 0 0 rgba(71,75,255,0.5);
  animation: pulse-kefe91md 1.5s infinite linear;
  position: relative;


  &:before,
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 0 rgba(71,75,255,0.5);
    animation: inherit;
    animation-delay: -0.5s;
  }

  &:after {
    animation-delay: -1s;
  }

  @keyframes pulse-kefe91md {
    100% {
      box-shadow: 0 0 0 44.8px #0000;
    }
  }
`;

export const Blink = styled.div`
  width: 21.6px;
  height: 28.8px;
  --c: linear-gradient(#474bff  0 0);
  background: var(--c) 0%   50%,
  var(--c) 50%  50%,
  var(--c) 100% 50%;
  background-size: 4.3px 50%;
  background-repeat: no-repeat;
  animation: bars-7s9ul0mn 1.2s infinite linear alternate;


  @keyframes bars-7s9ul0mn {
    20% {
      background-size: 4.3px 20% ,4.3px 50% ,4.3px 50%;
    }

    40% {
      background-size: 4.3px 100%,4.3px 20% ,4.3px 50%;
    }

    60% {
      background-size: 4.3px 50% ,4.3px 100%,4.3px 20%;
    }

    80% {
      background-size: 4.3px 50% ,4.3px 50% ,4.3px 100%;
    }
  }
`

export const Dot = styled.div`
  width: 56px;
  height: 26.9px;
  background: radial-gradient(circle closest-side,#474bff 90%,#0000) 0%   50%,
  radial-gradient(circle closest-side,#474bff 90%,#0000) 50%  50%,
  radial-gradient(circle closest-side,#474bff 90%,#0000) 100% 50%;
  background-size: calc(100%/3) 13.4px;
  background-repeat: no-repeat;
  animation: dots-7ar3yq 1.2s infinite linear;

  @keyframes dots-7ar3yq {
    20% {
      background-position: 0%   0%, 50%  50%,100%  50%;
    }

    40% {
      background-position: 0% 100%, 50%   0%,100%  50%;
    }

    60% {
      background-position: 0%  50%, 50% 100%,100%   0%;
    }

    80% {
      background-position: 0%  50%, 50%  50%,100% 100%;
    }
  }
`;

export const ProgressClock = styled.div`
  position: relative;
  width: 38.4px;
  height: 38.4px;
  border-radius: 50%;
  border: 1.9px solid #474bff;
  box-sizing: content-box;


  &:before {
    content: "";
    position: absolute;
    width: 1.9px;
    height: 16.3px;
    top: 3.8px;
    left: 18.2px;
    background: #474bff;
    border-radius: 1px;
    transform-origin: 0.95px 15.8px;
    animation: progress-t59zy9 2.4s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    width: 1.9px;
    height: 10.6px;
    top: 9.6px;
    left: 18.2px;
    background: #474bff;
    border-radius: 1px;
    transform-origin: 0.95px 10.1px;
    animation: progress-t59zy9 14.399999999999999s linear infinite;
  }

  @keyframes progress-t59zy9 {
    0% {
      tranform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
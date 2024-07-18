import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const RoundedBox = styled(Box)`
  position: relative;
  border-radius: var(--chakra-radii-base);
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      180deg,
      #f95625 0%,
      rgba(249, 86, 37, 0.1) 100%
    );
    pointer-events: none;
    border-radius: 5px;
    padding: 1.5px;
    -webkit-mask: linear-gradient(#fff 0 100%) content-box,
      linear-gradient(#fff 0 100%);
    -webkit-mask-composite: xor;
  }
`;

import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 30 30" {...props} fill="currentColor">
    <path
      d="M9.53326 6.88842L17.5828 14.3182L9.53326 21.7486C9.43455 21.8398 9.35474 21.9494 9.29841 22.0714C9.24207 22.1933 9.2103 22.3251 9.20492 22.4594C9.19954 22.5936 9.22065 22.7276 9.26704 22.8536C9.31344 22.9797 9.3842 23.0954 9.47531 23.1941C9.56641 23.2928 9.67607 23.3726 9.79802 23.429C9.91996 23.4853 10.0518 23.5171 10.186 23.5224C10.3203 23.5278 10.4542 23.5067 10.5803 23.4603C10.7064 23.4139 10.822 23.3432 10.9208 23.2521L19.7844 15.0702C19.8882 14.9745 19.9711 14.8582 20.0277 14.7289C20.0844 14.5995 20.1136 14.4598 20.1136 14.3185C20.1136 14.1773 20.0844 14.0376 20.0277 13.9082C19.9711 13.7788 19.8882 13.6626 19.7844 13.5668L10.9208 5.38501C10.7214 5.20101 10.4571 5.10375 10.186 5.11462C9.91496 5.12549 9.6593 5.2436 9.47531 5.44296C9.29132 5.64233 9.19406 5.90662 9.20492 6.17769C9.21579 6.44877 9.3339 6.70442 9.53326 6.88842Z"
      fill="currentColor"
    />
  </ChakraIcon>
);

export default Icon;

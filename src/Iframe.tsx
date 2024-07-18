import { Box, useMediaQuery } from "@chakra-ui/react";

export default function Iframe({ children }: { children?: React.ReactNode }) {
  const [isPc] = useMediaQuery("(min-width: 576px)");
  const innerHeight = window.innerHeight - 50;
  const defaultHeight = 844;

  const height = innerHeight > defaultHeight ? defaultHeight : innerHeight;

  if (isPc) {
    return (
      <div
        style={{
          height: "100vh",
          background: "url(/images/iframe-bg.png) no-repeat center center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height,
            width: 428,
            overflowY: "auto",
            position: "relative",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <Box w="full" h="full" bg="#06060D" overflowY="auto" id="container">
            {children}
          </Box>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Box w="full" h="full" bg="#06060D" overflowY="auto" id="container">
        {children}
      </Box>
    </div>
  );
}

import { Box } from "@chakra-ui/react";
import { useQRCode } from "next-qrcode";

import { useLayoutContext } from "Layout";

export default function Qrcode() {
  const { userInfo } = useLayoutContext();
  const { Canvas } = useQRCode();

  return (
    <Box w="66px" h="66px">
      <Canvas
        text={`${window.location.host}/test-mini/home?ucode=${
          userInfo?.ucode || ""
        }`}
        options={{
          errorCorrectionLevel: "M",
          margin: 2,
          scale: 3,
          width: 66,
        }}
      />
    </Box>
  );
}

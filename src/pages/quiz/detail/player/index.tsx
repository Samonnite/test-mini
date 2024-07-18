import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" flex="1">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRight="1px solid #2F2F2F"
        boxShadow="none"
        color="#777885"
        lineHeight="14px"
        _checked={{
          bg: "#F95625",
          color: "white",
          borderColor: "#F95625",
        }}
        _focus={{
          boxShadow: "none",
        }}
        p={2.5}
        textAlign="center"
      >
        {props.children}
      </Box>
    </Box>
  );
}

function PlayerQuery() {
  const options = [
    { name: "上单" },
    { name: "打野" },
    { name: "中单" },
    { name: "ADC" },
    { name: "辅助" },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <HStack
        {...group}
        border="1px solid #2F2F2F"
        rounded="lg"
        overflow="hidden"
        mt="5"
        spacing="0"
      >
        {options.map((value) => {
          const radio = getRadioProps({ value: value.name });
          return (
            <RadioCard key={value.name} {...radio}>
              {value.name}
            </RadioCard>
          );
        })}
      </HStack>
    </>
  );
}

function PlayerCard() {
  return (
    <Grid
      bg="linear-gradient(
        to right,
        #3086E9 0%,
        #3086E9 49.8%,
        transparent 49.8%,
        transparent 50%,
        #EA4A4B 50%,
        #EA4A4B 100%
      )"
      rounded="xl"
      w="full"
      p="1.5"
      mt="4"
      templateColumns="repeat(2, 1fr)"
    >
      <GridItem color="white" display="flex" flexDirection="column">
        <Flex
          bg="#033A7A"
          rounded="20px"
          display="inline-flex"
          alignItems="center"
          overflow="hidden"
          fontWeight="bold"
          width="max-content"
        >
          <Image
            alt="funever"
            src="/images/default-logo.png"
            width="6"
            height="6"
            objectFit="contain"
            rounded="full"
          />
          <Box px="2.5">IG</Box>
        </Flex>
        <Box textAlign="center" pt="2.5">
          <CircularProgress
            value={30}
            color="white"
            thickness="8px"
            size="80px"
            trackColor="rgba(255, 255, 255, 0.5)"
            sx={{
              svg: {
                circle: {
                  r: "44",
                  strokeDashoffset: "-99",
                },
              },
            }}
          >
            <CircularProgressLabel
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="full"
            >
              <Image
                alt="funever"
                src="/images/default-logo.png"
                width="16"
                height="16"
                objectFit="contain"
                rounded="full"
              />
            </CircularProgressLabel>
          </CircularProgress>
          <Box fontSize="xs" pt="2.5" lineHeight="12px">
            RAPtorch
          </Box>
          <Flex
            alignItems="center"
            pt="4"
            justifyContent="center"
            lineHeight="14px"
          >
            胜率: 45%
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            pt="4"
            mx="7"
          >
            <Box>
              <Box fontSize="20px" lineHeight="20px" fontWeight="semibold">
                60
              </Box>
              <Box color="#F7CD9E" fontSize="md" pt="1" lineHeight="16px">
                WIN
              </Box>
            </Box>
            <Box>
              <Box fontSize="20px" lineHeight="20px" fontWeight="semibold">
                60
              </Box>
              <Box
                color="rgba(255, 255, 255, 0.5)"
                fontSize="md"
                pt="1"
                lineHeight="16px"
              >
                LOSE
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box fontSize="13px" lineHeight="13px" pt="6" pl="2">
          常用英雄（胜/负）
        </Box>
        <Flex
          mx="2.5"
          mr="4"
          fontSize="xs"
          alignItems="center"
          pt="3"
          lineHeight="12px"
          justifyContent="space-between"
        >
          <Box>
            <Image
              alt="funever"
              src="/images/default-logo.png"
              width="8"
              height="8"
              objectFit="contain"
              rounded="full"
            />
            <Flex
              pt="1.5"
              fontSize="11px"
              lineHeight="11px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>11</Text>/<Text color="rgba(255, 255, 255, 0.5)">32</Text>
            </Flex>
          </Box>
          <Box>
            <Image
              alt="funever"
              src="/images/default-logo.png"
              width="8"
              height="8"
              objectFit="contain"
              rounded="full"
            />
            <Flex
              pt="1.5"
              fontSize="11px"
              lineHeight="11px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>11</Text>/<Text color="rgba(255, 255, 255, 0.5)">32</Text>
            </Flex>
          </Box>
          <Box>
            <Image
              alt="funever"
              src="/images/default-logo.png"
              width="8"
              height="8"
              objectFit="contain"
              rounded="full"
            />
            <Flex
              pt="1.5"
              fontSize="11px"
              lineHeight="11px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>11</Text>/<Text color="rgba(255, 255, 255, 0.5)">32</Text>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        color="white"
        textAlign="right"
        display="flex"
        flexDirection="column"
      >
        <Flex
          bg="#A40F10"
          rounded="20px"
          display="inline-flex"
          alignItems="center"
          overflow="hidden"
          fontWeight="bold"
          width="max-content"
          alignSelf="flex-end"
        >
          <Box px="2.5">TL</Box>
          <Image
            alt="funever"
            src="/images/default-logo.png"
            width="6"
            height="6"
            objectFit="contain"
            rounded="full"
          />
        </Flex>
        <Box textAlign="center" pt="2.5">
          <CircularProgress
            value={30}
            color="white"
            thickness="8px"
            size="80px"
            trackColor="rgba(255, 255, 255, 0.5)"
            sx={{
              svg: {
                circle: {
                  r: "44",
                  strokeDashoffset: "-99",
                },
              },
            }}
          >
            <CircularProgressLabel
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="full"
            >
              <Image
                alt="funever"
                src="/images/default-logo.png"
                width="16"
                height="16"
                objectFit="contain"
                rounded="full"
              />
            </CircularProgressLabel>
          </CircularProgress>
          <Box fontSize="xs" pt="2.5" lineHeight="12px">
            RAPtorch
          </Box>
          <Flex
            alignItems="center"
            pt="4"
            justifyContent="center"
            lineHeight="14px"
          >
            胜率: 45%
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            pt="4"
            mx="7"
          >
            <Box>
              <Box fontSize="20px" lineHeight="20px" fontWeight="semibold">
                60
              </Box>
              <Box color="#F7CD9E" fontSize="md" pt="1" lineHeight="16px">
                WIN
              </Box>
            </Box>
            <Box>
              <Box fontSize="20px" lineHeight="20px" fontWeight="semibold">
                60
              </Box>
              <Box
                color="rgba(255, 255, 255, 0.5)"
                fontSize="md"
                pt="1"
                lineHeight="16px"
              >
                LOSE
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box fontSize="13px" lineHeight="13px" pt="6" pl="4" textAlign="left">
          常用英雄（胜/负）
        </Box>
        <Flex
          mx="2.5"
          ml="4"
          fontSize="xs"
          alignItems="center"
          pt="3"
          lineHeight="12px"
          justifyContent="space-between"
        >
          <Box>
            <Image
              alt="funever"
              src="/images/default-logo.png"
              width="8"
              height="8"
              objectFit="contain"
              rounded="full"
            />
            <Flex
              pt="1.5"
              fontSize="11px"
              lineHeight="11px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>11</Text>/<Text color="rgba(255, 255, 255, 0.5)">32</Text>
            </Flex>
          </Box>
          <Box>
            <Image
              alt="funever"
              src="/images/default-logo.png"
              width="8"
              height="8"
              objectFit="contain"
              rounded="full"
            />
            <Flex
              pt="1.5"
              fontSize="11px"
              lineHeight="11px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>11</Text>/<Text color="rgba(255, 255, 255, 0.5)">32</Text>
            </Flex>
          </Box>
          <Box>
            <Image
              alt="funever"
              src="/images/default-logo.png"
              width="8"
              height="8"
              objectFit="contain"
              rounded="full"
            />
            <Flex
              pt="1.5"
              fontSize="11px"
              lineHeight="11px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>11</Text>/<Text color="rgba(255, 255, 255, 0.5)">32</Text>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

function KdaPoint() {
  const aWidth = `${100 - Math.random() - 40}%`;
  const bWidth = `${100 - Math.random() - 10}%`;
  const cWidth = `${100 - Math.random() - 10}%`;
  return (
    <Box fontSize="xs" lineHeight="12px">
      <Flex alignItems="center">
        <Box color="#F95625" fontSize="13px" fontWeight="semibold" pr="3">
          KDA
        </Box>
        <Box color="#777885" fontSize="xs">
          Kill/Death/Assist
        </Box>
      </Flex>
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          fontSize="xs"
          pt="4"
          pb="1"
        >
          <Flex>
            <Box pr="4">IG</Box>
            <Box>2.3</Box>
          </Flex>
          <Box color="#777885">2.3/4.3/2.5</Box>
        </Flex>
        <Flex>
          {aWidth !== "0%" && (
            <Box
              w={aWidth}
              bg="#F95625"
              h="1.5"
              rounded="full"
              roundedRight="none"
              position="relative"
            ></Box>
          )}
          {bWidth !== "0%" && (
            <Box w={bWidth} bg="#A5A5A5" h="1.5" position="relative"></Box>
          )}
          {cWidth !== "0%" && (
            <Box
              w={cWidth}
              bg="#04B360"
              h="1.5"
              rounded="full"
              roundedStart="0"
              position="relative"
            ></Box>
          )}
        </Flex>
      </Box>
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          fontSize="xs"
          pt="4"
          pb="1"
        >
          <Flex>
            <Box pr="4">TL</Box>
            <Box>2.3</Box>
          </Flex>
          <Box color="#777885">2.3/4.3/2.5</Box>
        </Flex>
        <Flex>
          {aWidth !== "0%" && (
            <Box
              w={aWidth}
              bg="#F95625"
              h="1.5"
              rounded="full"
              roundedRight="none"
              position="relative"
            ></Box>
          )}
          {bWidth !== "0%" && (
            <Box w={bWidth} bg="#A5A5A5" h="1.5" position="relative"></Box>
          )}
          {cWidth !== "0%" && (
            <Box
              w={cWidth}
              bg="#04B360"
              h="1.5"
              rounded="full"
              roundedStart="0"
              position="relative"
            ></Box>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

function PointCompare() {
  const aWidth = `${Math.random() + 10}%`;
  const bWidth = `${100 - Math.random() - 10}%`;
  return (
    <Box fontSize="xs" lineHeight="12px" pt="6">
      <Box color="#F95625" fontSize="13px" fontWeight="semibold">
        分均输出
      </Box>
      <Flex justifyContent="center" pt="4" gap="3" direction="column">
        {aWidth !== "0%" && (
          <Box>
            <Box fontSize="xs" pb="1">
              329.2
            </Box>
            <Box
              bg="#3086E9"
              h="1.5"
              w={aWidth}
              rounded="full"
              position="relative"
            ></Box>
          </Box>
        )}
        {bWidth !== "0%" && (
          <Box>
            <Box fontSize="xs" pb="1">
              329.2
            </Box>
            <Box
              bg="#EA4A4B"
              h="1.5"
              w={bWidth}
              rounded="full"
              position="relative"
            ></Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

function PlayerDetail() {
  return (
    <Box>
      <Box
        fontSize="sm"
        lineHeight="14px"
        mt="6"
        position="relative"
        sx={{
          "&::before": {
            content: '" "',
            position: "absolute",
            left: 0,
            top: 0,
            width: "2px",
            height: "14px",
            bg: "#F95625",
          },
        }}
        px="5px"
      >
        详细数据
      </Box>
      <Box
        rounded="md"
        bg="#2F2F2F"
        overflow="hidden"
        position="relative"
        p="5"
        mt="3"
      >
        <KdaPoint />
        <PointCompare />
        <PointCompare />
        <PointCompare />
      </Box>
    </Box>
  );
}

export default function Player() {
  return (
    <Box color="white" pb="6">
      <PlayerQuery />
      <PlayerCard />
      <PlayerDetail />
    </Box>
  );
}

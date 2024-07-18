import {
  Box,
  Button,
  Center,
  Code,
  Flex,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCountDown } from "ahooks";
import dayjs from "dayjs";
import numeral from "numeral";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { apiGuessDelete } from "api";
import Confirm from "components/Confirm";
import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
  MoreIcon,
  RightIcon,
  Share2Icon,
  VSIcon,
} from "components/Icons";
import { RoundedBox } from "components/Styled";
import Share from "components/share";
import { useWalletMask } from "components/wallet";
import Transfer from "components/wallet/transfer";

const QuizCard = ({ item, share = true, isManage = false, onRefresh }: any) => {
  const { t } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();
  const { connected } = useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onOpen: onOpenWallet } = useWalletMask();
  const [teamId, setTeamId] = useState<number>(0);
  const {
    isOpen: isOpenShare,
    onOpen: onOpenShare,
    onClose: onCloseShare,
  } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const {
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
    isOpen: isOpenEdit,
  } = useDisclosure();

  const [countdown, formattedRes] = useCountDown({
    targetDate: Number(item?.dueTime),
  });
  const { days, hours, minutes, seconds } = formattedRes;

  const [ateamWidth, bteamWidth] = useMemo(() => {
    const all = item?.ateam?.teamAmount + item?.bteam?.teamAmount;
    if (!all) return ["50%", "50%"];
    return [
      `${(item?.bteam?.teamAmount / all) * 100}%`,
      `${(item?.ateam?.teamAmount / all) * 100}%`,
    ];
  }, [item]);

  const isEnd = useMemo(() => {
    return (
      item?.status === "settlement" ||
      item?.status === "completed" ||
      countdown === 0
    );
  }, [item, countdown]);

  const isDraw = useMemo(() => {
    return (
      (item?.status === "settlement" || item?.status === "completed") &&
      item?.ateam?.teamWin === item?.bteam?.teamWin
    );
  }, [item]);

  const [ateamColor, bteamColor] = useMemo(() => {
    return isEnd || isDraw
      ? ["#383838", "#383838"]
      : [
          "linear-gradient(180deg, #3086E9 0%, #1B4B83 100%)",
          "linear-gradient(2.93deg, #842A2A 2.53%, #EA4A4B 97.67%)",
        ];
  }, [isEnd, isDraw]);

  const pointText = useMemo(() => {
    if (
      item?.status === "completed" ||
      item?.status === "settlement" ||
      item?.ateam?.teamWin > 0 ||
      item?.bteam?.teamWin > 0
    ) {
      return `${item?.ateam?.teamWin} : ${item?.bteam?.teamWin}`;
    }
    return <VSIcon w="30px" h="20px" />;
  }, [item]);

  const handleTransform = (e: any, id: number) => {
    if (isManage || isEnd) return;
    e.preventDefault();
    if (connected) {
      setTeamId(id);
      onOpen();
    } else {
      onOpenWallet();
    }
  };

  const handleConfirm = async () => {
    await apiGuessDelete({ id: item?.id as any });
    toast({
      description: t("删除成功"),
      duration: 2000,
    });
    onRefresh();
  };

  const handleShare = (e: any) => {
    e.preventDefault();
    onOpenShare();
  };

  const handleUser = (e: any) => {
    e.preventDefault();
    navigate(`/quiz/user/${item?.id}`);
  };

  return (
    <RoundedBox
      mt="4"
      p="3"
      bg="rgba(255, 255, 255, 0.1)"
      sx={{
        "&:before": {
          display: isEnd ? "none" : "block",
        },
      }}
    >
      <Box
        bg="rgba(249, 86, 37, 0.2)"
        border="0.5px solid #F95625"
        borderTopLeftRadius="sm"
        borderBottomEndRadius="sm"
        fontSize="2xs"
        position="absolute"
        top="0"
        left="0"
        px="1.5"
        color="#F95625"
      >
        # {item?.id}
      </Box>
      {item?.join && (
        <CheckIcon boxSize="18px" position="absolute" top="-3px" right="4" />
      )}
      <Flex justifyContent="space-between" mb="3" pt="3" position="relative">
        <Flex>
          <Image
            width="6"
            height="6"
            src={item?.gameLogo}
            alt="game"
            rounded="full"
          />
          <Box color="white" fontSize="16" fontWeight="700" pl="2">
            {item?.game}
          </Box>
        </Flex>
        {isManage && (
          <Popover
            placement="bottom-end"
            isOpen={isOpenEdit}
            onOpen={onOpenEdit}
            onClose={onCloseEdit}
          >
            <PopoverTrigger>
              <Box cursor="pointer">
                <MoreIcon boxSize="6" />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              bg="#404040"
              borderColor="#404040"
              w="max-content"
              fontSize="xs"
              fontWeight="semibold"
            >
              <Flex
                h="10"
                alignItems="center"
                px="2.5"
                onClick={() => {
                  navigate(`/manage/edit/${item?.id}`);
                  onCloseEdit();
                }}
                cursor="pointer"
              >
                <EditIcon boxSize="6" mr="2.5" />
                <Text color="white" fontSize="sm">
                  {t("修改")}
                </Text>
              </Flex>
              {item?.ateam?.teamCount + item?.bteam?.teamCount === 0 ? (
                <Flex
                  h="10"
                  borderTop="1px solid #777885"
                  alignItems="center"
                  px="2.5"
                  onClick={() => {
                    onOpenDelete();
                    onCloseEdit();
                  }}
                  cursor="pointer"
                >
                  <DeleteIcon boxSize="6" mr="2.5" />
                  <Text color="#F95625" fontSize="sm">
                    {t("删除")}
                  </Text>
                </Flex>
              ) : (
                <></>
              )}
            </PopoverContent>
          </Popover>
        )}
        {share && (
          <Share2Icon
            boxSize="6"
            ml="3"
            onClick={(e) => handleShare(e)}
            cursor="pointer"
          />
        )}
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" pb="2">
        <Box fontWeight="semibold" color="white" fontSize="12px">
          {item?.contest}
        </Box>
      </Flex>
      <Box
        w="full"
        h="0.5px"
        bg="linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
      ></Box>
      <Center pt="3">
        <Code
          color={countdown > 0 ? "#EA4A4B" : "#A5A5A5"}
          bg="transparent"
          fontWeight="bold"
          fontSize="sm"
        >
          {days > 0 && (days > 9 ? `${days}d:` : `0${days}d:`)}
          {hours > 9 ? hours : `0${hours}`}h:
          {minutes > 9 ? minutes : `0${minutes}`}m:
          {seconds > 9 ? seconds : `0${seconds}`}s
        </Code>
      </Center>
      <Center color="#A5A5A5" fontSize="2xs" pb="1.5">
        {item?.dueTime
          ? dayjs(Number(item?.dueTime)).format("MM-DD HH:mm")
          : "--"}
      </Center>
      <Flex justifyContent="center" alignItems="center">
        <Image
          width="12"
          height="12"
          src={item?.ateam?.teamLogo}
          alt="ateam"
          rounded="full"
          fallbackSrc="/images/default-logo.png"
          bg="#000"
        />
        <Box
          color="white"
          fontSize={countdown > 0 ? "21px" : "sm"}
          fontWeight="semibold"
          px="10"
          fontStyle="italic"
        >
          {pointText}
        </Box>
        <Image
          width="12"
          height="12"
          src={item?.bteam?.teamLogo}
          alt="bteam"
          rounded="full"
          fallbackSrc="/images/default-logo.png"
          bg="#000"
        />
      </Flex>
      <Flex justifyContent="center" alignItems="center" pt="3" gap="5">
        <Button
          fontWeight="bold"
          fontStyle="italic"
          bg={ateamColor}
          flex="1"
          color="white"
          borderLeftRadius="base"
          pr="1"
          onClick={(e) => handleTransform(e, item?.ateam?.team)}
          border="1px solid rgba(255, 255, 255, 0.5)"
          borderRight="0"
          sx={{
            "&::after": {
              position: "absolute",
              content: "''",
              right: "-8px",
              width: "90%",
              height: "100%",
              borderRadius: "4px",
              transform: "skewX(-28deg)",
              background: ateamColor,
              zIndex: "0",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderLeft: 0,
              borderLeftRadius: 0,
            },
          }}
          _active={{
            bg: ateamColor,
            borderColor: "rgba(255, 255, 255, 0.5)",
          }}
          _hover={{
            bg: ateamColor,
            borderColor: "rgba(255, 255, 255, 0.5)",
          }}
          _focus={{
            bg: ateamColor,
            borderColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <Text
            position="relative"
            whiteSpace="wrap"
            noOfLines={2}
            px="1.5"
            zIndex="2"
            fontSize="15px"
            lineHeight="18px"
          >
            {item?.ateam?.teamName}
          </Text>
        </Button>
        <Button
          fontWeight="bold"
          fontStyle="italic"
          bg={bteamColor}
          colorScheme="red"
          flex="1"
          color="white"
          borderRightRadius="base"
          border="1px solid rgba(255, 255, 255, 0.5)"
          borderLeft="0"
          pl="1"
          sx={{
            "&::after": {
              position: "absolute",
              content: "''",
              left: "-8px",
              width: "90%",
              height: "100%",
              borderRadius: "4px",
              transform: "skewX(-28deg)",
              background: bteamColor,
              zIndex: "0",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRight: 0,
              borderRightRadius: 0,
            },
          }}
          _active={{
            bg: bteamColor,
            borderColor: "rgba(255, 255, 255, 0.5)",
          }}
          _hover={{
            bg: bteamColor,
            borderColor: "rgba(255, 255, 255, 0.5)",
          }}
          _focus={{
            bg: bteamColor,
            borderColor: "rgba(255, 255, 255, 0.5)",
          }}
          onClick={(e) => handleTransform(e, item?.bteam?.team)}
        >
          <Text
            position="relative"
            whiteSpace="wrap"
            noOfLines={2}
            px="1.5"
            zIndex="2"
            fontSize="15px"
            lineHeight="18px"
          >
            {item?.bteam?.teamName}
          </Text>
        </Button>
      </Flex>
      <Flex justifyContent="center" alignItems="center" pt="4" gap="2">
        {ateamWidth !== "0%" && (
          <Box
            bg={isDraw ? "#383838" : "#3086E9"}
            h="1"
            w={ateamWidth}
            rounded="full"
            position="relative"
            sx={{
              "&::after": {
                position: "absolute",
                content: "''",
                right: "-3px",
                width: "10px",
                height: "100%",
                borderRadius: "2px",
                borderStartRadius: bteamWidth !== "0%" ? "full" : "2px",
                transform: bteamWidth !== "0%" ? "skewX(-28deg)" : "unset",
                background: isDraw ? "#383838" : "#3086E9",
                zIndex: "0",
              },
            }}
          ></Box>
        )}
        {bteamWidth !== "0%" && (
          <Box
            bg={isDraw ? "#383838" : "#EA4A4B"}
            h="1"
            w={bteamWidth}
            rounded="full"
            position="relative"
            sx={{
              "&::after": {
                position: "absolute",
                content: "''",
                left: "-3px",
                width: "10px",
                height: "100%",
                borderRadius: "2px",
                borderEndRadius: ateamWidth !== "0%" ? "full" : "2px",
                transform: ateamWidth !== "0%" ? "skewX(-28deg)" : "unset",
                background: isDraw ? "#383838" : "#EA4A4B",
                zIndex: "0",
              },
            }}
          ></Box>
        )}
      </Flex>
      <Flex justifyContent="space-between" color="white" fontSize="10px" pt="1">
        <Box>
          {!isDraw && t("瓜分")}{" "}
          {numeral(item?.bteam?.teamAmount).format("0,0[.][000000]")}
        </Box>
        <Box>
          {!isDraw && t("瓜分")}{" "}
          {numeral(item?.ateam?.teamAmount).format("0,0[.][000000]")}
        </Box>
      </Flex>
      <Center
        color="#A5A5A5"
        fontSize="10px"
        onClick={handleUser}
        cursor="pointer"
      >
        {numeral(item?.ateam?.teamCount + item?.bteam?.teamCount).format("0,0")}{" "}
        {t("人参加，投注总额:")}{" "}
        <Image rounded="full" alt="coin" src={item?.coinLogo} boxSize="11px" />
        <Text
          color={isDraw ? "white" : "#F95625"}
          fontWeight="semibold"
          pl="1.5"
        >
          {numeral(item?.ateam?.teamAmount + item?.bteam?.teamAmount).format(
            "0,0[.][000000]"
          )}
        </Text>
        <RightIcon boxSize="3" ml="1.5" color="white" />
      </Center>
      {isOpen && (
        <Transfer
          isOpen={isOpen}
          onClose={onClose}
          team={teamId}
          gsid={item?.id}
          coin={item?.coin}
          coinMin={item?.coinMin}
          onSuccess={() => navigate("/mine/quiz")}
        />
      )}
      <Share isOpen={isOpenShare} onClose={onCloseShare} />
      <Confirm
        isOpen={isOpenDelete}
        content={
          <Box>
            <Box>{t("是否删除？")}</Box>
          </Box>
        }
        onClose={onCloseDelete}
        handleConfirm={handleConfirm}
      />
    </RoundedBox>
  );
};

export default QuizCard;

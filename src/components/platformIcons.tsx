import { HStack, Icon } from "@chakra-ui/react";
import {
  FaAndroid,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { IconType } from "react-icons";
import { Platform } from "../hook/usePlatforms";
interface Props {
  platforms: { platform: Platform }[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  ios: MdPhoneIphone,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  nintendo: SiNintendoswitch,
};

function PlatformIcons({ platforms }: Props) {
  if (!platforms) return;
  return (
    <HStack gap={"6px"}>
      {platforms.map(
        ({ platform }) =>
          iconMap[platform.slug] && (
            <Icon
              key={platform.id}
              as={iconMap[platform.slug]}
              color={"gray.400"}
              boxSize={5}
            />
          )
      )}
    </HStack>
  );
}

export default PlatformIcons;

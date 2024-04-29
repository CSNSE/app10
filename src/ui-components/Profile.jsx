/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Divider, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Profile(props) {
  const { prof, overrides, ...rest } = props;
  const myIconFourThreeFiveFiveOneOneFiveOnClick = useNavigateAction({
    type: "url",
    url: `${"/editprof/"}${prof?.id}`,
  });
  const vectorFourThreeFiveFiveOneOneSixOnClick = useNavigateAction({
    type: "url",
    url: `${"/editprof/"}${prof?.id}`,
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(70,45,180,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Profile")}
      {...rest}
    >
      <View
        width="314px"
        height="429px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <View
          width="226px"
          height="34px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="13px"
          left="139px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="800"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="24px"
            left="-52px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={prof?.username}
            {...getOverrideProps(overrides, "David Galotto")}
          ></Text>
        </View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="32px"
          left="271px"
          padding="0px 0px 0px 0px"
          onClick={() => {
            myIconFourThreeFiveFiveOneOneFiveOnClick();
          }}
          {...getOverrideProps(overrides, "MyIcon4355115")}
        >
          <Icon
            width="18px"
            height="18px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 18.002443313598633,
              height: 18.002443313598633,
            }}
            paths={[
              {
                d: "M0 14.2524L0 18.0024L3.75 18.0024L14.81 6.94244L11.06 3.19244L0 14.2524ZM17.71 2.63244L15.37 0.292444C15.2775 0.19974 15.1676 0.126193 15.0466 0.0760114C14.9257 0.02583 14.796 4.44089e-16 14.665 0C14.534 0 14.4043 0.02583 14.2834 0.0760114C14.1624 0.126193 14.0525 0.19974 13.96 0.292444L12.13 2.12244L15.88 5.87244L17.71 4.04244C17.8027 3.94993 17.8762 3.84004 17.9264 3.71907C17.9766 3.59809 18.0024 3.46841 18.0024 3.33744C18.0024 3.20648 17.9766 3.07679 17.9264 2.95582C17.8762 2.83485 17.8027 2.72496 17.71 2.63244L17.71 2.63244Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.49%"
            bottom="12.5%"
            left="12.5%"
            right="12.49%"
            onClick={() => {
              vectorFourThreeFiveFiveOneOneSixOnClick();
            }}
            {...getOverrideProps(overrides, "Vector4355116")}
          ></Icon>
        </View>
        <Icon
          width="41px"
          height="29px"
          viewBox={{ minX: 0, minY: 0, width: 41, height: 29 }}
          paths={[
            {
              d: "M14.35 18.125C9.553 18.125 0 20.5486 0 25.375L0 29L28.7 29L28.7 25.375C28.7 20.5486 19.147 18.125 14.35 18.125ZM4.797 24.8571C6.519 23.6557 10.6805 22.2679 14.35 22.2679C18.0195 22.2679 22.181 23.6557 23.903 24.8571L4.797 24.8571ZM14.35 14.5C18.3065 14.5 21.525 11.2479 21.525 7.25C21.525 3.25214 18.3065 0 14.35 0C10.3935 0 7.175 3.25214 7.175 7.25C7.175 11.2479 10.3935 14.5 14.35 14.5ZM14.35 4.14286C16.0515 4.14286 17.425 5.53071 17.425 7.25C17.425 8.96929 16.0515 10.3571 14.35 10.3571C12.6485 10.3571 11.275 8.96929 11.275 7.25C11.275 5.53071 12.6485 4.14286 14.35 4.14286ZM28.782 18.2493C31.16 19.9893 32.8 22.3093 32.8 25.375L32.8 29L41 29L41 25.375C41 21.1907 33.825 18.8086 28.782 18.2493ZM26.65 14.5C30.6065 14.5 33.825 11.2479 33.825 7.25C33.825 3.25214 30.6065 0 26.65 0C25.543 0 24.518 0.269286 23.575 0.725C24.8665 2.56857 25.625 4.82643 25.625 7.25C25.625 9.67357 24.8665 11.9314 23.575 13.775C24.518 14.2307 25.543 14.5 26.65 14.5Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="181px"
          left="10px"
          {...getOverrideProps(overrides, "Vector42451564")}
        ></Icon>
        <View
          width="187px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="172px"
          left="66px"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="119px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 15px - 0px)"
            left="16px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Friends"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
        </View>
        <Flex
          gap="0"
          direction="column"
          width="157px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="270px"
          left="79px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InputGroup")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="127px"
            height="32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 2")}
          >
            <Image
              width="32px"
              height="32px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="160px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "image425486")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="21px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="5px"
              left="40px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="James Joyce"
              {...getOverrideProps(overrides, "James Joyce425488")}
            ></Text>
          </Flex>
        </Flex>
        <Divider
          width="262px"
          height="46px"
          position="absolute"
          top="347px"
          left="26px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <View
          padding="0px 0px 0px 0px"
          width="127px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="232px"
          left="79px"
          {...getOverrideProps(overrides, "Group 1")}
        >
          <Image
            width="32px"
            height="32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image425475")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="5px"
            left="40px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="James Joyce"
            {...getOverrideProps(overrides, "James Joyce425476")}
          ></Text>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="302px"
          height="31px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="107px"
          left="9px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Email: "}${prof?.email}`}
          {...getOverrideProps(
            overrides,
            "Email: dgalotto2024@communityschoolanples.org"
          )}
        ></Text>
              <a
  href = "/friends"
  style={{
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    lineHeight: "21px",
    textAlign: "left",
    display: "block",
    position: "absolute",
    top: "317px",
    left: "79px",
    padding: "0px",
    textDecoration: "none", // Removes underline from links
    cursor: "pointer", // Changes cursor to pointer on hover
  }}
          {...getOverrideProps(overrides, "SHOW MORE")}
>
  SHOW MORE
</a>
        <View
          width="39px"
          height="17px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="319px"
          left="167px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MyIcon4312106")}
        >
          <Icon
            width="26px"
            height="11.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 26.000001907348633,
              height: 11.333333015441895,
            }}
            paths={[
              {
                d: "M13 0L10.7088 0.99875L19.7763 4.95833L0 4.95833L0 6.375L19.7763 6.375L10.7088 10.3346L13 11.3333L26 5.66667L13 0Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.67%"
            bottom="16.67%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector4312107")}
          ></Icon>
        </View>
        <Image
          width="60px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="17px"
          left="9px"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={prof?.profPic}
          {...getOverrideProps(overrides, "image4346157")}
        ></Image>
      </View>
    </Flex>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth, useNavigateAction } from "./utils";
import { Divider, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const { pref, profile, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const userProfileOnClick = useNavigateAction({
    type: "url",
    url: `${"/prof/"}${profile?.id}`,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="421px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(70,45,180,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomePage")}
      {...rest}
    >
      <View
        width="unset"
        height="357px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="272px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="24px"
          left="24px"
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
            width="278px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Welcome to YUM "}${authAttributes["email"]}`}
            {...getOverrideProps(overrides, "Welcome to YUM dgalotto2024!")}
          ></Text>
        </Flex>
        <Divider
          width="272px"
          height="24px"
          position="absolute"
          top="148px"
          left="24px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider419387")}
        ></Divider>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="188px"
          left="173px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Icon
            width="24px"
            height="24px"
            viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
            paths={[]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector42711957")}
          ></Icon>
          <Icon
            width="18px"
            height="15px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 15 }}
            paths={[
              {
                d: "M7 4L7 0L0 7L7 14L7 9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20.83%"
            bottom="16.67%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector42711958")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="188px"
          left="24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User Preferences"
          {...getOverrideProps(overrides, "User Preferences")}
        ></Text>
        <Divider
          width="272px"
          height="1px"
          position="absolute"
          top="340px"
          left="24px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider419390")}
        ></Divider>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="241px"
          left="24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User Profile"
          onClick={() => {
            userProfileOnClick();
          }}
          {...getOverrideProps(overrides, "User Profile")}
        ></Text>
        <View
          width="24px"
          height="27.03px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="67.23%"
          bottom="25.2%"
          left="54.37%"
          right="38.13%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Button Icon")}
        >
          <Icon
            width="22px"
            height="16.89px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 22,
              height: 16.892744064331055,
            }}
            paths={[
              {
                d: "M11 2.25237C14.79 2.25237 18.17 4.65114 19.82 8.44637C18.17 12.2416 14.79 14.6404 11 14.6404C7.21 14.6404 3.83 12.2416 2.18 8.44637C3.83 4.65114 7.21 2.25237 11 2.25237ZM11 0C6 0 1.73 3.50243 0 8.44637C1.73 13.3903 6 16.8927 11 16.8927C16 16.8927 20.27 13.3903 22 8.44637C20.27 3.50243 16 0 11 0ZM11 5.63091C12.38 5.63091 13.5 6.89224 13.5 8.44637C13.5 10.0005 12.38 11.2618 11 11.2618C9.62 11.2618 8.5 10.0005 8.5 8.44637C8.5 6.89224 9.62 5.63091 11 5.63091ZM11 3.37855C8.52 3.37855 6.5 5.65344 6.5 8.44637C6.5 11.2393 8.52 13.5142 11 13.5142C13.48 13.5142 15.5 11.2393 15.5 8.44637C15.5 5.65344 13.48 3.37855 11 3.37855Z",
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
            bottom="20.83%"
            left="4.17%"
            right="4.17%"
            {...getOverrideProps(overrides, "Vector42711960")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="295px"
          left="24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Food Generator"
          {...getOverrideProps(overrides, "Food Generator")}
        ></Text>
        <View
          width="22.08px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="295px"
          left="176px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
        >
          <Icon
            width="16.09px"
            height="17.49px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.09079933166504,
              height: 17.489999771118164,
            }}
            paths={[
              {
                d: "M11.5 11L10.7732 11L10.5156 10.73C11.4172 9.59 11.96 8.11 11.96 6.5C11.96 2.91 9.2828 0 5.98 0C2.6772 0 0 2.91 0 6.5C0 10.09 2.6772 13 5.98 13C7.4612 13 8.8228 12.41 9.8716 11.43L10.12 11.71L10.12 12.5L14.72 17.49L16.0908 16L11.5 11L11.5 11ZM5.98 11C3.6892 11 1.84 8.99 1.84 6.5C1.84 4.01 3.6892 2 5.98 2C8.2708 2 10.12 4.01 10.12 6.5C10.12 8.99 8.2708 11 5.98 11Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="14.63%"
            left="12.5%"
            right="14.63%"
            {...getOverrideProps(overrides, "Vector42711962")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="800"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="270px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="87px"
          left="25px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Yum is your one stop shop to find the best food that you and all your friends want!"
          {...getOverrideProps(
            overrides,
            "Yum is your one stop shop to find the best food that you and all your friends want!"
          )}
        ></Text>
      </View>
    </Flex>
  );
}

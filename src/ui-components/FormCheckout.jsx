/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Image,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function FormCheckout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      width="1160px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FormCheckout")}
    >
      <Flex
        gap="0"
        width="100%"
        alignItems="flex-start"
        grow="1"
        height="1150px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="100%"
          justifyContent="center"
          alignItems="center"
          grow="1"
          height="1086px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 31329767006")}
        >
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Info"
              {...getOverrideProps(overrides, "Info")}
            ></Text>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Label"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29767009")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Label"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29767010")}
            ></TextField>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767011")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Shipping"
              {...getOverrideProps(overrides, "Shipping29767013")}
            ></Text>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Label"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29767014")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Label"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29767015")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Label"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29792893")}
            ></TextField>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767022")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 31329767023")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Card info"
              {...getOverrideProps(overrides, "Card info")}
            ></Text>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Label"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29767025")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Label"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29767026")}
            ></TextField>
            <Flex
              gap="24px"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 410")}
            >
              <SelectField
                display="flex"
                direction="column"
                width="100%"
                justifyContent="center"
                grow="1"
                height="88px"
                position="relative"
                padding="0px 0px 0px 0px"
                label="Label"
                placeholder="Placeholder"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField29767028")}
              ></SelectField>
              <SelectField
                display="flex"
                direction="column"
                width="100%"
                justifyContent="center"
                grow="1"
                height="88px"
                position="relative"
                padding="0px 0px 0px 0px"
                label="Label"
                placeholder="Placeholder"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField29767029")}
              ></SelectField>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="933px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 412")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="469px"
          height="869px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 320")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="137.5px"
            position="absolute"
            top="194px"
            left="32px"
            {...getOverrideProps(overrides, "Group 314")}
          >
            <Image
              position="absolute"
              top="0%"
              bottom="5.45%"
              height="94.55%"
              left="0%"
              right="78.02%"
              width="21.98%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "image29767033")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="81.45%"
              bottom="1.09%"
              left="29.88%"
              right="39.51%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Order Summary"
              {...getOverrideProps(overrides, "Order Summary29767034")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="23.27%"
              bottom="59.27%"
              left="29.88%"
              right="59.75%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Black"
              {...getOverrideProps(overrides, "Black29767035")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="82.55%"
              left="29.88%"
              right="51.85%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Basic Tee"
              {...getOverrideProps(overrides, "Basic Tee29767036")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="46.55%"
              bottom="36%"
              left="29.88%"
              right="59.26%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Large"
              {...getOverrideProps(overrides, "Large29767037")}
            ></Text>
            <MyIcon
              position="absolute"
              top="0%"
              bottom="82.55%"
              left="94.07%"
              right="0%"
              overflow="hidden"
              padding="0px 0px 0px 0px"
              type="delete"
              {...getOverrideProps(overrides, "MyIcon29767038")}
            ></MyIcon>
            <SelectField
              display="flex"
              gap="8px"
              position="absolute"
              top="73.09%"
              bottom="0%"
              left="84.2%"
              right="0%"
              direction="column"
              width="64px"
              justifyContent="center"
              padding="0px 0px 0px 0px"
              placeholder=""
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "SelectField29767039")}
            ></SelectField>
          </View>
          <Divider
            position="absolute"
            top="41.66%"
            bottom="58.23%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767040")}
          ></Divider>
          <Divider
            position="absolute"
            top="18.53%"
            bottom="81.36%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767041")}
          ></Divider>
          <Divider
            position="absolute"
            top="8.29%"
            bottom="91.6%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767042")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="137.5px"
            position="absolute"
            top="395px"
            left="32px"
            {...getOverrideProps(overrides, "Group 315")}
          >
            <Image
              position="absolute"
              top="0%"
              bottom="5.45%"
              height="94.55%"
              left="0%"
              right="78.02%"
              width="21.98%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "image29767044")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="81.45%"
              bottom="1.09%"
              left="29.88%"
              right="39.51%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Order Summary"
              {...getOverrideProps(overrides, "Order Summary29767045")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="23.27%"
              bottom="59.27%"
              left="29.88%"
              right="59.75%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Black"
              {...getOverrideProps(overrides, "Black29767046")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="82.55%"
              left="29.88%"
              right="51.85%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Basic Tee"
              {...getOverrideProps(overrides, "Basic Tee29767047")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="46.55%"
              bottom="36%"
              left="29.88%"
              right="59.26%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Large"
              {...getOverrideProps(overrides, "Large29767048")}
            ></Text>
            <MyIcon
              position="absolute"
              top="0%"
              bottom="82.55%"
              left="94.07%"
              right="0%"
              overflow="hidden"
              padding="0px 0px 0px 0px"
              type="delete"
              {...getOverrideProps(overrides, "MyIcon29767049")}
            ></MyIcon>
            <SelectField
              display="flex"
              gap="8px"
              position="absolute"
              top="73.09%"
              bottom="0%"
              left="84.2%"
              right="0%"
              direction="column"
              width="64px"
              justifyContent="center"
              padding="0px 0px 0px 0px"
              placeholder=""
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "SelectField29767050")}
            ></SelectField>
          </View>
          <Divider
            position="absolute"
            top="64.79%"
            bottom="35.1%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767051")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="596px"
            left="32px"
            {...getOverrideProps(overrides, "Group 316")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="80.8%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Subtotal"
              {...getOverrideProps(overrides, "Subtotal")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="83.95%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$320.00"
              {...getOverrideProps(overrides, "$320.00")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="636px"
            left="32px"
            {...getOverrideProps(overrides, "Group 317")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="80.21%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Shipping"
              {...getOverrideProps(overrides, "Shipping29767056")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="87.16%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$15.00"
              {...getOverrideProps(overrides, "$15.00")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="676px"
            left="32px"
            {...getOverrideProps(overrides, "Group 318")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="86.71%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Taxes"
              {...getOverrideProps(overrides, "Taxes")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="86.42%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$26.80"
              {...getOverrideProps(overrides, "$26.80")}
            ></Text>
          </View>
          <Divider
            position="absolute"
            top="82.39%"
            bottom="17.49%"
            left="6.82%"
            right="6.82%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767061")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="733px"
            left="32px"
            {...getOverrideProps(overrides, "Group 319")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="87.6%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Total"
              {...getOverrideProps(overrides, "Total")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0%"
              bottom="0%"
              left="83.95%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$361.80"
              {...getOverrideProps(overrides, "$361.80")}
            ></Text>
          </View>
          <Divider
            position="absolute"
            top="90.79%"
            bottom="9.09%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider29767065")}
          ></Divider>
          <Button
            display="flex"
            gap="0"
            position="absolute"
            top="94.71%"
            bottom="0%"
            left="6.82%"
            right="6.82%"
            width="405px"
            justifyContent="center"
            alignItems="center"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Place Order"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="105px"
            left="32px"
            {...getOverrideProps(overrides, "Group 313")}
          >
            <MyIcon
              width="24px"
              height="24px"
              position="absolute"
              top="0px"
              left="0px"
              overflow="hidden"
              padding="0px 0px 0px 0px"
              type="shopping_bag"
              {...getOverrideProps(overrides, "MyIcon29767068")}
            ></MyIcon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0%"
              bottom="16.67%"
              left="9.88%"
              right="74.57%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Cart (2)"
              {...getOverrideProps(overrides, "Cart (2)")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0%"
              bottom="16.67%"
              left="84.44%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$101.70"
              {...getOverrideProps(overrides, "$101.70")}
            ></Text>
          </View>
          <Badge
            display="flex"
            gap="10px"
            position="absolute"
            top="0px"
            left="32px"
            width="405px"
            justifyContent="flex-start"
            alignItems="center"
            borderRadius="99px"
            padding="8px 12px 8px 12px"
            color="rgba(54,94,61,1)"
            fontFamily="Inter"
            fontWeight="700"
            fontSize="14px"
            textAlign="left"
            lineHeight="14px"
            direction="column"
            size="default"
            variation="success"
            children="Discount - 10% off"
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
        </Flex>
      </Flex>
    </Flex>
  );
}

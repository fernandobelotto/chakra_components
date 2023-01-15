import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
  Box,
  VStack,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function RangeSliderControlled() {
  const [upper, setUpper] = useState(100);
  const [lower, setLower] = useState(0);

  function handleValueChange([lower, upper]) {
    setUpper(upper);
    setLower(lower);
  }
  function handleValueFromInputUpper(value) {
    if (value > lower) {
      setUpper(value);
    }
  }

  function handleValueFromInputLower(value) {
    if (value < upper) {
      setLower(value);
    }
  }

  return (
    <>
      <VStack spacing={5}>
        <HStack spacing={5}>
          <NumberInput
            value={lower}
            onChange={handleValueFromInputLower}
            max={100}
            min={0}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput
            value={upper}
            onChange={handleValueFromInputUpper}
            max={100}
            min={0}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <Box w={320}>
          <RangeSlider
            value={[lower, upper]}
            aria-label={["min", "max"]}
            defaultValue={[10, 30]}
            onChange={handleValueChange}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box>
      </VStack>
    </>
  );
}

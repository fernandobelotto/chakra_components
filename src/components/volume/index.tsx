import {
  Button,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
  BsFillVolumeOffFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";

export function Volume() {
  const [sliderValue, setSliderValue] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  function getIconBySliderValue(sliderValue: number) {
    if (isMuted) {
      return <BsFillVolumeMuteFill size={24} />;
    }
    if (sliderValue === 0) {
      return <BsFillVolumeOffFill size={24} />;
    }
    if (sliderValue >= 90) {
      return <BsFillVolumeUpFill size={24} />;
    }
    return <BsFillVolumeDownFill size={24} />;
  }

  function handleOnChangeSlider(value) {
    if (isMuted && value > 0) {
      setIsMuted(false);
    }
    setSliderValue(value);
  }

  function handleMuted() {
    setIsMuted(!isMuted);
    setSliderValue(0);
  }

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="volume-button"
            icon={getIconBySliderValue(sliderValue)}
          />
        </PopoverTrigger>
        <PopoverContent w="40px">
          <PopoverBody>
            <Slider
              aria-label="volume-slider"
              defaultValue={0}
              orientation="vertical"
              minH="32"
              value={sliderValue}
              onChange={handleOnChangeSlider}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb bg={"gray.300"} />
            </Slider>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Button ml={2} onClick={handleMuted}>
        Mute
      </Button>
    </>
  );
}

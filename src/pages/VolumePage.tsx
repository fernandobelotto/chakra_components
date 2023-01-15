import { Box, Heading, Text } from "@chakra-ui/react";
import CodeBlock from "../components/codeblock/codeblock";
import { Volume } from "../components/volume";

export const VolumePage = () => {
  return (
    <>
      <Heading>Volume</Heading>
      <Box p={5} border="1px solid" rounded="lg" borderColor="gray.300">
        <Volume />
      </Box>
      <CodeBlock>
        <Text>{volume}</Text>
      </CodeBlock>
    </>
  );
};

var volume = `
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
        <Button m="10" onClick={handleMuted}>
          Mute
        </Button>
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
      </>
    );
  }

`;

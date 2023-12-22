import { Block, Text, Input } from "../components";
import { useTheme } from "../hooks";

export default function Info() {
  const { colors, sizes } = useTheme();

  return (
    <Block margin={0}>
      <Text h5 semibold>Welcome to the Info Page</Text>
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input placeholder="Ask anything about react" />
      </Block>
    </Block>
  );
}

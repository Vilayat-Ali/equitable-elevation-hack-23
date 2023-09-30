// lib
import { type ChangeEvent } from "react";
import { HStack, Input, Button, Icon } from "@chakra-ui/react";

// hooks
import useToggle from "../../hooks/useToggle";

// icons
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type Props = {
  name: string;
  placeholder: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ConfidentialInput = ({ name, placeholder, value, setValue }: Props) => {
  const [showPassword, togglePasswordVisibility] = useToggle(false);

  return (
    <HStack spacing="1">
      <Input
        color="#9B6ADE"
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={(e) => setValue(e)}
        placeholder={placeholder}
      />
      <Button onClick={togglePasswordVisibility}>
        <Icon as={showPassword ? AiFillEye : AiFillEyeInvisible} />
      </Button>
    </HStack>
  );
};

export default ConfidentialInput;

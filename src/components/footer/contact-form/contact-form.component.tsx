import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Link,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillGithub,
} from "react-icons/ai";

export interface IContactFormProps {}
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/73fa7cf0-1afc-11ed-9d73-8fc992e1fd24";
const MEDIUM_URL = "https://ullal-aaron.medium.com/";
const LINKEDIN_URL = "https://www.linkedin.com/in/aaron-ullal/";
const GITHUB_URL = "https://github.com/ullalaaron";
export function ContactForm(props: IContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: (e.currentTarget.elements.namedItem("email") as any)?.value,
      text: (e.currentTarget.elements.namedItem("text") as any)?.value,
    };

    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status !== 200) {
      setSubmitted(true);
      setStatus(response.statusText);
      throw new Error(response.statusText);
    }
    setSubmitted(true);
    setStatus("Thank you! We'll get in touch soon");
  };

  if (submitted) {
    return (
      <Box color="yellow">
        <h2>{status}</h2>
      </Box>
    );
  }

  return (
    <Box maxW="40rem" paddingY={{ base: "3rem", md: 0 }} margin="0 auto">
      <HStack marginBottom="1rem">
        <Link
          as={Button}
          w="33%"
          colorScheme="medium"
          leftIcon={<AiFillLinkedin />}
          onClick={() => window.open(LINKEDIN_URL, "_blank")}
        >
          LinkedIn
        </Link>
        <Link
          as={Button}
          w="33%"
          colorScheme="medium"
          leftIcon={<AiFillMediumCircle />}
          onClick={() => window.open(MEDIUM_URL, "_blank")}
        >
          Medium
        </Link>
        <Link
          as={Button}
          w="33%"
          colorScheme="medium"
          leftIcon={<AiFillGithub />}
          onClick={() => window.open(GITHUB_URL, "_blank")}
        >
          GitHub
        </Link>
      </HStack>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        color="yellow"
      >
        <FormControl marginBottom="0.5rem">
          <Input
            color="yellow"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </FormControl>
        <FormControl>
          <Textarea
            name="text"
            color="yellow"
            placeholder="Your message.."
            size="sm"
            borderRadius="0.5rem"
            required
            fontSize="1rem"
          />
        </FormControl>
        <Button width="full" mt={4} type="submit">
          SEND MESSAGE
        </Button>
      </form>
    </Box>
  );
}

import { Box, Button, Container, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container size="2" py="9" px={{ initial: "4", sm: "0" }}>
      <Box style={{ textAlign: "center" }} py="9">
        <Heading size="9" weight="bold" mb="3">
          404
        </Heading>
        <Text size="4" color="gray" as="p" mb="6">
          找不到您要的頁面!!!!
        </Text>
        <Button asChild size="3" variant="outline" className="not-found-home-btn">
          <Link href="/">回到首頁</Link>
        </Button>
      </Box>
    </Container>
  );
}

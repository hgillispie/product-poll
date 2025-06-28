import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { Box, Spinner, Center } from "@chakra-ui/react";

const Home: NextPage = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    router.replace("/ideas");
  }, [router]);

  // Show loading spinner only after mount to avoid hydration mismatch
  if (!mounted) {
    return <Box h="100vh" />; // Empty box during SSR
  }

  return (
    <Center h="100vh">
      <Spinner size="xl" color="brand.500" />
    </Center>
  );
};

export default Home;

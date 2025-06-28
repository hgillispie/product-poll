import { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to ideas page on load
    router.replace("/ideas");
  }, [router]);

  return null;
};

export default Home;

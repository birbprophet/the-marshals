import { useRouter } from "next/router";
import { useEffect } from "react";
import Meta from "@/components/layout/Meta";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/notion");
  }, [router]);
  return (
    <Meta
      title="The Marshals - Notion - From Head to Toe"
      description="Learn how Notion will empower you to improve your personal and professional lifestyle"
    />
  );
}

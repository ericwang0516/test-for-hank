"use client";

import dynamic from "next/dynamic";
import { Text } from "@radix-ui/themes";

const ThreeBox = dynamic(() => import("./ThreeBox"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Text size="2" color="gray">載入 3D 場景中...</Text>
    </div>
  ),
});

export default function ThreeBoxWrapper() {
  return <ThreeBox />;
}

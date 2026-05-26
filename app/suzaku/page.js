import { Box, Container, Grid, Heading, Text, Section, Separator } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import ThreeBoxWrapper from "../components/ThreeBoxWrapper";

export default function SuzakuPage() {
  return (
    <Container size="2" py="9" px={{ initial: "4", sm: "0" }}>
      <Box mb="6">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Text size="2" color="gray" className="back-link" style={{ cursor: "pointer" }}>
            ← 返回作品集
          </Text>
        </Link>
      </Box>

      <Section size="1">
        <Box mb="2">
          <Text size="1" weight="medium" color="gray">
            3D 作品展示
          </Text>
        </Box>
        <Heading size="8" mb="3" weight="bold" className="suzaku-title">
          雪上摩托車 - Suzaku
        </Heading>
        <Text size="4" color="gray" as="p" mb="6" className="suzaku-subtitle" style={{ maxWidth: 520 }}>
          使用滑鼠拖曳旋轉模型，滾輪縮放大小，從各個角度觀察 3D 作品細節。
        </Text>
      </Section>

      <Separator size="4" mb="6" />

      <Box
        className="three-wrapper"
        style={{
          width: "100%",
          height: 450,
          borderRadius: "var(--radius-3)",
          border: "1px solid var(--gray-a5)",
          overflow: "hidden",
          background: "var(--gray-a2)",
        }}
      >
        <ThreeBoxWrapper />
      </Box>

      <Section size="1" mt="6">
        <Heading size="4" mb="2" className="section-title">
          關於此作品
        </Heading>
        <Text size="3" color="gray" as="p" className="suzaku-body" style={{ maxWidth: 520 }}>
          本設計以「Audi × Oakley」跨領域聯名為核心概念，結合 Audi 精密科技與 Oakley 極限運動文化，打造一款面向未來雪地移動體驗的高性能雪上摩托車。作品不僅著重於速度與操控，更重新思考未來極地載具在視覺語言、使用情境與品牌價值上的可能性。
        </Text>
        <Text size="3" color="gray" as="p" mt="4" className="suzaku-body" style={{ maxWidth: 520 }}>
          外觀造型以低趴流線車體為基礎，透過大量銳利切線與幾何面構成，呈現 Audi 一貫的科技性能風格；同時融入 Oakley 護目鏡般的包覆曲面與運動裝備語彙，營造出具有未來感的極限移動形象。車頭燈條與進氣造型則強化高速穿梭於雪地中的侵略性與辨識度。
        </Text>
        <Text size="3" color="gray" as="p" mt="4" className="suzaku-body" style={{ maxWidth: 520 }}>
          材質方面，採用金屬紅烤漆搭配消光黑與碳纖維紋理，透過不同材質反射層次，展現精品級載具的細膩質感。內裝與騎乘介面則以極簡設計為核心，降低多餘干擾，使騎乘者能更專注於速度、地形與環境變化，創造更純粹的操駕體驗。
        </Text>
        <Text size="3" color="gray" as="p" mt="4" className="suzaku-body" style={{ maxWidth: 520 }}>
          本作品希望透過跨品牌合作的方式，探討未來載具不再只是交通工具，而是一種結合科技、文化與生活風格的移動裝備。藉由 Audi 的科技形象與 Oakley 的運動精神，重新定義雪地載具在未來極端環境中的角色與價值。
        </Text>
      </Section>

      <Separator size="4" mt="6" mb="6" />

      <Section size="1">
        <Heading size="4" mb="4" className="section-title">
          作品照片
        </Heading>
        <Grid columns="2" gap="4" className="photo-grid">
          <Box
            style={{
              borderRadius: "var(--radius-3)",
              border: "1px solid var(--gray-a5)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/imgs/72816339-F823-4FDF-B4BE-1B9A0E8BD615_0.png"
              alt="作品照片 1"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
          <Box
            style={{
              borderRadius: "var(--radius-3)",
              border: "1px solid var(--gray-a5)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/imgs/BEC6CA43-0EE5-401D-8385-3D8063F94084_0.png"
              alt="作品照片 2"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Grid>
      </Section>

      <Box mt="9" py="4">
        <Text size="1" color="gray">
          Hank 3D project display
        </Text>
      </Box>
    </Container>
  );
}

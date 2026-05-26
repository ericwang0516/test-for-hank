import { Box, Container, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: "suzaku", image: "/imgs/72816339-F823-4FDF-B4BE-1B9A0E8BD615_0.png", active: true, height: 360 },
  { id: null, image: null, active: false, height: 260 },
  { id: null, image: null, active: false, height: 320 },
  { id: null, image: null, active: false, height: 280 },
  { id: null, image: null, active: false, height: 340 },
  { id: null, image: null, active: false, height: 240 },
  { id: null, image: null, active: false, height: 300 },
  { id: null, image: null, active: false, height: 260 },
  { id: null, image: null, active: false, height: 350 },
];

function ProjectCard({ project }) {
  const card = (
    <Box
      style={{
        height: project.height,
        borderRadius: "var(--radius-3)",
        overflow: "hidden",
        marginBottom: 16,
        cursor: project.active ? "pointer" : "default",
        transition: "opacity 0.3s, transform 0.3s",
        breakInside: "avoid",
        background: project.active ? "none" : "var(--gray-a3)",
        position: "relative",
      }}
      className={project.active ? "masonry-card-active" : ""}
    >
      {project.active && project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      ) : null}
    </Box>
  );

  if (project.active && project.id) {
    return (
      <Link href={`/${project.id}`} style={{ textDecoration: "none", display: "block" }}>
        {card}
      </Link>
    );
  }

  return card;
}

export default function Home() {
  return (
    <Container size="3" py="9">
      <Box style={{ textAlign: "center" }} mb="9">
        <Heading size="9" weight="bold">
          Hank 作品集
        </Heading>
      </Box>

      <Box className="masonry-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </Box>

      <Box mt="9" py="4" style={{ textAlign: "center" }}>
        <Text size="1" color="gray">
          Hank 3D project display
        </Text>
      </Box>
    </Container>
  );
}

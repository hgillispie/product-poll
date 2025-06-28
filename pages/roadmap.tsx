import {
  Badge,
  Box,
  Card,
  CardBody,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "@/header";
import { ChatIcon, ChevronUpIcon } from "@chakra-ui/icons";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: "PLANNED" | "IN_PROGRESS" | "COMPLETED";
  tags: string[];
  votes: number;
  comments: number;
  progress?: number; // Only for IN_PROGRESS items
  quarter?: string; // Target quarter for completion
}

// Mock roadmap data
const roadmapItems: RoadmapItem[] = [
  // PLANNED
  {
    id: "1",
    title: "Advanced A/B Testing Suite",
    description:
      "Comprehensive A/B testing framework with statistical significance tracking and advanced targeting rules.",
    status: "PLANNED",
    tags: ["analytics", "testing", "optimization"],
    votes: 156,
    comments: 34,
    quarter: "Q2 2024",
  },
  {
    id: "2",
    title: "Mobile App Content Management",
    description:
      "Native mobile app for content creators to manage and publish content on the go.",
    status: "PLANNED",
    tags: ["mobile", "content", "cms"],
    votes: 89,
    comments: 22,
    quarter: "Q3 2024",
  },
  {
    id: "3",
    title: "Enhanced Localization Tools",
    description:
      "Better translation workflow with context-aware suggestions and collaboration features.",
    status: "PLANNED",
    tags: ["i18n", "localization", "workflow"],
    votes: 67,
    comments: 15,
    quarter: "Q2 2024",
  },

  // IN_PROGRESS
  {
    id: "4",
    title: "Dark Mode for Dashboard",
    description:
      "System-wide dark mode theme for the Builder.io dashboard and visual editor.",
    status: "IN_PROGRESS",
    tags: ["ui", "accessibility", "theme"],
    votes: 234,
    comments: 45,
    progress: 75,
    quarter: "Q1 2024",
  },
  {
    id: "5",
    title: "Real-time Collaboration",
    description:
      "Multiple users can edit the same content simultaneously with live cursors and conflict resolution.",
    status: "IN_PROGRESS",
    tags: ["collaboration", "realtime", "editor"],
    votes: 198,
    comments: 38,
    progress: 40,
    quarter: "Q1 2024",
  },
  {
    id: "6",
    title: "Enhanced TypeScript Support",
    description:
      "Better TypeScript intellisense, error handling, and type safety in the visual editor.",
    status: "IN_PROGRESS",
    tags: ["typescript", "dx", "editor"],
    votes: 143,
    comments: 28,
    progress: 60,
    quarter: "Q1 2024",
  },

  // COMPLETED
  {
    id: "7",
    title: "Figma Plugin 2.0",
    description:
      "Complete redesign of the Figma plugin with improved sync, better component mapping, and batch operations.",
    status: "COMPLETED",
    tags: ["figma", "design", "integration"],
    votes: 312,
    comments: 67,
    quarter: "Q4 2023",
  },
  {
    id: "8",
    title: "Webhook Management Dashboard",
    description:
      "Visual interface for managing webhooks with testing, logs, and retry mechanisms.",
    status: "COMPLETED",
    tags: ["webhooks", "api", "integration"],
    votes: 89,
    comments: 19,
    quarter: "Q4 2023",
  },
  {
    id: "9",
    title: "Performance Analytics",
    description:
      "Detailed performance metrics for published content including Core Web Vitals tracking.",
    status: "COMPLETED",
    tags: ["performance", "analytics", "monitoring"],
    votes: 178,
    comments: 41,
    quarter: "Q4 2023",
  },
];

const statusConfig = {
  PLANNED: {
    title: "📋 Planned",
    color: "blue",
    description: "Ideas approved for development",
  },
  IN_PROGRESS: {
    title: "🚧 In Progress",
    color: "orange",
    description: "Currently being developed",
  },
  COMPLETED: {
    title: "✅ Completed",
    color: "green",
    description: "Recently shipped features",
  },
};

const RoadmapColumn = ({
  status,
  items,
}: {
  status: keyof typeof statusConfig;
  items: RoadmapItem[];
}) => {
  const config = statusConfig[status];

  return (
    <Box>
      <VStack align="stretch" spacing={4}>
        <Box>
          <Heading size="md" color="gray.900" mb={1}>
            {config.title}
          </Heading>
          <Text color="gray.600" fontSize="sm">
            {config.description}
          </Text>
          <Text color="gray.500" fontSize="sm" mt={1}>
            {items.length} items
          </Text>
        </Box>

        <Stack spacing={3}>
          {items.map((item) => (
            <Card
              key={item.id}
              size="sm"
              _hover={{ shadow: "md", transform: "translateY(-1px)" }}
            >
              <CardBody>
                <VStack align="stretch" spacing={3}>
                  <Box>
                    <Heading
                      size="sm"
                      color="gray.900"
                      mb={2}
                      lineHeight="short"
                    >
                      {item.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm" lineHeight="tall">
                      {item.description}
                    </Text>
                  </Box>

                  {/* Progress bar for in-progress items */}
                  {status === "IN_PROGRESS" && item.progress && (
                    <Box>
                      <HStack justify="space-between" mb={1}>
                        <Text fontSize="xs" color="gray.500">
                          Progress
                        </Text>
                        <Text
                          fontSize="xs"
                          color="gray.600"
                          fontWeight="semibold"
                        >
                          {item.progress}%
                        </Text>
                      </HStack>
                      <Progress
                        value={item.progress}
                        size="sm"
                        colorScheme={config.color}
                        borderRadius="full"
                      />
                    </Box>
                  )}

                  {/* Tags */}
                  <HStack spacing={1} flexWrap="wrap">
                    {item.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="subtle"
                        colorScheme="brand"
                        fontSize="xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 3 && (
                      <Badge variant="subtle" colorScheme="gray" fontSize="xs">
                        +{item.tags.length - 3}
                      </Badge>
                    )}
                  </HStack>

                  {/* Meta info */}
                  <HStack
                    justify="space-between"
                    fontSize="xs"
                    color="gray.500"
                  >
                    <HStack spacing={3}>
                      <HStack spacing={1}>
                        <ChevronUpIcon />
                        <Text>{item.votes}</Text>
                      </HStack>
                      <HStack spacing={1}>
                        <ChatIcon />
                        <Text>{item.comments}</Text>
                      </HStack>
                    </HStack>
                    {item.quarter && (
                      <Badge
                        variant="outline"
                        colorScheme={config.color}
                        fontSize="xs"
                      >
                        {item.quarter}
                      </Badge>
                    )}
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};

const Roadmap: NextPage = () => {
  const plannedItems = roadmapItems.filter((item) => item.status === "PLANNED");
  const inProgressItems = roadmapItems.filter(
    (item) => item.status === "IN_PROGRESS",
  );
  const completedItems = roadmapItems.filter(
    (item) => item.status === "COMPLETED",
  );

  return (
    <Box minH="100vh" bg="gray.50">
      <Header />

      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Page Header */}
          <Box textAlign="center">
            <Heading size="xl" mb={2} color="gray.900">
              🗺️ Product Roadmap
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="2xl" mx="auto">
              Track the progress of Builder.io features from idea to completion.
              Vote on planned features to help us prioritize development.
            </Text>
          </Box>

          {/* Roadmap Stats */}
          <Card>
            <CardBody>
              <Grid
                templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                gap={6}
              >
                <Box textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                    {plannedItems.length}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    Features Planned
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold" color="orange.500">
                    {inProgressItems.length}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    In Development
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold" color="green.500">
                    {completedItems.length}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    Recently Shipped
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                    {roadmapItems.reduce((sum, item) => sum + item.votes, 0)}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    Total Votes
                  </Text>
                </Box>
              </Grid>
            </CardBody>
          </Card>

          {/* Kanban Board */}
          <Grid
            templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
            gap={6}
            alignItems="start"
          >
            <GridItem>
              <RoadmapColumn status="PLANNED" items={plannedItems} />
            </GridItem>
            <GridItem>
              <RoadmapColumn status="IN_PROGRESS" items={inProgressItems} />
            </GridItem>
            <GridItem>
              <RoadmapColumn status="COMPLETED" items={completedItems} />
            </GridItem>
          </Grid>

          {/* Footer Note */}
          <Card bg="blue.50" borderColor="blue.200">
            <CardBody textAlign="center">
              <Text color="blue.800" fontSize="sm">
                <strong>💡 Have an idea?</strong> Submit your feature requests
                and help us prioritize what to build next!
              </Text>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
};

export default Roadmap;

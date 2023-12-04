import { faker } from "@faker-js/faker";
import { MetricDataValue, MetricsData } from "./metrics.types";

// Fake data generation

const x2 = (x: number) => x * (0.005 * x);
const x1 = (x: number) => x;

const randomFn = () => (Math.random() > 0.5 ? x1 : x2);

const generateValues = (start: number, end: number) => {
  const values = [];
  const valueStep = Math.max(10, (end - start) / 700);

  if (start >= end) {
    console.error(
      "start must be less than end for generate metric values correclty"
    );
  }

  const randomStart = Math.random() * 800;

  let j = randomStart;

  const fn = randomFn();

  for (let i = start; i < end; i += valueStep) {
    values.push([i, String(fn(j++))] as MetricDataValue);
  }

  return values;
};

const generateMatrixResult = (start: number, end: number) => {
  const metrics = [];
  for (let i = 0; i < Math.random() * 10; i++) {
    metrics.push({
      metric: {
        __name__: faker.internet.domainWord(),
        job: faker.internet.domainWord(),
        instance: faker.internet.domainWord(),
      },
      values: generateValues(start, end),
    });
  }

  return {
    data: {
      resultType: "matrix",
      result: metrics,
    },
  };
};

const generatePanels = () => {
  const panels = [];
  for (let i = 0; i < 20; i++) {
    panels.push({
      id: faker.string.uuid(),
      name: faker.internet.domainWord(),
      description: faker.lorem.sentence(),
      query: faker.lorem.sentence(),
    });
  }
  return panels;
};

const generateDashboards = () => {
  const dashboards = [];
  for (let i = 0; i < 10; i++) {
    dashboards.push({
      id: faker.string.uuid(),
      name: faker.internet.domainWord(),
      description: faker.lorem.sentence(),
      panels: generatePanels(),
    });
  }
  return dashboards;
};

const fakeDelay = (ms: number = 700) =>
  new Promise((res) => setTimeout(res, ms));

const dashboardsMockList = generateDashboards();

// Services

export const listDashboards = async () => {
  return fakeDelay().then(() => dashboardsMockList);
};

export const getMetrics = async ({
  start,
  end,
}: {
  // A query should be sent if this was a real service
  query: string;
  start: number;
  end: number;
}): Promise<MetricsData> => {
  const randomDelay = Math.floor(Math.random() * 800);
  return fakeDelay(randomDelay).then(() => generateMatrixResult(start, end));
};

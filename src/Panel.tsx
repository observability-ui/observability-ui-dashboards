import {
  Chart,
  ChartGroup,
  ChartLine,
  ChartVoronoiContainer,
} from "@patternfly/react-charts";
import { Card, CardTitle, CardBody } from "@patternfly/react-core";
import { getMetrics } from "./services/dashboardsService";
import React from "react";
import { MetricsData } from "./services/metrics.types";

interface PanelProps {
  name: string;
  description: string;
  query: string;
}

export const Panel = (props: PanelProps) => {
  const { name, description, query } = props;
  const [response, setResponse] = React.useState<MetricsData | undefined>();

  React.useEffect(() => {
    getMetrics({
      query: query,
      start: Date.now(),
      end: Date.now() + 500,
    }).then((metrics) => setResponse(metrics));
  }, [query]);

  /**
   * TODO 1:
   * Transform the 'response' we get from calling getMetrics() so that
   * we can use it in our line charts below.
   */

  return (
    <Card>
      <CardTitle> {name} </CardTitle>
      <CardBody>
        {description}
        <Chart
          ariaDesc={description}
          ariaTitle={name}
          containerComponent={
            <ChartVoronoiContainer
              labels={({ datum }) => `${datum.name}: ${datum.y}`}
              constrainToVisibleArea
            />
          }
          height={250}
          name={name}
          padding={{
            bottom: 50,
            left: 70,
            right: 70,
            top: 20,
          }}
          width={500}
        >
          <ChartGroup>
            {/* 
                TODO 2: 
                Render the chart lines using the <ChartLine> component from Patternfly. 
                https://www.patternfly.org/charts/line-chart/
                
                For example: 
                <ChartLine
                    data={[
                        { name: 'Cats', x: '2015', y: 1 },
                        { name: 'Cats', x: '2016', y: 2 },
                        { name: 'Cats', x: '2017', y: 5 },
                        { name: 'Cats', x: '2018', y: 3 }
                    ]}
                />
            */}
          </ChartGroup>
        </Chart>
      </CardBody>
    </Card>
  );
};

export default Panel;

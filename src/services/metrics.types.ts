export type MetricDataValue = [number, string];

export interface MetricsData {
  data: {
    resultType: string;
    result: {
      metric: {
        __name__: string;
        job: string;
        instance: string;
      };
      values: MetricDataValue[];
    }[];
  };
}

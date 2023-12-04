import { Flex, PageSection, PageSectionVariants } from "@patternfly/react-core";
import React from "react";
import { listDashboards } from "./services/dashboardsService";

interface Dashboard {
  id: string;
  name: string;
}

const DashboardsPage = () => {
  const [currentDashboard, setCurrentDashboard] = React.useState<
    Dashboard | undefined
  >();

  React.useEffect(() => {
    listDashboards().then((dashboards) => {
      setCurrentDashboard(dashboards[0]);
    });
  }, []);

  return (
    <main>
      <PageSection variant={PageSectionVariants.light}>
        Default Dashboard
      </PageSection>
      <div className="pf-v5-u-p-md">
        <Flex
          gap={{ default: "gapMd" }}
          justifyContent={{ default: "justifyContentCenter" }}
        >
          {/* TODO: Add dashboard panels */}
        </Flex>
      </div>
    </main>
  );
};

export default DashboardsPage;

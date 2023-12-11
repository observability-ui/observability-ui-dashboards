import { Flex, PageSection, PageSectionVariants } from "@patternfly/react-core";
import React from "react";
import { listDashboards } from "./services/dashboardsService";
import { Panel } from "./Panel";

interface Dashboard {
  id: string;
  name: string;
  description: string;
  panels: {
    id: string; 
    name: string; 
    description: string; 
    query: string;
  }[]
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
          {
            currentDashboard && currentDashboard.panels.map((panel) => {
              return (
                  <Panel 
                      key={panel.name}
                      name={panel.name} 
                      description={panel.description} 
                      query={panel.query}
                    />
              )
            })
          }
        </Flex>
      </div>
    </main>
  );
};

export default DashboardsPage;

import { PageSection, PageSectionVariants } from "@patternfly/react-core";
import React from "react";
import { listDashboards } from "./services/dashboardsService";
import { Panel } from "./Panel";
import "./DashboardsPage.css";

interface Dashboard {
  id: string;
  name: string;
  description: string;
  panels: {
    id: string;
    name: string;
    description: string;
    query: string;
  }[];
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
      <div className="dashboards-grid">
        {currentDashboard &&
          currentDashboard.panels.map((panel) => {
            return (
              <Panel
                key={panel.name}
                name={panel.name}
                description={panel.description}
                query={panel.query}
              />
            );
          })}
      </div>
    </main>
  );
};

export default DashboardsPage;

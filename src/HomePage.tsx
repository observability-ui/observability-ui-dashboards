import {
  EmptyState,
  EmptyStateBody,
  EmptyStateHeader,
  EmptyStateIcon,
} from "@patternfly/react-core";
import { TachometerAltIcon } from "@patternfly/react-icons";

const HomePage = () => {
  return (
    <section>
      <EmptyState>
        <EmptyStateHeader
          titleText="Observability Dashboards"
          headingLevel="h4"
          icon={<EmptyStateIcon icon={TachometerAltIcon} />}
        />
        <EmptyStateBody>Welcome</EmptyStateBody>
      </EmptyState>
    </section>
  );
};

export default HomePage;

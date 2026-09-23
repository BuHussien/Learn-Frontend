import { CheckCheck, XCircle, BadgeInfo, AlertTriangle, CheckCircle } from "lucide-react";
import Alert from "./components/ui/Alert/Alert";
const App = () => {
  return (
    <div>
      <Alert
        type="success"
        title="Success!"
        description="Your changes have been saved."
        icon={<CheckCheck />}
      />
      <Alert
        type="warning"
        title="Warning!"
        description="Please check your input."
        icon={<AlertTriangle />}
      />
      <Alert
        type={"error"}
        title="Error!"
        children={<p>There was an error processing your request<br /><a href="https://google.com" target="_blank" rel="noopener noreferrer">google</a>.</p>}
        icon={<XCircle />}
      />
      <Alert
        type="info"
        title="Info!"
        description="This is an informational message."
        icon={<BadgeInfo />}
      />
      <Alert
        type="primary"
        title="primary!"
        description="This is an primary message."
        icon={<CheckCircle />}
      />
    </div>
  );
};

export default App;

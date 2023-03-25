import ConditionalRendering from '../../../components/conditionalRendering/ConditionalRendering';
import { SpinnerComponent } from '../../../components/loadingSpinner/Spinner';
import useAdminCheck from '../../../hooks/useAdminCheck';

const Dashboard = (): JSX.Element | null => {
  const [isAdmin, loading] = useAdminCheck();

  /* Optional
   * You can redirect the user to another page
   * or just show a message that the user
   * doesnt have access to that content/page
   */

  if (loading) {
    return <SpinnerComponent variant="large" />;
  }

  return (
    <>
      <ConditionalRendering condition={isAdmin}>
        <div>Admin only content</div>
      </ConditionalRendering>
      <ConditionalRendering condition={!isAdmin}>
        <div>Not admin</div>
      </ConditionalRendering>
    </>
  );
};

export default Dashboard;

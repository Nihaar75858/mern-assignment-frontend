import AddSubscription from '../components/AddSubscription';
import { SubscriptionsTable } from '../components/SubscriptionsTable';

export default function Home() {
  return (
    <main>
      <h1>Subscriptions</h1>
      <SubscriptionsTable />
      {/* Added one new buttons: add subscription */}
      <AddSubscription />
    </main>
  );
}

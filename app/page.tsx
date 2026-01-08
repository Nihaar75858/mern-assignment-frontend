import UpdateSubscription from '@/components/UpdateSubscription';
import { SubscriptionsTable } from '../components/SubscriptionsTable';

export default function Home() {
  return (
    <main>
      <h1>Subscriptions</h1>
      <SubscriptionsTable />
      <UpdateSubscription />
    </main>
  );
}

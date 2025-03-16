import NestedMap from '@/components/dashboard/NestedMap';
import Entrance from '@/components/layout/Entrance';

const page = () => (
  <Entrance custom="">
    <div className="mb-16 lg:m-32 lg:mx-64">
      <NestedMap />
    </div>
  </Entrance>
);

export default page;

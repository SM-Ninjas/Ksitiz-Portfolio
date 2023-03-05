import InsightAPodcast from '@/components/InsightAPodcast/InsightAPodcast';
import OngoingProjects from '@/components/OngoingProjects/OngoingProjects';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <div className='flex flex-col gap-y-16'>
      <InsightAPodcast />
      <OngoingProjects />
    </div>
  );
};

export default Home;

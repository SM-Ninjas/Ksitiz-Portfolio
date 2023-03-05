import InsightAPodcast from '@/components/InsightAPodcast/InsightAPodcast';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <InsightAPodcast />
    </div>
  );
};

export default Home;

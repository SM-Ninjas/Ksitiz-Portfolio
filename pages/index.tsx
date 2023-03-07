import About from '@/components/About/About';
import Blogs from '@/components/Blog/Blogs';
import InsightAPodcast from '@/components/InsightAPodcast/InsightAPodcast';
import OngoingProjects from '@/components/OngoingProjects/OngoingProjects';
import Testimonial from '@/components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div className='flex flex-col gap-y-16'>
      <About />
      <InsightAPodcast />
      <OngoingProjects />
      <Blogs />
      <Testimonial />
    </div>
  );
};

export default Home;

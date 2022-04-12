import './Blog.css';
import Offer from '../../components/Offer/Offer';
import Portfolio from '../../components/Portfolio/Portfolio';
import Schedule from '../../components/Schedule/Schedule';

const Blog = (props) => {
  return <div className="services">
    <Offer title='What we can offer your SaaS Business' text='We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to clients. Our team has worked with Nordic. European and American tech unicorns.'/>

    <div className="blogger">
       <Portfolio/>
    </div>
      <Schedule/>
  </div>;
};

export default Blog;
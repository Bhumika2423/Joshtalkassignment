import { tasksData } from '../utils/tasks'; 
import TaskList from '../components/TaskList';

export async function getServerSideProps() {
  const tasks = tasksData; 
  return { props: { tasks } };
}

const Home = ({ tasks }) => {
  return <TaskList initialTasks={tasks} />;
};

export default Home;
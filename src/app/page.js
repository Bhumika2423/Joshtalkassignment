"use client";
import { tasksData } from '../utils/tasks';
import TaskList from './components/TaskList';

export default function Home() {
  return <TaskList initialTasks={tasksData} />;
}

type Task = {
  id: number;
  title: string;
  done: boolean;
  priority: number;
};

type TaskFormatter = (task: Task) => string;
type TaskPredicate = (task: Task) => boolean;
type OnTaskDone = (task: Task) => void;

function renderTasks(tasks: Task[], format: TaskFormatter): string[] {
  return tasks.map((task) => format(task));
}

function countMatching(tasks: Task[], predicate: TaskPredicate): number {
  return tasks.filter(predicate).length;
}

function completeAll(tasks: Task[], onDone: OnTaskDone): void {
  tasks.forEach((task) => {
    if (task.done === false) {
      task.done = true;
      onDone(task);
    }
  });
}

const tasks: Task[] = [
  { id: 13, title: "Phone", done: true, priority: 4 },
  { id: 21, title: "laptop", done: false, priority: 2 },
  { id: 7, title: "TV", done: true, priority: 6 },
  { id: 9, title: "computer", done: false, priority: 2 },
];

const renderedTasks = renderTasks(
  tasks,
  (task) => `#${task.id} ${task.title} [${task.priority}]`,
);
console.log(renderedTasks);

const isHighPriority = (task: Task) => task.priority >= 4;

const highPriorityCount = countMatching(tasks, isHighPriority);
console.log(highPriorityCount);

completeAll(tasks, (task) => {
  console.log(`Завершена задача: ${task.title}`);
});
console.log(tasks);

export {};

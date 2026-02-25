import noTasks from '../assets/no-Tasks.png';
import Button from './Button.jsx';
import H2 from './H2.jsx';
export default function NoTaskSelected({ onStartAddTask }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noTasks} alt='An empty task list' className='w-16 h-16 object-contain mx-auto' />
            <H2>No Task Selected</H2>
            <p className='text-stone-400 mb-4'>Select a Task or get started a new one</p>
            <p className='mt-8'>
                <Button title='Creat new Task' onClick={onStartAddTask} />
            </p>

        </div >
    );
}
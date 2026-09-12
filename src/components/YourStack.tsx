import type { ITechonologi } from '../type/techonologiType';

interface YourStackProps {
    myStack: ITechonologi[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void
}
const YourStack = ({ myStack, onRemove, onRemoveAll }: YourStackProps) => {
    return (
        <div className='card bg-base-100 border border-gray-200 shadow-sm'>
            <div className='card-body'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='card-title text-lg'>
                            Your Stack
                        </h2>

                        <p className='text-xs text-gray-400'>
                            {myStack.length === 0
                                ? 'No technologies selected yet.'
                                : `${myStack.length} technologies selected`
                            }
                        </p>
                    </div>

                </div>

                {myStack.length === 0 ? (

                    <div className='border border-dashed border-gray-300 rounded-lg p-6 text-center mt-3'>
                        <p className='text-sm text-gray-400'>
                            Your stack is empty.
                        </p>
                    </div>

                ) : (

                    <>
                        <div className="space-y-3 mt-4">

                            {myStack.map((technology) => (

                                <div
                                    key={technology.id}
                                    className='flex items-center justify-between border border-gray-200 rounded-lg p-3'
                                >
                                    <div className='flex items-center gap-3'>
                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="w-8 h-8"
                                        />
                                        <div>
                                            <h3 className='font-medium text-sm'>
                                                {technology.name}
                                            </h3>

                                            <p className='text-xs text-gray-400'>
                                                {technology.category}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() =>
                                            onRemove(technology.id)
                                        }
                                        className="btn btn-xs btn-error btn-outline"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}

                        </div>

                        <button
                            onClick={onRemoveAll}
                            className="btn btn-error w-full mt-5"
                        >
                            Remove All
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default YourStack;
import React from 'react';
import type { ITechonologi } from '../type/techonologiType';


interface YourStackProps{
    myStack:ITechonologi[];
    onRemove:(id:string)=>void;
    onRemoveAll:()=>void
}



const YourStack = ({myStack,onRemove,onRemoveAll}:YourStackProps) => {
    return (
         <div >

            <div>

            
                <div >

                    <div>
                        <h2 >
                            Your Stack
                        </h2>

                        <p >
                            {myStack.length === 0
                                ? 'No technologies selected yet.'
                                : `${myStack.length} technologies selected`
                            }
                        </p>
                    </div>

                </div>



                {myStack.length === 0 ? (

                    <div >

                        <p >
                            Your stack is empty.
                        </p>

                    </div>

                ) : (

                    <>

                    
                        <div className="space-y-3 mt-4">

                            {myStack.map((technology) => (

                                <div
                                    key={technology.id}
                               
                                >

                                   
                                    <div >

                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="w-8 h-8"
                                        />

                                        <div>

                                            <h3>
                                                {technology.name}
                                            </h3>

                                            <p >
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
                                        Delete
                                    </button>

                                </div>

                            ))}

                        </div>


                      
                        <button
                            onClick={onRemoveAll}
                            className="btn btn-error w-full mt-5"
                        >
                            Delete All
                        </button>

                    </>

                )}

            </div>
        </div>

    );
};

export default YourStack;
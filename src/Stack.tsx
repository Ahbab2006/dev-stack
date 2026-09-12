import React, { useState } from 'react';
import type { ITechonologi } from './type/techonologiType';
import TechnologyCard from './components/TechnologyCard';
import YourStack from './components/YourStack';

interface StackProps {
    techonologies: ITechonologi[]
}

const Stack = ({ techonologies }: StackProps) => {
    const [myStack, setMyStack] = useState<ITechonologi[]>([])

    // Technology Add
    const handleAddToStack = (technology: ITechonologi) => {
        const alreadyAdded = myStack.some(
            (item) => item.id === technology.id
        );
        if (alreadyAdded) return;

        setMyStack((previousStack) => [...previousStack, technology])
    };
    // One Item Delete 
    const handleRemoveFromStack = (id: string) => {
        setMyStack((previousStack) => previousStack.filter((techonology) => techonology.id !== id))
    }
    // full Delete 
    const handleRemoveAll = () => {
        setMyStack([]);
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {techonologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            onAddToStack={handleAddToStack}
                            isAdded={myStack.some(
                                (item) => item.id === technology.id
                            )}
                        />
                    ))}
                </div>
            </div>
            <div className="lg:col-span-1">

                <YourStack
                    myStack={myStack}
                    onRemove={handleRemoveFromStack}
                    onRemoveAll={handleRemoveAll}
                />

            </div>

        </div>

    );
};

export default Stack;
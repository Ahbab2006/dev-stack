import React, { use } from 'react';
import type { ITechonologi } from '../type/techonologiType';
import Stack from '../Stack';



interface techonologiProps {
    techonologiPromise: Promise<ITechonologi[]>
}


const Techonologies = ({ techonologiPromise }: techonologiProps) => {

    const techonologies = use(techonologiPromise);
    console.log(techonologies, 'techonologis')
    return (
        <div className='max-w-6xl mx-auto  gap-12 py-20 px-4'>

        <div>
            <h2 className='text-3xl font-bold '>Explore the Technologies</h2>
            <p>Pick one technology per category to build your ideal stack.</p>
        </div>


            <Stack techonologies={techonologies} />
        </div>
    );
};

export default Techonologies;
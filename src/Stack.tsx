import React from 'react';
import type { ITechonologi } from './type/techonologiType';

interface StackProps {
    techonologies: ITechonologi[];
}

const Stack = ({ techonologies }: StackProps) => {
    console.log(techonologies, 'techonologies from Stack');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techonologies.map((techonolgi: ITechonologi) => (
                <div
                    key={techonolgi.id}
                    className="card bg-base-100 w-96 border border-gray-200 shadow-sm"
                >
                    <div className="flex items-center justify-between px-6 pt-6">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img
                                src={techonolgi.icon}
                                alt={techonolgi.name}
                                className="w-10 h-10"
                            />
                        </div>

                        <span className="badge badge-info badge-outline">
                            {techonolgi.badge}
                        </span>
                    </div>

                    <div className="card-body pt-4">

                        <h2 className="card-title text-2xl">
                            {techonolgi.name}
                        </h2>
                        <p className="text-gray-500 leading-6">
                            {techonolgi.description}
                        </p>

                        <div className="divider my-2"></div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="badge badge-ghost">
                                {techonolgi.category}
                            </span>

                            <span className="text-gray-500">
                                {techonolgi.difficulty}
                            </span>
                            <span className="font-medium">
                                <span className="text-yellow-400">★</span>{' '}
                                {techonolgi.rating}
                            </span>
                        </div>
                        <div className="card-actions mt-4">
                            <button className="btn btn-neutral w-full">
                                Add to Stack
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stack;

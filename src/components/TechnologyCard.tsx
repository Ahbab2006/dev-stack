
import type { ITechonologi } from '../type/techonologiType';

interface TechnologyCardProps {
    technology: ITechonologi;
    onAddToStack: (technology: ITechonologi) => void;
    isAdded: boolean;
}

const TechnologyCard = ({
    technology,
    onAddToStack,
    isAdded,
}: TechnologyCardProps) => {

    return (
        <div className="card bg-base-100 border border-gray-200 shadow-sm">

            <div className="flex items-center justify-between px-6 pt-6">

                <div className="w-12 h-12 flex items-center justify-center">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-10 h-10"
                    />
                </div>

                <span className="badge badge-info badge-outline">
                    {technology.badge}
                </span>

            </div>
            <div className="card-body pt-4">

                <h2 className="card-title text-xl">
                    {technology.name}
                </h2>
                <p className="text-gray-500 text-sm leading-6">
                    {technology.description}
                </p>

                <div className="divider my-2"></div>
                <div className="flex items-center justify-between text-sm">

                    <span className="badge badge-ghost">
                        {technology.category}
                    </span>

                    <span className="text-gray-500">
                        {technology.difficulty}
                    </span>

                    <span className="font-medium">
                        <span className="text-yellow-400">
                            ★
                        </span>{' '}
                        {technology.rating}
                    </span>

                </div>

                <div className="card-actions mt-4">

                    <button
                        onClick={() => onAddToStack(technology)}
                        disabled={isAdded}
                        className="btn btn-neutral w-full"
                    >
                        {isAdded
                            ? 'Added to Stack'
                            : 'Add to Stack'}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default TechnologyCard;

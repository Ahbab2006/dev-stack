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
        <div >
            <div>

                <div >
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-10 h-10"
                    />
                </div>
                <span>
                    {technology.badge}
                </span>

            </div>
            <div >
                <h2>
                    {technology.name}
                </h2>
                <p className="text-gray-500 text-sm leading-6">
                    {technology.description}
                </p>
                <div className="divider my-2"></div>
                <div>

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

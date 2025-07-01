import { forwardRef } from 'react';
import { Link } from 'react-router';

interface GrandmasterRowProps {
  name: string;
  index: number;
}

const GrandmasterRow = forwardRef<HTMLAnchorElement, GrandmasterRowProps>((props, ref) => {
  const { name, index } = props;
  return (
    <Link
      to={`/profile/${name}`}
      ref={ref}
      className="bg-neutral-800 rounded-2xl px-6 py-4 hover:bg-neutral-700 transition duration-200 block"
    >
      <p className="font-bold">
        {index + 1}. {name}
      </p>
    </Link>
  );
});

GrandmasterRow.displayName = 'GrandmasterRow';

export default GrandmasterRow;

import { stripSpaces } from '../../utils/StringUtils';

interface Props {
  studios: string[];
}

const StudioGrid = ({ studios }: Props) => {
  const rows: Array<string[]> = [[]];

  studios.forEach((studio) =>
    studio === 'SPACER' ? rows.push([]) : rows[rows.length - 1].push(studio),
  );

  return (
    <>
      {rows.map((row, idx) => (
        <>
          {/* <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"> */}
          <div className="flex flex-row flex-wrap basis-1/3 md:basis-1/4 lg:basis-1/6 justify-center gap-3">
            {row.map((studio) => (
              <img
                className="w-1/4 md:w-1/5 lg:w-[15%]"
                src={`/assets/images/${stripSpaces(studio)}.png`}
                key={studio}
                alt={studio}
              />
            ))}
          </div>
          {idx < rows.length - 1 && (
            <img
              className="w-1/2 m-auto"
              src="/assets/images/Neon_bar.png"
              alt="Spacer"
            />
          )}
        </>
      ))}
    </>
  );
};

export default StudioGrid;

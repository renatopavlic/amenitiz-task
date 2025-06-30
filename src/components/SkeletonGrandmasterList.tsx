const SkeletonGrandmasterList = () => {
  return (
    <div className="w-full rounded-md p-4">
      <div className="animate-pulse space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-8 max-w-60 rounded bg-gray-300"></div>
          <div className="flex flex-col gap-6">
            <div className="h-20 rounded bg-neutral-800"></div>
            <div className="h-20 rounded bg-neutral-800"></div>
            <div className="h-20 rounded bg-neutral-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonGrandmasterList;

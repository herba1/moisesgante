
export default function FeatureBlock({ data, reverse = false, media, body, children, className }) {
  // sanity block

  return (
    <>
      <div className={`featured__item__container relative flex flex-col gap-small md:gap-medium md:grid grid-rows-1 grid-cols-2 ${className}`}>
        <div
          className={` ${reverse ? " col-start-2 col-span-1 " : ""} relative aspect-[3/2] rounded-sm overflow-clip`}
        >
          {/* media item */}
          {media}
        </div>
        <div
          className={` ${reverse ? " col-start-1 col-span-1 row-start-1 " : ""}  gap-small  col-span-1 flex flex-col justify-between`}
        >
          {/* text/other item */}
        {children}
        </div>
      </div>
    </>
  );
}

export default function StickyFooter({ height = "100lvh", children, className="" }) {
  return (
    <footer
      style={{ height }}
      className={`flex flex-col bg-transparent justify-end relative z-0  pointer-events-auto  ${className} `}
    >
      {/* Double height container */}
      <div
        style={{ height: `calc(${height}*2)` }}
        className="relative shrink-0"
      >
        {/* Sticky content container */}
        <div
          style={{
            height,
            top: `calc(100vh - ${height})`,
          }}
          className="w-full sticky"
        >
          {children || (
            <div className="w-full bg-white overflow-clip h-full flex flex-col cursor-crosshair justify-end p-4 ">
              <h1 className=" text-4xl cursor-crosshair ">
                place your content here through children
              </h1>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

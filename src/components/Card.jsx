export default function Card({ title, img, onClick, subtitle }) {
  return (
    <div
      onClick={onClick}
      className="rounded-xl border shadow-md hover:shadow-xl bg-white dark:bg-slate-900 
      hover:scale-[1.03] transition-all cursor-pointer overflow-hidden group"
    >
      {/* Image Box */}
      <div className="w-full h-36 bg-gray-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={title}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-gray-500 text-sm">No Image</div>
        )}
      </div>

      {/* Text Box */}
      <div className="p-3 text-center bg-gray-50 dark:bg-slate-800 border-t">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        {subtitle && (
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

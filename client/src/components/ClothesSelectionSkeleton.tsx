export default function ClothesSelectionSkeleton() {
  const skeletonBody =
    "h-[16.094px] my-[2px] bg-gray-200 rounded-full dark:bg-gray-400";

  const listSpacing = "mt-1 text-secondary flex gap-4 flex-wrap";

  // RETURN
  return (
    <div>
      {/* SKELETON */}
      <div className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-500 w-10 mb-4"></div>
          <ul className={`${listSpacing}`}>
            <div className={`${skeletonBody} w-16`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-32`}></div>
            <div className={`${skeletonBody} w-20`}></div>
          </ul>
        </div>
      </div>
      {/* SKELETON */}

      {/* SKELETON */}
      <div className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-500 w-20 mb-4"></div>
          <ul className={`${listSpacing}`}>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-24`}></div>
            <div className={`${skeletonBody} w-14`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-16`}></div>
            <div className={`${skeletonBody} w-20`}></div>
          </ul>
        </div>
      </div>
      {/* SKELETON */}

      {/* SKELETON */}
      <div className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-500 w-16 mb-4"></div>
          <ul className={`${listSpacing}`}>
            <div className={`${skeletonBody} w-24`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-32`}></div>
            <div className={`${skeletonBody} w-32`}></div>
            <div className={`${skeletonBody} w-28`}></div>
            <div className={`${skeletonBody} w-20`}></div>
          </ul>
        </div>
      </div>
      {/* SKELETON */}

      {/* SKELETON */}
      <div className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-500 w-24 mb-4"></div>
          <ul className={`${listSpacing}`}>
            <div className={`${skeletonBody} w-16`}></div>
            <div className={`${skeletonBody} w-16`}></div>
            <div className={`${skeletonBody} w-24`}></div>
            <div className={`${skeletonBody} w-24`}></div>
            <div className={`${skeletonBody} w-24`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-20`}></div>
          </ul>
        </div>
      </div>
      {/* SKELETON */}

      {/* SKELETON */}
      <div className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-500 w-10 mb-4"></div>
          <ul className={`${listSpacing}`}>
            <div className={`${skeletonBody} w-16`}></div>
            <div className={`${skeletonBody} w-40`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-32`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-20`}></div>
          </ul>
        </div>
      </div>
      {/* SKELETON */}

      {/* SKELETON */}
      <div className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-500 w-10 mb-4"></div>
          <ul className={`${listSpacing}`}>
            <div className={`${skeletonBody} w-16`}></div>
            <div className={`${skeletonBody} w-40`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-32`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-20`}></div>
          </ul>
        </div>
      </div>
      {/* SKELETON */}

      {/* SKELETON */}
      <div className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-500 w-10 mb-4"></div>
          <ul className={`${listSpacing}`}>
            <div className={`${skeletonBody} w-16`}></div>
            <div className={`${skeletonBody} w-40`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-32`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-20`}></div>
          </ul>
        </div>
      </div>
      {/* SKELETON */}

      {/* SKELETON */}
      <div className="group relative flex gap-x-6 rounded-lg px-4 py-3 hover:bg-white/60">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-500 w-10 mb-4"></div>
          <ul className={`${listSpacing}`}>
            <div className={`${skeletonBody} w-16`}></div>
            <div className={`${skeletonBody} w-40`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-32`}></div>
            <div className={`${skeletonBody} w-20`}></div>
            <div className={`${skeletonBody} w-20`}></div>
          </ul>
        </div>
      </div>
      {/* SKELETON */}
    </div>
  );
}

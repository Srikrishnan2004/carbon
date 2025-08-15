import { Outlet } from "@remix-run/react";

export default function PublicRoute() {
  return (
    <div className="container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-10 lg:flex dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-r border-slate-200 dark:border-slate-800">
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-3xl mr-6 shadow-2xl shadow-purple-500/25">
            <span className="text-4xl font-bold text-white">D</span>
          </div>
          <div className="text-4xl font-bold gradient-text">Dreampi</div>
        </div>

        <div className="relative z-20 flex-1 flex flex-col justify-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold tracking-tight mb-6 gradient-text">
              Welcome to the future of ERP
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Experience a modern, intuitive enterprise resource planning
              platform designed for the digital age. Streamline operations,
              enhance productivity, and drive growth with Dreampi.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  Modern, intuitive interface
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  Lightning-fast performance
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  Enterprise-grade security
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

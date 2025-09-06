import { useState } from 'react';
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function SavedContent() {
  const [activeTab, setActiveTab] = useState('blog');

  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Blank Page" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        
        {/* Tab Buttons */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              activeTab === 'blog'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Blog Content
          </button>
          <button
            onClick={() => setActiveTab('source')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              activeTab === 'source'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Source Query
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mb-10 space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200">
                Action 1
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200">
                Action 2
            </button>
            <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200">
                Action 3
            </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'blog' && (
          <div className="mx-auto w-full text-center blog-content SINGLEBLOG">
            <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl big-brand">
              The Scoop on Happiness: A Deep Dive into the World of Ice Cream
            </h3>

            <p className="text-gray-500 dark:text-gray-400">
Is there any dessert more universally beloved than ice cream? From the moment we hear the familiar jingle of an ice cream truck to the last satisfying spoonful, it's a treat that brings joy and nostalgia. It's not just a frozen dessert; it's a symbol of celebration, a comfort food, and a blank canvas for countless flavors and toppings.
 </p>

            <p className="text-gray-500 dark:text-gray-400">
The history of ice cream is as rich and layered as the dessert itself. Ancient civilizations enjoyed chilled desserts made from ice and snow mixed with fruit and honey. The modern form we know and love began to take shape in Italy and France before making its way to America, where it became a national obsession. Presidents like George Washington and Thomas Jefferson were known to be fans, and the first ice cream shop in America opened its doors in New York City in the late 1700s.
 </p>

            <p className="text-gray-500 dark:text-gray-400">
What makes a great ice cream? It starts with the basics: cream, milk, sugar, and flavorings. The key to a smooth, creamy texture is the churning process, which incorporates air and prevents large ice crystals from forming. Small-batch producers often pride themselves on this artisanal approach, which results in a denser, more flavorful product. But the true magic of ice cream lies in its endless variety. From classic vanilla bean and rich chocolate to adventurous flavors like lavender honey or spicy chili mango, there's a flavor for every palate. The toppings are where the fun truly begins: sprinkles, chocolate fudge, caramel, nuts, and fresh fruit can transform a simple scoop into a work of art.
 </p>

            <p className="text-gray-500 dark:text-gray-400">
Ice cream isn't just about the taste; it's about the experience. Whether it's a cone on a hot summer day, a sundae shared with a friend, or a pint enjoyed straight from the freezer on a quiet night in, ice cream is a simple pleasure that can make any moment feel special. It's a reminder to slow down and savor the sweetness in life.
            </p>

          </div>
        )}
        
        {activeTab === 'source' && (
          <div className="mx-auto w-full max-w-[630px] text-center SINGLEBLOG">
            <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
              Source Query Content
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              This is where your source query information will go.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

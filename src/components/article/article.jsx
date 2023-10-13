/* eslint-disable react/prop-types */
const Article = ({ title, text, tags, image, alt }) => {
    return <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-xl flex flex-col items-center gap-2  sm:hover:shadow-gray-500 sm:hover:dark:shadow-black sm:hover:shadow-lg">
      <h1 className="mb-2 text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h1>
      <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
        {
          tags.map(tag => <span key={tag} className="px-4 py-1 bg-alura-100 dark:bg-dark-100 rounded-full text-gray-200 text-xs font-bold uppercase">{tag}</span>)
        }
      </div>
      <div className="flex flex-col gap-1">
        {
          text.map((content, index) => <span key={index} className="text-alura-200 dark:text-gray-400">{content}</span>)
        }
      </div>
      { image && <img className="sm:p-4" src={image} /> }
      { image && alt && <span className="sr-only">{alt}</span>}
    </div>
  }
  
  export default Article
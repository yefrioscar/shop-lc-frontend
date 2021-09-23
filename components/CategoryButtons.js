import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { containsPath } from "../utils/path";

const CategoryButtons = ({ categories = [] }) => {
  const route = useRouter();
  let _categories = categories;

  // add default selected
  // _categories.unshift({ slug: "/", id: "todos", name: "Todos" });

  console.log(route);
  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
      <Link href={`/`}>
        <a
          className={clsx(
            "bg-white   font-semibold py-2 px-4 border border-gray-400 rounded shadow",
            route.asPath === "/"
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "text-gray-800 hover:bg-gray-100"
          )}
        >
          Todos
        </a>
      </Link>
      {_categories.map((_category) => (
        <Link href={`/categories/${_category.slug}`} key={_category.id}>
          <a
            className={clsx(
              "bg-white font-semibold py-2 px-4 border border-gray-400 rounded shadow",
              containsPath(route.asPath, _category.slug)
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "text-gray-800 hover:bg-gray-100"
            )}
          >
            {_category.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;

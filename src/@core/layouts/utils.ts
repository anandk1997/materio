// ** Types
import { NextRouter } from "next/navigation";

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */
export const handleURLQueries = (
  router: NextRouter,
  path: string | undefined,
): boolean => {
  if (router?.query && Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query);

    return (
      router.asPath.includes(path) &&
      router.asPath.includes(router.query[arr[0]] as string) &&
      path !== "/"
    );
  }

  return false;
};

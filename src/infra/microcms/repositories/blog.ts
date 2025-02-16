import { client } from "@/libs/microcms/utils/createClient";

export const getBlog = async (contentId: string) => {
  return client.get({
    endpoint: "blogs",
    contentId,
  });
};

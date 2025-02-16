"use client";

import { getBlog } from "@/infra/microcms/repositories/blog";
import { useEffect } from "react";

export const BlogDetail: React.FC = () => {
  useEffect(() => {
    getBlog("ic-cgtbjl5")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  return <div>BlogDetail</div>;
};

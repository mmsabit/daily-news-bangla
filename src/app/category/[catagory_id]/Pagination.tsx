"use client";
import React from "react";
import { useRouter } from "next/navigation";

type PaginationProps = {
  page: number;
  totalPages: number;
  slug:string;
};

const Pagination = ({ page, totalPages,slug }: PaginationProps) => {
  const router = useRouter();

  const goToPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return;
    router.push(`/category/${slug}?page=${newPage}`);
  };

  // Build page number list with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - delta && i <= page + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center mb-20">
      <div className="join">
        {/* Previous */}
        <button
          className="join-item btn text-[#111827]  border border-base-400  disabled:opacity-40"
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
        >
          «
        </button>

        {/* Page numbers */}
        {getPageNumbers().map((p, idx) =>
          p === "..." ? (
            <button
              key={`ellipsis-${idx}`}
              className="join-item btn btn-disabled text-[#111827] bg-white border border-base-400"
            >
              ...
            </button>
          ) : (
            <button
              key={p}
              onClick={() => goToPage(Number(p))}
              className={`join-item btn text-[#111827]  border border-base-400 ${
                p === page ? "bg-[#DC2626] text-white" : "bg-white"
              }`}
            >
              {p}
            </button>
          ),
        )}

        {/* Next */}
        <button
          className="join-item btn text-[#111827] bg-white border border-base-400 disabled:opacity-40"
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;

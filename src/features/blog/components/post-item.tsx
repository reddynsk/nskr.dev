import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Post } from "@/features/blog/types/post";
import { cn } from "@/lib/utils";

export function PostItem({
  post,
  shouldPreloadImage,
}: {
  post: Post;
  shouldPreloadImage?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group/post flex flex-col gap-4 overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg",
        "sm:flex-row sm:gap-6"
      )}
    >
      {post.metadata.image && (
        <div className="relative shrink-0 select-none sm:w-64">
          <div className="overflow-hidden sm:h-full">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              width={1200}
              height={630}
              quality={100}
              priority={shouldPreloadImage}
              unoptimized
              className="aspect-video object-cover transition-transform duration-300 group-hover/post:scale-105 sm:aspect-auto sm:h-full"
            />
          </div>

          {post.metadata.new && (
            <span className="absolute top-3 right-3 rounded-md bg-info px-2 py-1 font-mono text-xs font-semibold text-white shadow-md">
              New
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col justify-center gap-2 p-4 sm:py-6">
        <div>
          <h3 className="text-xl leading-tight font-semibold text-balance underline-offset-4 group-hover/post:text-primary group-hover/post:underline">
            {post.metadata.title}
          </h3>
          {post.metadata.description && (
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {post.metadata.description}
            </p>
          )}
        </div>

        <dl className="mt-auto">
          <dt className="sr-only">Published on</dt>
          <dd className="text-xs text-muted-foreground">
            <time dateTime={dayjs(post.metadata.createdAt).toISOString()}>
              {dayjs(post.metadata.createdAt).format("MMMM DD, YYYY")}
            </time>
          </dd>
        </dl>
      </div>
    </Link>
  );
}

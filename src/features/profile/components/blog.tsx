"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/features/blog/actions";
import { PostItem } from "@/features/blog/components/post-item";
import type { Post } from "@/features/blog/types/post";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function Blog() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setAllPosts);
  }, []);

  const recentPosts = allPosts.slice(0, 2);

  return (
    <Panel id="blog">
      <PanelHeader>
        <div className="flex w-full items-center justify-between">
          <PanelTitle>Recent Posts</PanelTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View all
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PanelHeader>

      <PanelContent className="space-y-6">
        {recentPosts.map((post, index) => (
          <PostItem
            key={post.slug}
            post={post}
            shouldPreloadImage={index === 0}
          />
        ))}

        {recentPosts.length === 0 && (
          <p className="py-8 text-center text-muted-foreground">
            No posts yet. Check back soon!
          </p>
        )}
      </PanelContent>
    </Panel>
  );
}

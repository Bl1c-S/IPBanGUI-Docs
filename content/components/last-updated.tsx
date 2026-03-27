"use client";

import type { FC, ReactNode } from "react";

export const LastUpdated: FC<{
  date?: Date;
  children?: ReactNode;
  locale?: string;
}> = ({ date, children = "Останнє оновлення" }) => {
  if (!date) {
    return null;
  }

  return (
    <>
      {children}{" "}
      <time
        dateTime={date.toISOString()}
        // Can provoke React 418 error https://react.dev/errors/418
        suppressHydrationWarning
      >
        {date.toLocaleDateString(undefined, {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
      </time>
    </>
  );
};

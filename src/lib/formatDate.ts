/**
 * Formats an ISO date string (e.g. "2024-03-12") as "March 12, 2024".
 * Uses UTC to avoid off-by-one-day issues from timezone shifts.
 */
export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

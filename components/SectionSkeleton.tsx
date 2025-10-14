import { cn } from "../lib/utils";

type SectionSkeletonProps = {
  title: string;
};

export function SectionSkeleton({ title }: SectionSkeletonProps) {
  return (
    <section className="section-padding py-24" aria-busy="true" aria-label={`${title} loading`}>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className={cn("h-6 w-32 rounded-full bg-offwhite/10", "skeleton-block")} />
          <div className={cn("h-12 w-2/3 rounded-full bg-offwhite/10", "skeleton-block")} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className={cn("h-40 rounded-2xl bg-offwhite/5", "skeleton-block")} />
          ))}
        </div>
      </div>
    </section>
  );
}

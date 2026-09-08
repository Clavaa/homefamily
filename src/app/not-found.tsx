import Link from "next/link";
import Shell from "@/components/Shell";
import { site } from "@/site.config";

export default function NotFound() {
  return (
    <Shell lang="en">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="display text-6xl font-extrabold text-teal">404</p>
        <h1 className="display mt-3 text-3xl font-extrabold text-spruce">
          That page moved — your answer didn't.
        </h1>
        <p className="mt-4 leading-relaxed">
          You're probably here for one thing: can your state pay you to care
          for a family member? Let's find out.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/qualify/" className="btn-primary">
            See if you qualify →
          </Link>
          {site.phone && site.phoneHref && (
            <a href={site.phoneHref} className="btn-outline">
              📞 <span className="tnum">{site.phone}</span>
            </a>
          )}
        </div>
        <p className="mt-6 text-sm text-muted">
          Or start at the{" "}
          <Link href="/" className="text-teal underline">
            home page
          </Link>
          .
        </p>
      </div>
    </Shell>
  );
}

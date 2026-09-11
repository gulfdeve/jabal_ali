import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border border-foreground px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
      >
        Return Home
      </Link>
    </div>
  );
}

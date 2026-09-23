import { useEffect, useState } from "react";

// Public, free, no API key required: https://dummyjson.com/docs/products
const API_BASE = "https://dummyjson.com/products?limit=100";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  images: string[];
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const ProductCard = ({ product }: { product: Product }) => (
  <div
    className="
      rounded-xl
      border border-[#E2E8F0]
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-200
      hover:-translate-y-1
      hover:border-[#087EA4]
      hover:shadow-md
    "
  >
    <div className="flex h-32 items-center justify-center rounded-lg bg-[#F1F5F9] p-3">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>

    <h3 className="mt-5 line-clamp-2 text-lg font-semibold text-[#0F172A]">
      {product.title}
    </h3>

    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#64748B]">
      {product.description}
    </p>

    <div className="mt-3 flex items-center justify-between">
      <span className="text-lg font-bold text-[#0F172A]">
        ${product.price.toFixed(2)}
      </span>
      <span className="text-xs text-[#64748B]">
        ⭐ {product.rating.toFixed(1)} · {product.stock} in stock
      </span>
    </div>

    <a
      href={`https://dummyjson.com/products/${product.id}`}
      target="_blank"
      rel="noreferrer"
      className="
        mt-4
        inline-block
        text-sm
        font-semibold
        text-[#087EA4]
        transition-colors
        duration-200
        hover:text-[#0369A1]
      "
    >
      View Product →
    </a>
  </div>
);

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ProductGrid = ({ products, loading, error }: ProductGridProps) => {
  if (error) {
    return (
      <p className="mt-8 rounded-lg bg-red-50 p-4 text-sm text-red-600">
        Couldn't load products: {error}
      </p>
    );
  }

  if (loading) {
    return (
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-80 animate-pulse rounded-xl border border-[#E2E8F0] bg-white p-6"
          >
            <div className="h-32 rounded-lg bg-[#F1F5F9]" />
            <div className="mt-5 h-4 w-3/4 rounded bg-[#F1F5F9]" />
            <div className="mt-3 h-3 w-full rounded bg-[#F1F5F9]" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const HomePage = () => {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        const res = await fetch(API_BASE, { signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: ProductsResponse = await res.json();
        const all = data.products ?? [];

        if (cancelled) return;

        // Featured: top-rated products; New arrivals: highest product IDs (most recently added)
        const byRating = [...all].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        const byId = [...all].sort((a, b) => b.id - a.id);

        setFeatured(byRating.slice(0, 4));
        setNewArrivals(byId.slice(0, 4));
      } catch (err) {
        if (!cancelled) {
          const message =
            err instanceof Error
              ? err.name === "AbortError"
                ? "Request timed out"
                : err.message
              : "Unknown error";
          setError(message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#334155]">
      {/* Hero */}
      <section className="bg-[#087EA4] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
            Welcome
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Discover Amazing Products
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
            Explore our collection of high-quality products made for you.
          </p>

          <button
            type="button"
            className="
              mt-6
              rounded-lg
              bg-white
              px-6
              py-3
              font-semibold
              text-[#087EA4]
              transition-colors
              duration-200
              hover:bg-[#E0F2FE]
            "
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#087EA4]">
            Our Collection
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">
            Featured Products
          </h2>

          <p className="mt-3 max-w-2xl text-[#64748B]">
            Discover some of our most popular products and find something that
            suits your needs.
          </p>
        </div>

        <ProductGrid products={featured} loading={loading} error={error} />
      </section>

      {/* New Arrived Products */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#087EA4]">
            Our Collection
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">
            New Arrived Products
          </h2>

          <p className="mt-3 max-w-2xl text-[#64748B]">
            Discover some of New and Stylish products and find something that
            suits your needs.
          </p>
        </div>

        <ProductGrid products={newArrivals} loading={loading} error={error} />
      </section>
    </main>
  );
};

export default HomePage;
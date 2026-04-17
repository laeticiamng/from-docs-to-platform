import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  product?: "aquevent" | "biobot";
  current: string;
}

const PRODUCT_LABEL = {
  aquevent: "AquaVent™",
  biobot: "BioBot™",
} as const;

const ProductBreadcrumb = ({ product, current }: Props) => {
  const location = useLocation();
  const crumbs: Crumb[] = [{ label: "Accueil", to: "/" }];
  if (product) crumbs.push({ label: PRODUCT_LABEL[product], to: `/${product}` });
  crumbs.push({ label: current });

  return (
    <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 py-3">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1">
              {i === 0 && <Home className="w-3.5 h-3.5" />}
              {c.to && !isLast ? (
                <Link
                  to={c.to}
                  className={`hover:text-primary transition-colors ${
                    location.pathname === c.to ? "text-primary" : ""
                  }`}
                >
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground font-medium" : ""}>{c.label}</span>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 mx-1" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ProductBreadcrumb;

import AquaVentLayout from '../components/AquaVentLayout';
import ProductShowcase from '../components/product/ProductShowcase';
import ComparisonTable from '../components/product/ComparisonTable';

export default function Product() {
  return (
    <AquaVentLayout>
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#8B2C5A] to-[#1E88E5] bg-clip-text text-transparent">
            AquaVent PhytoTech™
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Découvrez l'inhalateur qui révolutionne le bien-être respiratoire et le sevrage tabagique
        </p>
      </div>

      <ProductShowcase />
      <ComparisonTable />
    </AquaVentLayout>
  );
}

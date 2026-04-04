import type { FinancialInputs, FinancialProjection } from '../types/business';

export function calculateROI(
  investmentAmount: number,
  years: number,
  annualReturn: number
): { totalReturn: number; roi: number; annualized: number } {
  const totalReturn = investmentAmount * Math.pow(1 + annualReturn / 100, years);
  const roi = ((totalReturn - investmentAmount) / investmentAmount) * 100;
  const annualized = (Math.pow(totalReturn / investmentAmount, 1 / years) - 1) * 100;
  return { totalReturn, roi, annualized };
}

export function calculateBreakeven(
  fixedCosts: number,
  pricePerUnit: number,
  variableCostPerUnit: number
): number {
  const marginPerUnit = pricePerUnit - variableCostPerUnit;
  if (marginPerUnit <= 0) return Infinity;
  return Math.ceil(fixedCosts / marginPerUnit);
}

export function calculateMarketPenetration(
  tam: number,
  penetrationRate: number,
  pricePoint: number
): number {
  return (tam * (penetrationRate / 100)) / pricePoint;
}

export function generateProjections(inputs: FinancialInputs): FinancialProjection[] {
  const projections: FinancialProjection[] = [];
  let currentRevenue = inputs.investmentAmount * 0.8;
  let currentCustomers = Math.round(currentRevenue / inputs.pricePoint);

  for (let i = 0; i < inputs.timeHorizon; i++) {
    const year = 2026 + i;
    const growthMultiplier = 1 + inputs.growthRate / 100;
    currentRevenue = i === 0 ? currentRevenue : currentRevenue * growthMultiplier;
    currentCustomers = Math.round(currentRevenue / inputs.pricePoint);
    const costs = currentRevenue * (0.65 - i * 0.05);
    const profit = currentRevenue - costs;
    const marketShare = (currentRevenue / 12000000000) * 100;

    projections.push({
      year,
      revenue: Math.round(currentRevenue),
      costs: Math.round(costs),
      profit: Math.round(profit),
      marketShare: Math.round(marketShare * 100) / 100,
      customers: currentCustomers,
    });
  }

  return projections;
}

export function formatCurrency(value: number, compact = false): string {
  if (compact) {
    if (value >= 1_000_000_000) return `€${(value / 1_000_000_000).toFixed(1)}B`;
    if (value >= 1_000_000) return `€${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `€${(value / 1_000).toFixed(0)}K`;
  }
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
}

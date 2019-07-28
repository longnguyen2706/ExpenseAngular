export const urlMapping: UrlMapping = {
  saleByYear: "/visualizer/sales-by-year/",
  quantityByMonth: "/visualizer/quantity-by-month/",
  allRecords: "/visualizer/all-records/",
  visualForm: "/visualizer/processing-form/",
  plotChart: "/visualizer/plot-chart/"
};

export interface UrlMapping {
  saleByYear: string;
  quantityByMonth: string;
  allRecords: string;
  visualForm: string;
  plotChart: string;
}

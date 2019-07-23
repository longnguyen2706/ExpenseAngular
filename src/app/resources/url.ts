export const urlMapping : UrlMapping = {
    saleByYear: '/visualizer/sales-by-year/',
    quantityByMonth: '/visualizer/quantity-by-month/',
    allRecords: '/visualizer/all-records/'
}

export interface UrlMapping{
    saleByYear: string,
    quantityByMonth: string,
    allRecords: string
}
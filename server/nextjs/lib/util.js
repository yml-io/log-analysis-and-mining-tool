export const createUploadFileName = (originalFileName) => {
    const timeSeriesValue = new Date().toISOString().replace(/[T:-]/g, '').replace(/\.(\d\d).+/, '$1');
    return `${timeSeriesValue}${originalFileName.slice(0,5)}.tmp`;
};
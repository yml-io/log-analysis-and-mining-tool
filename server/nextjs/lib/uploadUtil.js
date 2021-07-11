import fs from 'fs';

export const createUploadFileName = (originalFileName) => {
    const timeSeriesValue = new Date().toISOString().replace(/[T:-]/g, '').replace(/\.(\d\d).+/, '$1');
    return `${timeSeriesValue}${originalFileName.slice(0,5)}.tmp`;
};

export const saveUploadedFile = async (file, savedFileName) => {
    const data = fs.readFileSync(file.path);
    const uploadFullPath = `./upload/${savedFileName}`;
    fs.writeFileSync(uploadFullPath, data);
    await fs.unlinkSync(file.path);
    return savedFileName;
};
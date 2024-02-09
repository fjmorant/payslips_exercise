import { Filesystem, Directory } from "@capacitor/filesystem";

const downloadAndSaveFile = async (url: string, fileName: string) => {
  try {
    await Filesystem.downloadFile({
      url,
      path: fileName,
      directory: Directory.Documents,
    });

    return true;
  } catch (error: any) {
    return false;
  }
};

export { downloadAndSaveFile };

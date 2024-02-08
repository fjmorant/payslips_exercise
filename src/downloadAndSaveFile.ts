import { Filesystem, Directory } from "@capacitor/filesystem";

async function downloadAndSaveFile(url: string, fileName: string) {
  try {
    const response = await Filesystem.downloadFile({
      url,
      path: fileName,
      directory: Directory.Documents,
    });

    console.log("File saved successfully: ", response.path);
  } catch (error: any) {
    console.error("Error saving file:", error.message);
  }
}

export default downloadAndSaveFile;

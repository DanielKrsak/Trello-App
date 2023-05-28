import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64718b118dcfe59f6622",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;

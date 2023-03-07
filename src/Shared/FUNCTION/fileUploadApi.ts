import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
const storage = getStorage();

export const getFilesInStorage = async (path: string) => {};

// upload multiple files

export const uploadBlobToStorage = (file: File, path: string) => {
  const storageRef = ref(storage, `${path}/${file.name}`);

  // 'file' comes from the Blob or File API
  const uploadTask = uploadBytesResumable(storageRef, file);

  let isUploading = true;
  let progress = 0;
  let errorCode = "";
  let downloadURL = "";

  return uploadTask;
};
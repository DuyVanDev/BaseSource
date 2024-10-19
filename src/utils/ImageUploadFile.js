// import { callApi } from "@/services";

import { callApi } from "@/services";

// const ConvertFileName = (filename) => {
//   const extension = filename.split(".").pop();
//   const nameWithoutExtension = filename.substring(0, filename.lastIndexOf("."));
//   const formattedName = nameWithoutExtension
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .replace(/[^a-z0-9]/gi, "-")
//     .replace(/^-+|-+$/g, "")
//     .toLowerCase();
//   return `${formattedName}.${extension}`;
// };
// export const FormImageUpload = async (FileUpload) => {
//   debugger;
//   console.log(FileUpload.length);
//   const formData = new FormData();
//   formData.append("Key", "cak-solution.com");
//   let listimage = "";
//   if (FileUpload) {
//     for (let i = 0; i < Object.keys(FileUpload).length; i++) {
//       let f = FileUpload[i];
//       let renamedFile = new File([f], ConvertFileName(f.name), {
//         type: f.type,
//       });
//       console.log(renamedFile);

//       formData.append("myFile" + i, renamedFile);
//     }

//     const data = await callApi.PostImages(formData);
//     let _img = data.replaceAll('"', "");
//     listimage = _img.replace("[", "").replace("]", "");
//   }
//   return [listimage]
//     .filter((p) => p !== "" && p !== undefined && p !== "undefined")
//     .join(",");
// };
const ConvertFileName = (filename) => {
  const extension = filename.split(".").pop(); // Lấy phần mở rộng của tệp
  const nameWithoutExtension = filename.substring(0, filename.lastIndexOf(".")); // Lấy tên tệp không có phần mở rộng
  const formattedName = nameWithoutExtension
      .normalize("NFD") // Chuẩn hóa chuỗi ký tự
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
      .replace(/[^a-z0-9]/gi, "-") // Thay thế ký tự không hợp lệ bằng dấu gạch ngang
      .replace(/^-+|-+$/g, "") // Loại bỏ dấu gạch ngang ở đầu và cuối chuỗi
      .toLowerCase(); // Chuyển đổi tất cả sang chữ thường
  return `${formattedName}.${extension}`; // Trả về tên tệp mới với phần mở rộng
};

// Hàm để tải lên hình ảnh
export const FormImageUpload = async (FileUpload, key = 0) => {
  debugger
  console.log(FileUpload?.length);
  const formData = new FormData();
  formData.append("Key", 'cak-solution.com'); // Thêm khóa vào form data
  let listimage = "";

  if (FileUpload !== "" && FileUpload.length > 0 && Array.isArray(FileUpload)) {
      for (let i = 0; i < FileUpload.length; i++) {
          let f = FileUpload[i];
          // Tạo tệp mới với tên tệp đã chuyển đổi
          let renamedFile = new File([f], ConvertFileName(f.name), {
              type: f.type,
          });

          // Thêm tệp vào form data
          formData.append("myFile" + i, renamedFile);
      }

      console.log(formData)
      try {
          // Gọi API để tải lên hình ảnh
          const data = await callApi.PostImages(formData);
          let _img = data.replaceAll('"', "");
          listimage = _img.replace("[", "").replace("]", "");
      } catch (error) {
          console.error("Error uploading images:", error);
          return ""; // Trả về chuỗi rỗng nếu có lỗi
      }
  }

  // Trả về danh sách hình ảnh đã tải lên
  return [listimage].filter((p) => p !== "" && p !== undefined && p !== "undefined").join(",");
};
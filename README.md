# Kết nối Server
Đầu tiên phải clone genz_server về trước, vào file ./bin/www sửa kết nối mongoose từ DB_LOCAL sang DB_HOST
Chạy server: npm run dev (http://localhost:5000)
## Khởi chạy React
npm run start
## Cấu trúc thư mục React
##/node
##/public
/src
  /api
    /axiosClient.js - cấu hình mặc định cho axios, gắn accessToken từ local storage lên headers mỗi khi gửi request đi
    /productApi.js - các hàm liên quan đến product: lấy danh sách sản phẩm, tạo mới sản phẩm, lấy sp theo id
    /...
  /common - chứa các folder dùng chung
    /Input.js - 
    /Select.js - 
    /...
  /config
    /store.js - cấu hình store cho redux/toolkit
  /guards - chứa những route yêu cầu quyền truy cập auth
    /PrivateRouter.js - 
    /DashBoảd.js
  /product


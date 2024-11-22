function danhsach() {
    const thanhvien = [
        { hovaten: 'Dư Thị Kim Thư', gioitinh: 'Nữ', noisinh: 'Hà Nội' },
        { hovaten: 'Vũ Thị Bạch Diệp', gioitinh: 'Nữ', noisinh: 'Hưng Yên' },
        { hovaten: 'Nguyễn Đoàn Minh Chi', gioitinh: 'Nữ', noisinh: 'Hà Nội' },
        { hovaten: 'Trịnh Duy Đạt Huy', gioitinh: 'Nam', noisinh: 'Hà Nội' },
        { hovaten: 'Tống Quang Trung', gioitinh: 'Nam', noisinh: 'Hà Nội' },
        { hovaten: 'Phạm Quang Lâm', gioitinh: 'Nam', noisinh: 'Hà Nội' },
        { hovaten: 'Vũ Hải Vịnh', gioitinh: 'Nam', noisinh: 'Hà Nội' },
    ];

    const table = document.getElementById('danhsach');

    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Họ Tên</th>
                    <th>Giới Tính</th>
                    <th>Nơi Sinh</th>
                </tr>
            </thead>
            <tbody>
    `;

    thanhvien.forEach(thanhvien => {
        tableHTML += `
            <tr>
                <td>${thanhvien.hovaten}</td>
                <td>${thanhvien.gioitinh}</td>
                <td>${thanhvien.noisinh}</td>
            </tr>
        `;
    });

    tableHTML += `</tbody></table>`;
    table.innerHTML = tableHTML;
}

// Gọi hàm danhsach để hiển thị danh sách thành viên khi trang được tải
document.addEventListener('DOMContentLoaded', danhsach);

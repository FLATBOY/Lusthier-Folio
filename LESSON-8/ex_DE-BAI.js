/**
 * - Cho bảng điểm các môn học trong học kỳ 2 của một học sinh A lớp chuyên hóa như sau:
 *      + Toán: 8.5
 *      + Văn: 8
 *      + Tiếng Anh: 9
 *      + Sinh: 5
 *      + Hóa: 7
 *      + Lý: 7.8
 *      + Sử: 9
 *      + Địa: 6.3
 *      + GDCD: 9.8
 *      + Công nghệ: 8
 *      + Tin học: 8.5
 *      + GDQP: 9
 *      + Thể dục: 8.8
 * - Ta có cách xếp loại học lực như sau:
 *      + Học sinh giỏi: 
 *          . Điểm trung bình các môn học từ 8,0 trở lên.
 *          . Điểm trung bình của 01 trong 03 môn Toán, Ngữ văn, Ngoại ngữ  từ 8,0 trở lên.
 *          . Không có môn học nào điểm trung bình dưới 6,5.
 *      + Học sinh khá:
 *          . Điểm trung bình các môn học từ 6,5 trở lên.
 *          . Điểm trung bình của 01 trong 03 môn Toán, Ngữ văn, Ngoại ngữ  từ 6,5 trở lên.
 *          . Không có môn học nào điểm trung bình dưới 5,0.
 *      + Học sinh trung bình: 
 *          . Điểm trung bình các môn học từ 5,0 trở lên.
 *          . Điểm trung bình của 01 trong 03 môn Toán, Ngữ văn, Ngoại ngữ  từ 5,0 trở lên.
 *          . Không có môn học nào điểm trung bình dưới 3,5.
 *      + Học sinh yếu:
 *          . Điểm trung bình các môn học từ 3,5 trở lên.
 *          . Kông có môn học nào điểm trung bình dưới 2,0.
 *      + Học sinh kém:
 *          . Các trường hợp còn lại.
 * - Biết rằng nếu là học sinh lớp chuyên thì ĐIỂM MÔN CHUYÊN phải thỏa điều kiện như sau:
 *      + Học sinh giỏi: từ 8.0 trở lên.
 *      + Học sinh khá: từ 6.5 trở lên.
 *      + Học sinh trung bình: từ 5.0 trở lên.
 * Hãy viết một chương trình theo các yêu cầu sau đây:
 *      + Tính điểm trung bình HK 2 của học sinh A.
 *      + Phân loại học sinh theo mô tả trên (sử dụng if else/ switch case/ toán tử)
 * Yêu cầu chương trình phải thỏa mãn hết tất cả trường hợp nếu thay đổi điểm học sinh.
 */
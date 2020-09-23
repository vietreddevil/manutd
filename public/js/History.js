VanillaTilt_init();
var scrollHandler = document.getElementById('scrollHandler');
function checkPageLoading() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        scrollHandler.value = 0;
        loadMore();
    }
}
async function loadMore() {    
    scrollHandler.value = await loadContent();
}
function loadContent() {
    return new Promise(async (resolve, reject) => {
        var lis = document.querySelectorAll('.timeline ul li');
        let cur_index = lis.length;
        if(cur_index == Timeline.length) {
            resolve(0);
        } else {
            let info = Timeline[lis.length];
            let strHTML = "<li>";
            strHTML += '<div class="additional_imgs">';
            for await (let item of info.additional_images) {
                strHTML += '<div class="card">';
                strHTML += '<div class="box">';
                strHTML += '<div class="imgBx">';
                strHTML += '<img src="' + item.imgUrl + '">';
                strHTML += '</div>';
                strHTML += '<div class="contentBx"><div>';
                strHTML += '<h2>' + item.title + '</h2>';
                strHTML += '<p>' + item.content + '</p>';
                strHTML += '</div></div>';
                strHTML += '</div>';
                strHTML += '</div>';
            }
            strHTML += '</div>';
            strHTML += '<div class="content">';
            strHTML += ' <h3>' + info.title + '</h3>';
            strHTML += ' <section>' + info.html;
            strHTML += ' </section>';
            strHTML += ' </div>';
            strHTML += ' <div class="time">';
            strHTML += '  <h4>' + info.time + '</h4>';
            strHTML += ' </div>';
            strHTML += '</li>';
            $('.timeline ul li:last').after(strHTML);
            VanillaTilt_init();
            resolve(0);
        }
    });
}

/**
 * 
 * <li>
                <div class="additional_imgs">
                    <div class="card">
                        <div class="box">
                            <div class="imgBx">
                                <img src="/imgs/History/1878-1909/first.jpg">
                            </div>
                            <div class="contentBx">
                                <div>
                                    <h2>Thành lập đội bóng</h2>
                                    <p>Năm 1878, Manchester United được thành lập từ bởi bộ phận "Toa hành khách" và
                                        "Toa trần"
                                        của công ty đường sắt Lancashire and Yorkshire Railway (LYR)
                                        với tên gọi Newton Heath LYR Football Club.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <div class="imgBx">
                                <img src="/imgs/History/1878-1909/John Henry Davies.jpg">
                            </div>
                            <div class="contentBx">
                                <div>
                                    <h2>John Henry Davies</h2>
                                    <p>Ông chủ của một nhà máy bia Walker & Homfray, sở hữu nhiều quán bar ở thành phố
                                        Salford và Manchester. Khi đó
                                        ông muốn tặng cho con gái một chú chó như quà sinh nhật. Con gái ông đã bắt gặp
                                        Major đi lạc và câu chuyện
                                        bắt đầu từ đó.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <div class="imgBx">
                                <img src="/imgs/History/1878-1909/Ernest Mangnall.jpg">
                            </div>
                            <div class="contentBx">
                                <div>
                                    <h2>Ernest Mangnall</h2>
                                    <p>Ông là huấn luyện viên đầu tiên dẫn dắt MU và đã đưa câu lạc bộ đến chức vô địch
                                        lần đầu vào năm 1908 và có tiếng nói quan trọng trong việc xây dựng sân Old
                                        Trafford như ngày nay.
                                        Ernest Mangnall đến vào thời điểm MU đang vật lộn ở giải hạng 2. Sau chức vô
                                        địch quốc gia đầu tiên năm 1908,
                                        Man Utd tiếp tục thăng hoa với chiếc cúp FA ở mùa giải năm sau và thêm một danh
                                        hiệu vô địch quốc gia nữa vào năm 1911.
                                        sau gần 1 thập kỷ gắn bó, Ernest Mangnall quyết định rời câu lạc bộ để gia nhập
                                        đối thủ cùng thành phố Manchester City.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h3>Những năm tháng đầu</h3>
                    <section>
                        <div class="circle circle1">
                            <img src="/imgs/History/1878-1909/1878-1909.jpg">
                        </div>
                        <div>
                            <p>
                                Năm 1878, Manchester United được thành lập bởi bộ phận "Toa hành khách" và "Toa trần"
                                của công ty đường sắt Lancashire and Yorkshire Railway (LYR)
                                với tên gọi Newton Heath LYR Football Club.
                                Khi đó không nhiều người sẽ nghĩ rằng họ có thể tạo được ảnh hưởng tại các giải đấu cấp
                                quốc gia, đặc biệt là các giải đấu quốc tế.
                                Các công nhân khi đó chỉ hòa vào niềm đam mê bóng đá bằng các trận đấu với các bộ phận
                                khác của LYR và đôi khi là các công ty đường sắt khác.
                            </p>
                            <p>
                                Năm 1888, Football League (tổ chức bóng đá lớn nhất nước Anh thời đó) được thành lập.
                                Newton Heath được cho là không
                                đủ tốt để trở thành đồng sáng lập giải đấu cùng với những Blackburn Rovers
                                và Preston North End. Thay vào đó, họ bắt đầu tham gia giải hạng nhất vào năm 1892. Đáng
                                buồn là chỉ sau 2 mùa giải, câu lạc bộ đã không thể trụ lại và
                                bị rơi xuống giải hạng nhì.
                            </p>
                            <div class="circle circle2">
                                <img src="/imgs/History/1878-1909/Major.jpg" class="object-fill">
                            </div>
                            <p>
                                Trong những năm đầu thể kỷ 20, đội bóng gặp rất nhiều khó khăn về tài chính và đã từng
                                phải tuyên bố phá sản.
                                Tuy nhiên, đội trưởng Harry Stafford không thể đứng nhìn câu lạc bộ mình gắn bó từ những
                                ngày đầu thành lập biến mất như vậy.
                                Suốt một thời gian dài, anh luôn đem theo chú chó cưng tên là Major để xin tiền các cổ
                                động viên giúp đội duy trì hoạt động.
                                Trong một buổi quyên góp tiền, nhờ vào việc Major đi lạc đến quán bia của John Henry
                                Davies mà hai người đã gặp nhau.
                            </p>
                            <p>
                                Sau cuộc gặp mặt, Davies, khi đó là chủ một nhà máy bia, đã quyết định đầu tư cho câu
                                lạc bộ.
                                Việc đầu tiên ông chủ mới của Newton Health làm là thay đổi tên của đội bóng. Những cái
                                tên như
                                Manchester Central và Manchester Celtic được đưa ra nhưng đều bị bác bỏ. Cuối cùng, cái
                                tên Manchester United
                                ra đời vào tháng 4 năm 1902.
                            </p>
                            <p>
                                Tháng 9 năm 1903, Ernest Mangnall chuyển tới đội bóng với tư cách thư ký nhưng được biết
                                đến rộng rãi như là người quản lý đầu tiên của Manchester
                                United. Cùng với người quản lý mới của mình cũng như 2 bản hợp đồng mới là Harry Moger
                                (thủ môn) và tiền đạo Charlie Sagar, MU đã đành được vị trí
                                thứ 3 của giải hạng nhì trong 2 mùa giải liên tiếp.
                            </p>
                            <div class="circle circle1">
                                <img src="/imgs/History/1878-1909/winner.jpg">
                            </div>
                            <p>
                                Mùa giải 1905/1906 được xem là mùa giải thành công nhất trong kỷ nguyên đầu của MU khi
                                họ đã lọt vào trận tứ kết cup FA và đặc biệt hơn là đứng vị
                                trí thứ 2 tại giải hạng nhì, qua đó dành vé lên chơi giải hạng nhất sau 12 năm. Để chuẩn
                                bị cho đấu trường cao nhất nước Anh, Mangnall đã ký hợp đồng với
                                Billy Meredith, người đã vướng vào bê bối dàn xếp tỉ số cùng với 17 cầu thủ khác tại
                                Manchester City. Cầu thủ chạy cánh này đã nhanh chóng hòa nhập và
                                đem lại vô số đường kiến tạo và người hưởng lợi nhất là Sandy Turnbull. Với bộ đôi hủy
                                diệt, mùa giải 1907/0908 đánh dấu Manchester United lần đầu tiên
                                kết thúc mùa giải với tư cách nhà vua của nước Anh.
                            </p>
                            <p>
                                Sau đó, đội bóng dành được siêu cúp Anh sau khi nghiền nát QPR với tỉ số 4-0 nhờ vào cú
                                hattrick của một Turnbull khác, đó là Jimmy Turnbull.
                                Kỷ nguyên đầu của Manchester United kết thúc với việc mang về phòng truyền thống chiếc
                                cúp thứ 3 trong lịch sử, sau khi họ đánh bại Bristol City
                                trong trận chung kết FA cup nhờ vào bàn thắng duy nhất của Sandy Turnbull.
                            </p>
                        </div>
                    </section>
                </div>
                <div class="time">
                    <h4>1878 to 1909</h4>
                </div>
            </li>
 */
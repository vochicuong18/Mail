
var nodemailer = require('nodemailer');

const option = {
    service: 'gmail',
    auth: {
        user: 'hungffun.2@gmail.com', 
        pass: '1641999dohung' 
    }
};
var transporter = nodemailer.createTransport(option);

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
}
  // Example:
    console.log(between(800, 900))

transporter.verify(function(error, success) {
    // Nếu có lỗi.
    if (error) {
        console.log(error);
    } else { //Nếu thành công.
        console.log('Kết nối thành công!');
        var mail = {
            from: 'hungffun.2@gmail.com', // Địa chỉ email của người gửi
            to: 'hung.fun40@gmail.com', // Địa chỉ email của người gửi
            subject: 'Thư được gửi bằng Sever Tumlrz', // Tiêu đề mail
            // text: 'Xác nhận địa chỉ email của bạn',
            html: " <h3>Xác nhận địa chỉ email của bạn</h3> </br> <p>Trước khi tạo tài khoản Tumblrz, bạn còn cần hoàn thành một bước nhỏ nữa. Hãy chắc chắn rằng đây là địa chỉ email chính xác của bạn  </p> </br> <p> — vui lòng xác nhận đây là địa chỉ chính xác để sử dụng cho tài khoản mới của bạn.</p> </br> <p>Vui lòng nhập mã xác nhận này để bắt đầu trên Tumblrz: </p> </br> <p> " + between(800, 900) + "</p> </br> <p>Mã xác nhận hết hạn sau hai giờ.</p>  </br> <p>Xin cảm ơn</p>  </br> <p>Tumblrz</p>"
        };
        //Tiến hành gửi email
        transporter.sendMail(mail, function(error, info) {
            if (error) { // nếu có lỗi
                console.log(error);
            } else { //nếu thành công
                console.log('Email sent: ' + info.response);
            }
        });
    }
});


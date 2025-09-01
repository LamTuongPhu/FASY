const form = document.getElementById('appointment-form');
const celebritySelect = document.getElementById('celebrity');
const celebrityInfo = document.getElementById('celebrity-info');
const celebName = document.getElementById('celeb-name');
const celebDescription = document.getElementById('celeb-description');

const celebrities = {
    celeb1: {
        name: "KIÊN PHẠM",
        description: "với các kiến thức cơ bản về thời trang Kiên Phạm sẽ giúp bạn định hình một cách đúng đắn về cách ăn mặc"
    },
    celeb2: {
        name: "BENJAMIN TRAN",
        description: "với nhiều năm sinh sống ở các nước khác nhau Ben sẽ cung cấp cho bạn các kiến thức phong phú từ nhiều nênf văn hóa khác nhau"
    },
    celeb3: {
        name: "TRÍ MINH LÊ",
        description: "với sự am hiểu sâu sắc và cực kỳ thực tế của mình về thời trang Trí sẽ hướng dẫn mọi người đêu nên và không nên trong ăn mặc, biết đâu là đẹp, đâu là xấu"
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedCelebrity = celebritySelect.value;
    email: document.getElementById('email').value,
    celebName.textContent = celebrities[selectedCelebrity].name;
    celebDescription.textContent = celebrities[selectedCelebrity].description;
    celebrityInfo.classList.remove('hidden');
});
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedCelebrity = celebritySelect.value;
    celebName.textContent = celebrities[selectedCelebrity].name;
    celebDescription.textContent = celebrities[selectedCelebrity].description;
    celebrityInfo.classList.remove('hidden');
    
    // Hiển thị thông báo thành công
    successMessage.classList.remove('hidden');
});
const appointments = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedCelebrity = celebritySelect.value;
    const appointmentData = {
        name: document.getElementById('name').value,
        celebrity: celebrities[selectedCelebrity],
        datetime: document.getElementById('datetime').value
    };
    appointments.push(appointmentData);

    // Hiển thị thông báo thành công
    successMessage.classList.remove('hidden');

    // Hiển thị thông tin lịch hẹn đã đặt
    displayAppointments();
});

function displayAppointments() {
    const appointmentsList = document.getElementById('appointments-list');
    appointmentsList.innerHTML = '';

    appointments.forEach((appointment, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${appointment.name}</strong> đã đặt lịch hẹn với <strong>${appointment.celebrity.name}</strong> vào lúc ${appointment.datetime}`;
        appointmentsList.appendChild(listItem);
    });
}
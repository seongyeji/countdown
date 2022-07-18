class Place{
    constructor (place, time) {
        this.place = place;
        this.time = time;
    }
};

let route = [
    new Place('대학교', new Date(2022, 07, 12, 10, 00, 00)),
    new Place('버스', new Date(2022, 07, 12, 17, 00, 00)),
    new Place('하양역', new Date(2022, 07, 12, 17, 35, 00)),
    new Place('무궁화호', new Date(2022, 07, 12, 17, 35, 00)),
    new Place('동대구역', new Date(2022, 07, 12, 18, 37, 00)),
    new Place('KTX', new Date(2022, 07, 12, 18, 37, 00)),
    new Place('서울역', new Date(2022, 07, 12, 20, 31, 00)),
]; // 이동경로

// 시간 계산
const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

function check_place(){
    now = new Date();
    for (var i = 0; i < route.length; i++){
        let time = route[i].time - now;

        if (time > 0){
            if (i > 0){
                console.log(`${route[i-1].place}에 있습니다.`);
            }
            console.log(`${route[i].place}까지 남은 시간`);
            countdown(time);
            break;
        }
    }
}

function countdown(time){
    let day = Math.trunc(time / _day);
    let hour = Math.trunc((time % _day) / _hour);
    let min = Math.trunc((time % _hour) / _minute);
    let sec = Math.trunc((time % _minute) / _second);

    console.log(`${hour}:${min}:${sec}`);   
}

setInterval(check_place, 1000);
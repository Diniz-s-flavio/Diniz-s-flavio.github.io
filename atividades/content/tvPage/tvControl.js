let tvStats = false;
let channel = 1;
let currentVolume = 5;

let tvPowerState = 'Ligar';

const canalSpan = document.getElementById('canal');
const volumeSpan = document.getElementById('volume');

const tvPowerButton = document.getElementById('tvPower');
tvPowerButton.innerHTML = 'Ligar';

const changeChannelButton = document.getElementById('changeChannel');
canalSpan.innerHTML = channel;

const imgOnTv = document.getElementById('tvImg');

const volPlusButton = document.getElementById('volPlus');
const volMinusButton = document.getElementById('volMinus');
volumeSpan.innerHTML = currentVolume;

    tvPowerButton.addEventListener('click', function() {
        tvStats = !tvStats;
        if (tvStats) {
          imgOnTv.src="../../images/tvImgs/tvOn.jpeg"
        }else{
          imgOnTv.src="../../images/tvImgs/tvOff.png"
        }
        imgOnTv.innerHTML = tvStats ? 'Desligar' : 'Ligar';
    });

    changeChannelButton.addEventListener('click', function() {
      if (tvStats && channel != 1) {
        channel = Math.max(1, channel - 1);
        canalSpan.innerHTML = channel;
      }else if(tvStats && channel == 1){
        channel = 10;
        canalSpan.textContent = channel;
      }

      switch (channel) {
        case 1:
          imgOnTv.src="../../images/tvImgs/tv1.png"
          break;
        case 2:
          imgOnTv.src="../../images/tvImgs/tv2.png"
          break;
        case 3:
          imgOnTv.src="../../images/tvImgs/tv3.png"
          break;
        case 4:
          imgOnTv.src="../../images/tvImgs/tv4.png"
          break;
        case 5:
          imgOnTv.src="../../images/tvImgs/tv5.png"
          break;
        case 6:
          imgOnTv.src="../../images/tvImgs/tv6.png"
          break;
        case 7:
          imgOnTv.src="../../images/tvImgs/tv7.png"
          break;
        case 8:
          imgOnTv.src="../../images/tvImgs/tv8.png"
          break;
        case 9:
          imgOnTv.src="../../images/tvImgs/tv9.png"
          break;
        case 10:
          imgOnTv.src="../../images/tvImgs/tv10.png"
          break;
          default:
            imgOnTv.src="../../images/tvImgs/tvOn.jpeg"
      }
    });

    volPlusButton.addEventListener('click', function() {
      if (tvStats) {
        currentVolume = Math.min(5, currentVolume + 1);
        volumeSpan.textContent = currentVolume;
      }
    });

    volMinusButton.addEventListener('click', function() {
      if (tvStats) {
        currentVolume = Math.max(0, currentVolume - 1);
        volumeSpan.textContent = currentVolume;
      }
    });
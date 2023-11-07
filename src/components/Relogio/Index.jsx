import React, { useEffect, useState } from 'react';
import LiberadoAudio from './liberado.mp3';
import Igor from './igao.png';

const Relogio = () => {
    const [imgShow, setImgShow] = useState(false);
    
    useEffect(() => {
        const audio = document.getElementById('liberado');
        audio.volume = 0; 

        function atualizarRelogio() {
            const agora = new Date();
            const horas = agora.getHours().toString().padStart(2, '0');
            const minutos = agora.getMinutes().toString().padStart(2, '0');
            const segundos = agora.getSeconds().toString().padStart(2, '0');
            const relogio = document.getElementById('relogio');
            if (relogio) {
                relogio.textContent = `${horas}:${minutos}:${segundos}`;
            }
            if (horas === '23' && minutos === '42' && segundos === '35') {
                audio.volume = 1; 
                audio.play();
                setImgShow(true);
                setTimeout(() => {
                    setImgShow(false);
                },10000)
            }
                
            
        }

        const timerId = setInterval(atualizarRelogio, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
           
            <p>ALMOSSO será Liberado ao meio dia!</p>
            <h1 id='relogio'></h1>
           {imgShow && <img src={Igor} alt="" />}
            <audio id='liberado' src={LiberadoAudio}></audio>
        </div>
    );
};

export default Relogio;

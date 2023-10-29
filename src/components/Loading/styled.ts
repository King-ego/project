import styled from "styled-components";

interface IProps {
    animate_name: "blink" | "mid_blink" | "end_blink"
}

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #3498db; 
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); } /* Gira 360 graus */
    }
`;

export const Pulse = styled.div`
    width: 20px;
    height: 20px;
    border: 4px solid #3498db;
    border-radius: 50%;
    animation: pulse 1s ease-in-out infinite; 
    margin: 0 auto;
    
    @keyframes pulse {
        0% {
          transform: scale(0.8);
          opacity: 0.7;
        }
        50% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(0.8);
          opacity: 0.7;
        }
    }
`;

export const Blink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`
export const Dot = styled.div<IProps>`
    width: 7px;
    height: 7px;
    background-color: #3498db; /* Cor do ponto, pode ser personalizada */
    border-radius: 50%;
    margin: 0 5px; /* Espaçamento entre os pontos */
    opacity: 0;
    animation: ${({animate_name})=> animate_name} 1s infinite; /* Duração e tipo de animação */

    @keyframes blink {
        0% {
          opacity: 0.4;
          transform: translateY(-2px);
        }
        50% {
          opacity: 0.7;
          transform: translateY(0);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    @keyframes mid_blink {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        50% {
          opacity: 0.4;
          transform: translateY(-2px);
        }
        100% {
          opacity: 0.7;
          transform: translateY(0);
        }
    }
    @keyframes end_blink {
        0% {
          opacity: 0.7;
          transform: translateY(0);
        }
        50% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0.4;
          transform: translateY(-2px);
        }
    }
`;
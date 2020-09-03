// document.onmousemove = function(){
//     console.log(window.event.clientX, window.event.clientX)
// };

const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

//load 안에 로직을 넣음으로써 모든 resource가 load드 된후에 이 로직이 실행되게 된다.
addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeigth = targetRect.height / 2;

    document.addEventListener('mousemove',(event)=> {
        const x = event.clientX;
        const y = event.clientY;
        console.log(x, y);

        //translate 를 사용하기 =>top, left 를 통해 지정해주는것보다 효율적 (layout 과정이 계속 발생하지 않는다)
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeigth}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;

        // vertical.style.left = `${x}px`;
        // horizontal.style.top = `${y}px`;

        // target.style.left = `${x}px`;
        // target.style.top = `${y}px`;

        // tag.style.left = `${x}px`;
        // tag.style.top = `${y}px`;
    
        });
    });



    let socket = io();

        //References
        const form = document.querySelector('form');
        const input = document.querySelector('input');
        const scrollContainer = document.querySelector('div');
        let ul = document.querySelector('ul');

        //Listener
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (input.value) {
                socket.emit('eventChat', input.value);
                input.value = '';
                
                //Auto scroll down
                scrollContainer.scrollTop = (scrollContainer.scrollHeight + 100);
                console.log(scrollContainer.scrollHeight);

            }
        })

        //Broadcasting
        socket.on('eventChat', (msg) => {
            let item = document.createElement('li');
            item.textContent = msg;
            ul.appendChild(item);
        })



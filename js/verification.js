

function check() {
        let uname = document.getElementById('u_name').value;
        let upass = document.getElementById('u_pass').value;
        if (uname == 'Prashu' && upass == 'vip') {
            console.log("User_Verfied");
            alert('verfied');
            
        }
        else {
            alert('invalid');
            document.getElementById('u_name').innerHTML = '';
            document.getElementById('u_pass').innerHTML = '';
        }

}
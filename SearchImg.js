function tekshir() {
     fetch("https://reqres.in/api/users?page=2")
          .then(response => response.json())
          .then(json => {
               console.log(json.data);
               var users = json.data;
               var inp1 = document.getElementById('inp1');
               var inp2 = document.getElementById('inp2');
               var alert1 = document.getElementById('alert');


               for (let i = 0; i <= users.length; i++) {

                    if (users[i].email == inp1.value && users[i].first_name == inp2.value) {
                         alert('Malumot tugri')
                    }
                    else {
                         alert("Login yoki parol xato")
                    }

               }


          })
}
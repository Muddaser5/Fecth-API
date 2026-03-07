 function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
          const list = document.getElementById("list");
          list.innerHTML = ""; // clear old data

          // show only first 5 items (simple)
          
          data.slice(0, 5).forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            list.appendChild(li);
          });
        })
        .catch(error => {
          console.log("Error:", error);
        });
    }
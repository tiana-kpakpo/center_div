window.addEventListener('load',async (e) => {
    e.preventDefault();

    

            //get available items
        const allItems = await fetch('http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/items')
        const items = await allItems.json();

        //items is an array
        items.forEach(itm => {
            const container = document.querySelector('.td-list');
            const item = document.createElement('div')
            item.classList.add('item')
            item.id = itm.id
            item.innerHTML += `
            <h2> ${itm.name}</h2>
            <span class="material-symbols-outlined delete" id="del">delete</span>
            `
            container.appendChild(item)

        //     const deleteBtn = item.querySelector('.delete');
        // deleteBtn.addEventListener('click', () => {
        //     handleDelete(itm.id);
        });
        
        })

    const addItem = document.querySelector('.add-item span')

    addItem.addEventListener('click', async (e) => {
        e.preventDefault();




        try{
        const item = document.querySelector('.add-item input').value;
        if(item === "" || item == null){
            alert("please enter to do list item")
            return;
        }
        //code 
        document.querySelector('.add-item input').value = '';


     
        const url = 'http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/create-item'
        const postData ={
            name: item
        }
        const result = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify(postData) // Convert user data to JSON string
  
           })
      
        if(result.status == 200 || result.status == 201){
            const response = await result.json();
            console.log(response)

            //DOM Manipulation 
            const item = document.createElement('div')
            item.classList.add('item')
            item.id = response.id
            item.innerHTML += `
            <h2> ${response.name}</h2>
            <span class="material-symbols-outlined delete" id='item'>delete</span>
            `
           const itemContainer = document.querySelector('.to-do-container') 
           itemContainer.appendChild(item)
        }

        const handleDelete = async (itemId) => {
            try {
                const deleteUrl = `http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/item/id`;
                const deleteResult = await fetch(deleteUrl, {
                    method: 'DELETE'
                });
    
                if (deleteResult.status === 204) {
                    const itemToDelete = document.getElementById("itemId");
                    if (itemToDelete) {
                        itemToDelete.remove();
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        const deleteBtn = item.querySelector('.delete');
        deleteBtn.addEventListener('click', () => {
            handleDelete(response.id);
        });
    }catch(err){
            console.error(err)
        }
    
     
    
    })
   
   
   
 









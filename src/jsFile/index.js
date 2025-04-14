
// get data from local storage 

import { toast } from "react-toastify"

const getAllfavorites = ()=>{
    const all = localStorage.getItem('favorites')
    
    if(all){
        const favorites = JSON.parse(all)
        return favorites
    }

    else{
        return []
    }
}



// add coffee to localstorage 
const addFavorite = coffee=>{
   const favorites = getAllfavorites()
   const isExist = favorites.find(item=>item.id==coffee.id)
   if(isExist) return toast.error('⚠️ This item already exists!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
   favorites.push(coffee)
   localStorage.setItem('favorites',JSON.stringify(favorites))
   toast.success(' Successfully added!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

// remove a coffee from localstorage 

const removeFavorite = (id)=>{
    const favorites = getAllfavorites()
    const remaining = favorites.filter(coffee=>coffee.id !=id)
    localStorage.setItem('favorites',JSON.stringify(remaining))
   toast.success(' Successfully added!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

}


export {addFavorite,getAllfavorites,removeFavorite}
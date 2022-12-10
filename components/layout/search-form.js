import {useRouter} from 'next/router'

import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {
    const router = useRouter()

    function onChangeHandleInput(e) {
      const title = e.target.value
        router.push({
            pathname: title ? `/search`: `/`,
            state: { clickedFromHome: true  }, 
            query: title ? {title} : '',
          });
  sessionStorage.setItem(title, "this is value stored in sessionStorage")
  } 
  return (
    <form  className="absolute z-10 top-0">
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
            <div className="flex absolute inset-y-0 right-5 items-center pl-3 pointer-events-none">
                <FaSearch color="white"/>
            </div>
            <input type="search" id="default-search" className="block p-3 pr-10 w-full text-sm 
             bg-gray-500 text-black placeholder-black border rounded-full border-black-300 
             focus:ring-black-500 focus:border-black-500 opacity-75" 
             placeholder="إبحث..." value={this}
            onChange={onChangeHandleInput} />
        </div>
    </form>
  );
};

export default SearchBar;
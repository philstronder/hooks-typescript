import React, {
    useState, 
    useMemo, 
    useCallback,
    useRef,
    useContext
  } from 'react';



interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);

  const greeting = useCallback(
    (user: User) => alert(`Hello ${user.name}`),
    []
  )

  inputRef.current?.focus();

  return(
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  )

  // async function loadData() {
  //   const response = await fetch('https://api.github.com/users/diego3g')
  //   const data = await response.json();

  //   setUser(data);
  // }

  // return (
  //   <div>
  //     {user?.name}
  //   </div>
  // );
}
// function App() {
//   return (
//     <div></div>
//   );
// }

// export default App;

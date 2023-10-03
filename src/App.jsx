import './App.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {

  const { status, data, error } = useQuery('repoData', () =>
  fetch('https://rickandmortyapi.com/api/character/?page=19').then(res => res.json()))

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <ul>
        {data.results.map(item => (
          <li key={item.id}>{item.episode}</li>
        ))}
      </ul>
    </>
  )
}

function WrappedApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default WrappedApp;
